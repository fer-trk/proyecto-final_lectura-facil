# Proyecto final de IA: Adaptación de textos a lectura fácil

**Autora:** Fernanda Torok Polito  
**Bootcamp:** Inteligencia Artificial y Datos · Factoría F5  
**Modalidad:** Individual  
**Documento:** Propuesta de proyecto para revisión del tutor · Versión 2.0 · 9 de septiembre de 2026

## 📝 Descripción del Proyecto

Este proyecto consiste en desarrollar una herramienta que adapte textos en español siguiendo criterios de lectura fácil y permita ajustar los apoyos a las preferencias de cada persona. El objetivo es facilitar la comprensión de documentos educativos, tecnológicos, administrativos, contables y narrativos mediante una interfaz accesible.

La aplicación permitirá introducir texto o cargar documentos, elegir una adaptación genérica o personalizada, consultar el original y descargar el resultado. Utilizará un modelo de machine learning entrenado para reconocer el género del documento, procesamiento del lenguaje natural (NLP) y un modelo de lenguaje preentrenado (LLM) para reformularlo. Se incorporarán estrategias de adaptación y comprobaciones para conservar información relevante.

El público prioritario serán personas adultas que necesitan apoyo para comprender textos, incluidas personas con discapacidad intelectual o dificultades de lectura. El diseño contemplará también necesidades que pueden presentar personas con dislexia, TDAH, autismo, daltonismo y otras condiciones. Las preferencias se elegirán individualmente, sin asignar automáticamente una configuración por diagnóstico.

La propuesta de valor que se evaluará combina preferencias comprensibles, estrategias según documento y cambios revisables que conserven el significado. En el nivel Experto se desarrollará una extensión de Chrome para aplicar el sistema a contenido de páginas web compatibles. El relevamiento de alternativas y su relación con esta propuesta se recoge en el Anexo B.

## 📦 Condiciones de entrega

- El proyecto se realizará de forma **individual**, con un repositorio de GitHub que reúna código, notebooks y documentación.
- La solución incluirá un **modelo de ML entrenado y evaluado**, integrado en un flujo funcional de adaptación. Se documentará qué aporta su predicción al resultado.
- El trabajo se organizará mediante un tablero Kanban y especificaciones de requisitos y criterios de aceptación, siguiendo un enfoque SDD.
- Se utilizarán documentos propios, autorizados o con condiciones de reutilización verificadas. Los datos sintéticos se identificarán como tales.
- Las decisiones, los experimentos y las limitaciones deberán poder explicarse en la defensa. Las herramientas de asistencia con IA se utilizarán manteniendo la comprensión y revisión del trabajo.
- Los niveles serán **acumulativos**. Esencial constituirá el producto mínimo evaluable; las ampliaciones se desarrollarán después de comprobar el funcionamiento del nivel anterior.

## ⏳ Plazo de Entrega

**Fecha de inicio y fecha de entrega: a acordar con el tutor según el calendario del proyecto final.**

La planificación se organizará por hitos: datos y modelo de referencia; flujo Esencial completo; personalización y formatos de Intermedio; ampliaciones de Avanzado; extensión de Experto. El calendario concretará los niveles comprometidos según las semanas, recursos y posibilidades de evaluación con lectores.

## 🛠️ Tecnologías a utilizar

Las siguientes elecciones son propuestas de implementación. Las versiones y el proveedor del LLM se concretarán al iniciar el desarrollo.

