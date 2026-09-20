const sourceFile = document.getElementById("source-file");
const fileStatus = document.getElementById("file-status");
const auditChoice = document.getElementById("audit-choice");
const adaptChoice = document.getElementById("adapt-choice");
const reportChoice = document.getElementById("report-choice");
const reportChoiceBox = document.getElementById("report-choice-box");
const reportHelp = document.getElementById("report-help");
const levelField = document.getElementById("level-field");
const level = document.getElementById("level");
const choiceError = document.getElementById("choice-error");
const simulate = document.getElementById("simulate");
const progress = document.getElementById("progress");
const progressTitle = document.getElementById("progress-title");
const progressMessage = document.getElementById("progress-message");
const outcome = document.getElementById("outcome");
const outcomeTitle = document.getElementById("outcome-title");
const resultStatus = document.getElementById("result-status");
const auditOutput = document.getElementById("audit-output");
const adaptOutput = document.getElementById("adapt-output");
const reportOutput = document.getElementById("report-output");
const adaptedContent = document.getElementById("adapted-content");
const reportAdaptedContent = document.getElementById("report-adapted-content");
const originalContent = document.getElementById("original-content");
const download = document.getElementById("download");
let renderedLevel = "moderado";

const original = "Para solicitar la ayuda, presente el formulario antes del 30 de septiembre de 2026. Adjunte una copia del DNI. No podrá recibir la ayuda si falta alguno de los documentos. La respuesta llegará por correo electrónico.";
const adaptations = {
  moderado: [
    "Para pedir la ayuda, entregue el formulario antes del 30 de septiembre de 2026.",
    "Añada una copia de su DNI. Si falta algún documento, no podrá recibir la ayuda.",
    "Recibirá la respuesta por correo electrónico."
  ],
  alto: [
    "Para pedir la ayuda, siga estos pasos:",
    "1. Entregue el formulario antes del 30 de septiembre de 2026.",
    "2. Añada una copia de su DNI.",
    "Si falta algún documento, no podrá recibir la ayuda. Recibirá la respuesta por correo electrónico.",
    "DNI significa documento nacional de identidad."
  ]
};

function renderParagraphs(container, paragraphs) {
  container.replaceChildren();
  let list = null;
  for (const text of paragraphs) {
    const step = text.match(/^\d+\.\s+(.+)$/);
    if (step) {
      if (!list) {
        list = document.createElement("ol");
        container.append(list);
      }
      const item = document.createElement("li");
      item.textContent = step[1];
      list.append(item);
      continue;
    }
    list = null;
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    container.append(paragraph);
  }
}

function updateChoices() {
  if (!adaptChoice.checked) reportChoice.checked = false;
  reportChoice.disabled = !adaptChoice.checked;
  reportChoiceBox.classList.toggle("is-disabled", !adaptChoice.checked);
  reportHelp.hidden = adaptChoice.checked;
  levelField.hidden = !adaptChoice.checked;
  level.disabled = !adaptChoice.checked;
  choiceError.hidden = true;
  outcome.hidden = true;
}

for (const choice of [auditChoice, adaptChoice, reportChoice, level]) {
  choice.addEventListener("change", updateChoices);
}

sourceFile.addEventListener("change", () => {
  const selected = sourceFile.files?.[0];
  fileStatus.textContent = selected
    ? `Has seleccionado «${selected.name}». Este prototipo no leerá el archivo: el resultado será siempre un ejemplo independiente.`
    : "Todavía no has seleccionado un archivo. Puedes ver la simulación igualmente.";
  outcome.hidden = true;
});

simulate.addEventListener("click", async () => {
  const selected = {
    audit: auditChoice.checked,
    adapt: adaptChoice.checked,
    report: reportChoice.checked
  };
  if (!selected.audit && !selected.adapt) {
    choiceError.hidden = false;
    return;
  }
  choiceError.hidden = true;
  renderedLevel = level.value;
  outcome.hidden = true;
  progress.hidden = false;
  for (const control of [sourceFile, auditChoice, adaptChoice, reportChoice, level, simulate]) control.disabled = true;
  progressTitle.focus();

  const stages = ["Leyendo el documento de ejemplo"];
  if (selected.audit) stages.push("Revisando el contenido y la presentación");
  if (selected.adapt) stages.push("Preparando la adaptación de ejemplo");
  if (selected.report) stages.push("Comparando el original y la adaptación");
  stages.push("Preparando los resultados");
  for (const stage of stages) {
    progressMessage.textContent = `Simulación: ${stage}.`;
    await new Promise((resolve) => setTimeout(resolve, 750));
  }

  auditOutput.hidden = !selected.audit;
  adaptOutput.hidden = !selected.adapt;
  reportOutput.hidden = !selected.report;
  if (selected.adapt) renderParagraphs(adaptedContent, adaptations[renderedLevel]);
  if (selected.report) {
    originalContent.textContent = original;
    renderParagraphs(reportAdaptedContent, adaptations[renderedLevel]);
  }
  resultStatus.textContent = "Los resultados de ejemplo están listos. No hemos procesado tu archivo.";
  progress.hidden = true;
  outcome.hidden = false;
  for (const control of [sourceFile, auditChoice, adaptChoice, simulate]) control.disabled = false;
  updateChoicesAfterProcessing();
  outcomeTitle.focus();
});

function updateChoicesAfterProcessing() {
  reportChoice.disabled = !adaptChoice.checked;
  level.disabled = !adaptChoice.checked;
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

download.addEventListener("click", () => {
  let paragraphs = "";
  let insideList = false;
  for (const text of adaptations[renderedLevel]) {
    const step = text.match(/^\d+\.\s+(.+)$/);
    if (step) {
      if (!insideList) paragraphs += "<ol>";
      paragraphs += `<li>${escapeHtml(step[1])}</li>`;
      insideList = true;
    } else {
      if (insideList) paragraphs += "</ol>";
      paragraphs += `<p>${escapeHtml(text)}</p>`;
      insideList = false;
    }
  }
  if (insideList) paragraphs += "</ol>";
  const html = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>UniLecta · Aviso adaptado de ejemplo</title>
  <style>body{max-width:44rem;margin:2rem auto;padding:0 1rem;font:1.125rem/1.7 system-ui,sans-serif;color:#17212b;background:#fff}h1{font-size:1.6rem;line-height:1.3;color:#174875}p{margin:1rem 0}.brand{font-weight:700;color:#174875}.notice{border-left:4px solid #174875;padding:.5rem 1rem;background:#e8f1f8}</style>
</head>
<body>
  <main>
    <p class="brand">UniLecta · Universal · Lectura · Accesible</p>
    <p class="notice">Borrador ilustrativo. No está validado en lectura fácil ni procede del archivo que hayas seleccionado.</p>
    <h1>Aviso sobre la solicitud de ayuda</h1>
    ${paragraphs}
  </main>
</body>
</html>`;
  const url = URL.createObjectURL(new Blob([html], { type: "text/html;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "unilecta-aviso-adaptado-ejemplo.html";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