| Área | Tecnologías y uso previsto |
|---|---|
| Programación y análisis de datos | Python, Jupyter Notebook, NumPy, Pandas, Matplotlib y Seaborn para preparación, EDA y visualización. |
| Machine learning | scikit-learn: TF-IDF y regresión logística como primera solución de clasificación. Comparación con un predictor mayoritario y con alternativas justificadas por los resultados. |
| NLP y adaptación | spaCy, reglas lingüísticas y LLM preentrenado con instrucciones basadas en pautas seleccionadas, tipo de documento y preferencias. |
| API e interfaz | FastAPI; React, HTML semántico y CSS. JavaScript o TypeScript según la implementación elegida. |
| Documentos | python-docx para Word y pdfplumber como candidato para PDF textual. OCR y exportación PDF estructurada en Avanzado. |
| Persistencia y calidad | SQLite para historial y revisiones; logging, pytest y comprobaciones de accesibilidad, complementadas con revisión manual. |
| Organización y despliegue | Git, GitHub, Jira o Trello, Docker y un servicio de despliegue por seleccionar según recursos. |
| Extensión de navegador | JavaScript o TypeScript, API de extensiones de Chrome y reutilización de la API del proyecto. |

La arquitectura inicial concentrará extracción, clasificación, adaptación y comprobaciones en un servicio Python. El proyecto utilizará un LLM preentrenado; su ajuste fino quedará condicionado a disponer de datos adecuados y a demostrar una mejora.

## 🏆 Niveles de Entrega

El **Nivel Intermedio** corresponde al denominado **Nivel Medio** en las consignas de referencia. Estos niveles describen el desarrollo del proyecto; las opciones de adaptación del texto son independientes.

### 🟢 Nivel Esencial

Desarrollar un flujo completo de adaptación para documentos sencillos, con un modelo de ML integrado y evidencia de funcionamiento.

- [ ] **Datos y EDA.** Preparar un corpus etiquetado; documentar origen, permisos, limpieza, distribución de clases y ejemplos. Separar entrenamiento, validación y prueba por documento y controlar duplicados y fuentes compartidas.
- [ ] **Modelo de clasificación.** Entrenar un clasificador para tres géneros iniciales: instrucciones o procedimientos, explicaciones y narraciones. Compararlo con un predictor mayoritario y reportar macro-F1, precisión y exhaustividad por clase, matriz de confusión y diferencias entre entrenamiento y validación. La persona podrá corregir la predicción; se ofrecerá una estrategia general cuando el documento quede fuera de cobertura.
- [ ] **Adaptación con NLP y LLM.** Aplicar pautas documentadas y utilizar el género detectado para orientar la reformulación. Ofrecer una adaptación genérica por defecto y dos intensidades de apoyo, con nombres provisionales «Cambios moderados» y «Más apoyo para comprender».
- [ ] **Formatos iniciales.** Aceptar texto pegado, TXT y DOCX sencillos. Mostrar el resultado en pantalla y permitir su descarga en HTML y TXT.
- [ ] **Conservación del contenido.** Mantener acceso al original, proteger fragmentos como código y comandos y comprobar cambios en cifras. Registrar omisiones o alteraciones encontradas en los documentos de prueba.
- [ ] **Aplicación accesible.** Integrar el sistema en una API y una interfaz con etiquetas claras, navegación por teclado, foco visible y compatibilidad comprobada con lector de pantalla en las tareas principales.
- [ ] **Evaluación y reproducción.** Guardar el modelo y las instrucciones utilizadas, documentar cómo ejecutar el proyecto y presentar resultados con documentos reservados, incluidos ejemplos de fallo.

### 🟡 Nivel Intermedio

Ampliar el control de la adaptación y comprobar su utilidad en diferentes documentos.

- [ ] **Configuración personalizada.** Permitir combinar opciones como explicar vocabulario, dividir instrucciones y añadir ejemplos identificados. Guardar preferencias localmente y separar los apoyos lingüísticos de tamaño, contraste e interlineado.
- [ ] **Nuevos formatos.** Incorporar PDF con texto seleccionable como entrada y DOCX estructurado como salida, conservando títulos, listas y orden de lectura.
- [ ] **Estrategias por documento.** Combinar género con dominio, inicialmente seleccionable por la persona, y aplicar estrategias para materiales tecnológicos, trámites, explicaciones contables, cuentos y textos académicos según la cobertura disponible. Incorporar glosario contextual.
- [ ] **Revisión por bloques.** Relacionar fragmentos del original con la adaptación, permitir editar o regenerar un bloque y mostrar las modificaciones sin depender únicamente del color.
- [ ] **Mejora del modelo.** Comparar al menos una alternativa al clasificador inicial; aplicar validación cruzada y ajuste de hiperparámetros cuando el tamaño y la distribución de los datos lo permitan. Mantener una prueba final reservada.
- [ ] **Feedback y calidad.** Recoger valoraciones voluntarias y errores útiles para revisión, sin incorporar automáticamente documentos de usuarios al entrenamiento. Añadir logs sin contenido sensible y tests de extracción, preprocesamiento y conservación de fragmentos.
- [ ] **Comparación de resultados.** Evaluar la adaptación con y sin estrategia específica y con distintas preferencias. Realizar pruebas exploratorias de comprensión y uso con lectores destinatarios cuando se cuente con participación; documentar su alcance.

### 🟠 Nivel Avanzado

Ampliar el tratamiento documental y preparar una versión desplegable con revisión e historial.

- [ ] **Documentos escaneados y extensos.** Incorporar OCR, procesamiento por secciones y tablas sencillas. Detectar fallos de extracción y comprobar la coherencia entre secciones.
- [ ] **Exportación PDF.** Generar documentos con estructura y orden de lectura comprobados, incluidos títulos, listas y tablas cuando correspondan. Verificar la salida con tecnología de apoyo.
- [ ] **Controles de fidelidad.** Ampliar el análisis de cantidades, negaciones, obligaciones, condiciones y referencias. Señalar posibles errores y permitir su revisión.
- [ ] **Base de datos e historial.** Guardar versiones, preferencias cuando proceda y registros de revisión; permitir eliminar documentos almacenados e identificar la configuración usada en cada adaptación.
- [ ] **Revisión humana y comprensión.** Registrar por separado borrador, revisión y validación con lectores, vinculando cada estado con una versión concreta. El último estado solo podrá asignarse si se ha realizado el proceso correspondiente.
- [ ] **Docker y despliegue.** Preparar una versión dockerizada y una demostración desplegada en un entorno adecuado al presupuesto. Documentar configuración, tratamiento de datos y límites de uso.
- [ ] **Evaluación de integración.** Comprobar el recorrido de carga a descarga, errores de servicio y formatos admitidos; ampliar pruebas de accesibilidad, tiempos de respuesta y coste por documento.

### 🔴 Nivel Experto

Desarrollar una extensión de Chrome para adaptar contenido web mediante el sistema ya construido.

- [ ] **Adaptación en páginas.** Permitir adaptar texto seleccionado o contenido principal de páginas compatibles tras una acción de la persona.
- [ ] **Reutilización del sistema.** Consumir la misma API y aplicar las preferencias de lectura configuradas, manteniendo los controles de conservación disponibles.
- [ ] **Interacción accesible y reversible.** Permitir consultar o recuperar el original, gestionar el foco y conservar la navegación. Comprobar el comportamiento de enlaces y formularios.
- [ ] **Contenido dinámico y cobertura.** Gestionar cambios de contenido en un conjunto declarado de sitios, limitar permisos y documentar situaciones incompatibles. La entrega incluirá una demostración reproducible de la extensión.

Como ampliación opcional, se podrá incorporar seguimiento de cambios en los documentos recibidos y comparación de versiones de modelos. Cualquier sustitución del modelo deberá basarse en una evaluación documentada. Esta ampliación no será condición para completar la extensión.

## ♿ Requisitos transversales

Estos requisitos se aplicarán desde Esencial y acompañarán cada funcionalidad nueva.

- **Accesibilidad:** objetivo WCAG 2.2 AA, complementado con recomendaciones W3C COGA. Incorporar controles visuales opcionales, mensajes comprensibles y pasos previsibles; combinar verificaciones automáticas con recorridos manuales. Las fuentes se detallan en el Anexo C.
- **Personalización:** utilizar preferencias opcionales y reversibles. Mostrar pocas opciones principales y permitir ampliar la configuración. Mantener un tono respetuoso con personas adultas.
- **Significado:** conservar la información necesaria para comprender o actuar. Una adaptación podrá ser más extensa si necesita explicaciones; cualquier función de resumen se identificará por separado.
- **Estado del resultado:** identificar la salida automática como borrador de adaptación. La revisión profesional y la validación con lectores son actividades diferenciadas; una métrica o un segundo LLM no acreditan comprensión.
- **Datos y transparencia:** usar documentos propios o autorizados para la demostración; explicar si un servicio externo procesa el contenido. No reutilizar textos personales para entrenamiento por defecto.
- **Calidad:** documentar versiones de datos, modelos e instrucciones, así como cobertura y fallos conocidos. Las métricas de legibilidad serán señales auxiliares.

## 📦 Entregables

- Repositorio de GitHub con código, dependencias, configuración de ejemplo y README con instrucciones de ejecución.
- Notebook de preparación, EDA, entrenamiento y evaluación; ficha del dataset y modelo guardado.
- Especificaciones, criterios de aceptación y enlace al tablero Kanban.
- Aplicación y API funcionales correspondientes al nivel alcanzado; extensión de Chrome en Experto.
- Informe de resultados con comparación de modelos y adaptaciones, errores, comprobaciones de accesibilidad y limitaciones.
- Demostración orientada a una persona usuaria y presentación técnica que explique arquitectura, decisiones y resultados.

## 📊 Evaluación

Se proponen las siguientes competencias y evidencias para su revisión por el tutor.

| Competencia | Evidencia evaluable |
|---|---|
| Analizar y preparar conjuntos de datos | EDA, procedencia, distribución de clases, calidad de etiquetas y separación sin fugas. |
| Aplicar y evaluar aprendizaje automático | Comparación con el modelo de referencia, métricas por clase, análisis de generalización y justificación de la alternativa elegida. |
| Integrar NLP y modelos de lenguaje | Pautas y estrategias implementadas; comparación frente a una adaptación genérica; conservación de información y análisis de errores. |
| Aplicar fundamentos de computer science e ingeniería de software | Diseño modular, estructuras para documentos y bloques, API, gestión de estados y errores, control de versiones y pruebas pertinentes. |
| Desarrollar una solución accesible | Tareas realizadas con teclado y tecnología de apoyo; revisión cognitiva y evidencia de pruebas con lectores cuando estén disponibles. |
| Comunicar y organizar un proyecto | Repositorio reproducible, tablero, documentación, defensa técnica y demostración del nivel alcanzado. |

La calidad del clasificador se evaluará con métricas de clasificación y análisis de errores. Se compararán entrenamiento y validación para detectar sobreajuste; los objetivos de rendimiento se justificarán con el dataset y el modelo de referencia.

Para la adaptación se revisarán omisiones, contenido añadido sin respaldo y cambios en cifras, excepciones, código o sentido. Los errores críticos detectados deberán revisarse antes de presentar la versión como revisada. Superar el conjunto de prueba no garantiza ausencia de errores en documentos nuevos.

La evaluación de comprensión se distinguirá de la revisión técnica. El piloto y sus límites se concretan en el Anexo C.

## 💡 Consejos para el Desarrollo

- Comenzar con documentos breves y estructuras sencillas; completar Esencial antes de incorporar OCR o páginas web.
- Mantener explicaciones de las decisiones y avanzar por incrementos que puedan demostrarse y comprenderse.
- Revisar accesibilidad desde los primeros formularios y comprobar también los mensajes de espera y error.
- Priorizar problemas observados al añadir modelos o infraestructura. El clasificador entrenado debe aportar una mejora comprobable al flujo.
- Preparar desde el inicio ejemplos reservados que permitan detectar pérdida de información y cambios de significado.

## Anexo A. Datos y estrategias de adaptación

### Datasets

| Recurso | Uso previsto y condiciones |
|---|---|
| **Corpus propio de documentos etiquetados** | Entrenar y evaluar géneros. Registrar texto, dominio, género, procedencia y permisos; deduplicar y separar por documento y fuente. La cobertura se ampliará según datos disponibles. |
| **FEINA** | Candidato de pares de simplificación en español para educación financiera, desarrollado por investigadores del Tecnológico de Costa Rica y la UPF. Revisar licencia concreta, archivos y adecuación antes de incorporarlo. No contiene por sí mismo las etiquetas de género necesarias. [Ficha de los autores](https://huggingface.co/datasets/saul1917/FEINA). |
| **IrekiaLF** | Candidato de lenguaje administrativo mencionado en la revisión de Simple.Text. Distribución original, licencia y condiciones pendientes de verificar; no se establece como dependencia. [Referencia académica](https://aclanthology.org/2025.ranlp-1.24.pdf). |
| **Conjunto propio de evaluación** | Documentos reservados con elementos imprescindibles y preguntas de comprensión revisadas. Es independiente del corpus de entrenamiento y del feedback de usuarios. |

Los corpus de simplificación no garantizan validación de lectura fácil para todos los lectores. Los textos sintéticos podrán apoyar experimentos, pero su uso exclusivo limitará las conclusiones sobre documentos reales.

### Género, dominio y conservación

El género expresa la finalidad del texto; el dominio, su temática. Por ejemplo, un tutorial puede ser procedimental e informático. El clasificador inicial reconocerá género y el dominio podrá elegirse manualmente.

| Documento | Estrategia y elementos que deben conservarse |
|---|---|
| Informático | Explicar términos y organizar pasos; conservar sintaxis de comandos, código, rutas, versiones y secuencias necesarias. |
| Trámite | Aclarar quién debe hacer qué y cuándo; conservar requisitos, excepciones, fechas, importes y enlaces. |
| Contable | Explicar términos y relaciones; conservar unidades, signos, porcentajes y condiciones, sin inventar cálculos. |
| Cuento | Aclarar referentes y secuencia; conservar personajes, acontecimientos, causalidad y sentido narrativo. |
| Académico | Organizar conceptos y explicar vocabulario; conservar citas, atribuciones, hipótesis y matices de incertidumbre. |

## Anexo B. Soluciones existentes y valor agregado

Relevamiento documental realizado el **9 de septiembre de 2026**. Describe funciones publicadas, sin prueba práctica comparativa ni auditoría de accesibilidad. Una función no documentada queda como no verificada.

| Solución | Funciones documentadas y relación con el proyecto |
|---|---|
| **PLACEAT** | Adaptación conversacional de texto y ajustes visuales de lectura. Sirve como comparador del flujo de uso y de la ayuda necesaria para obtener una adaptación. [Página oficial](https://placeat.org/asistente-de-lectura-facil-placeat/). |
| **ATECA / referencia a FACILE** | ATECA analiza una selección de pautas y propone transformaciones. Su web indica falta de mantenimiento y recomienda FACILE, cuyas funciones actuales requieren verificación directa. [Ayuda oficial](https://ateca.linkeddata.es/pages/help.html). |
| **Simple.Text / Simple-Tool** | El artículo de la Universidad de Alicante describe entradas Word, PDF y TXT, salida TXT y transformaciones personalizables. Es un comparador cercano de formatos y configuración. [Artículo](https://aclanthology.org/2025.ranlp-1.24.pdf). |
| **Read Easy.ai** | Publica extensión de Chrome, API, complementos de Office, soporte de español y sinónimos para distintos niveles de lectura. Es una referencia para Experto. [Documentación oficial](https://readeasy.ai/support/). |
| **ERAS, IIC** | Analizador de lectura fácil en español con cuatro índices, 33 subíndices e informes. Permite situar los controles automáticos del proyecto entre soluciones existentes. [Presentación oficial](https://www.iic.uam.es/procesamiento-del-lenguaje-natural/lanzamos-eras-analizador-de-lectura-facil-en-espanol/). |
| **EASIER, UC3M** | Apoyo léxico con palabras complejas, alternativas, definiciones y pictogramas; cuenta con investigación de evaluación con lectores. Verificar disponibilidad actual antes de ensayarlo. [Fundación Universia](https://www.fundacionuniversia.net/actualidad/easier--proyecto-de-la-uc3m-impulsado-por-indra-y-fundacion-univ.html), [publicación UC3M](https://e-archivo.uc3m.es/entities/publication/a34bf051-916b-44f9-8151-ddd935dd79e3). |
| **Servicio Adapta** | Servicio profesional de adaptación, validación y diseño de Plena inclusión Madrid. Referencia del proceso humano, complementario a la herramienta. [Servicio oficial](https://plenainclusionmadrid.org/servicio-adapta/). |

Estas funciones tienen antecedentes. La diferenciación propuesta se evaluará en la combinación de **preferencias individuales, estrategias por documento y conservación del significado con cambios revisables**. Se medirá si permite comprender mejor el contenido y completar la tarea con menos ayuda. No se afirma exclusividad ni superioridad antes de realizar la comparación.

## Anexo C. Referencias y protocolo de evaluación

### Fuentes institucionales

- [Inclusion Europe: Information for all](https://www.inclusion-europe.eu/easy-to-read-standards-guidelines/): pautas para información fácil de leer y comprender.
- [UNE 153101:2018 EX, ficha de AENOR](https://tienda.aenor.com/p/norma-une-153101-2018-ex-n0060036): referencia española para elaboración de documentos en lectura fácil. La ficha pública no sustituye el texto íntegro obtenido legítimamente.
- [UPM y CEACOG: proceso de adaptación y ATECA](https://www.upm.es/UPM/SalaPrensa/Noticias_de_investigacion?fmt=detail&id=CON10810&prefmt=articulo): distinción entre análisis, adaptación y validación con lectores destinatarios.
- [Plena inclusión Madrid: Servicio Adapta](https://plenainclusionmadrid.org/servicio-adapta/): referencia práctica de adaptación, diseño y validación.
- [W3C: WCAG 2.2](https://www.w3.org/TR/WCAG22/): criterios para el objetivo de accesibilidad web AA.
- [W3C COGA](https://www.w3.org/TR/coga-usable/): recomendaciones complementarias de accesibilidad cognitiva; no constituyen otro nivel de conformidad WCAG.

Se documentará cada pauta implementada mediante fuente, interpretación, ejemplo y límites de comprobación. Las instrucciones del LLM utilizarán una selección curada de pautas. Las opciones «Cambios moderados» y «Más apoyo para comprender» son decisiones del producto, no niveles oficiales de lectura fácil.

### Piloto de evaluación propuesto

Se reservarán inicialmente **12 documentos breves**, tres de cada grupo: tecnológico, administrativo, educativo-contable y narrativo. Este piloto servirá para comprobar el flujo y detectar errores; no bastará para afirmar superioridad general ni será el único conjunto de evaluación del clasificador.

Se compararán el sistema propio, una adaptación genérica con el mismo LLM y las alternativas accesibles para el estudio. Se mantendrán texto y objetivo de adaptación y se registrarán fecha, versión, configuración y restricciones. Las herramientas que no puedan ensayarse se identificarán como no evaluadas.

Se recogerán errores de fidelidad, respuestas a preguntas de comprensión, finalización de tareas, ayuda necesaria, fallos de extracción, tiempo y coste por documento. Cuando participen lectores, se alternará el orden de versiones y se utilizarán materiales equivalentes para reducir el efecto de haber leído antes el original.

Si no se dispone de participación de lectores, se presentarán únicamente resultados técnicos y revisión de contenido, dejando la comprensión como evaluación pendiente. Ningún indicador automático habilitará el estado «validado con lectores».
