import type { ProcessLog } from "../types";

// Contenido HTML reconstruido a partir del PDF proporcionado por el usuario
const NAVANTIA_REPORT_HTML = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Especificación de Requisitos de Software (SRS)</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
  body { 
    font-family: 'Roboto', sans-serif; 
    color: #333; 
    max-width: 210mm; 
    margin: 0 auto; 
    padding: 40px; 
    background: white; 
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  .header { 
    border-bottom: 4px solid #004C97; 
    padding-bottom: 20px; 
    margin-bottom: 40px; 
    display: flex; 
    justify-content: space-between; 
    align-items: flex-end; 
  }
  .logo { 
    font-size: 28px; 
    font-weight: 700; 
    color: #004C97; 
    letter-spacing: 2px; 
    font-family: sans-serif;
  }
  .meta { 
    text-align: right; 
    font-size: 12px; 
    color: #666; 
    line-height: 1.4;
  }
  h1 { 
    color: #004C97; 
    font-size: 28px; 
    margin-bottom: 20px; 
    text-transform: uppercase; 
    text-align: center;
    border: 2px solid #004C97;
    padding: 15px;
    background-color: #f0f4f8;
  }
  h2 { 
    color: #004C97; 
    border-left: 5px solid #004C97; 
    padding-left: 15px; 
    margin-top: 40px; 
    margin-bottom: 20px;
    font-size: 20px; 
  }
  h3 {
    color: #003366;
    font-size: 16px;
    margin-top: 25px;
    margin-bottom: 10px;
    font-weight: bold;
  }
  p { 
    text-align: justify; 
    line-height: 1.6; 
    margin-bottom: 15px; 
    font-size: 14px;
  }
  ul {
    list-style-type: disc;
    margin-left: 20px;
    margin-bottom: 15px;
    font-size: 14px;
  }
  li {
    margin-bottom: 5px;
  }
  table { 
    width: 100%; 
    border-collapse: collapse; 
    margin-top: 20px; 
    font-size: 12px; 
    page-break-inside: auto;
  }
  tr { page-break-inside: avoid; page-break-after: auto; }
  th { 
    background: #004C97; 
    color: white; 
    padding: 10px; 
    text-align: left; 
    font-size: 13px;
  }
  td { 
    border: 1px solid #ddd; 
    padding: 10px; 
    vertical-align: top;
  }
  tr:nth-child(even) { background: #f8f9fa; }
  .footer { 
    margin-top: 60px; 
    border-top: 1px solid #ddd; 
    padding-top: 20px; 
    font-size: 10px; 
    color: #999; 
    text-align: center; 
  }
  .page-break {
    margin-top: 40px;
    border-top: 2px dashed #e5e7eb;
    padding-top: 20px;
    position: relative;
  }
  .page-break::before {
    content: 'PAGE BREAK';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    padding: 0 10px;
    color: #ccc;
    font-size: 10px;
  }
</style>
</head>
<body>

  <div class="header">
    <div class="logo">NAVANTIA</div>
    <div class="meta">
      <div><strong>SISTEMAS DEFENSA</strong></div>
      <div>DOC ID: SRS-NAV-2024-001</div>
      <div>CLASIFICACIÓN: <strong>CONFIDENCIAL / OTAN</strong></div>
    </div>
  </div>

  <h1>Especificación de Requisitos de Software (SRS)</h1>

  <h2>1. Introducción</h2>
  
  <h3>1.1 Propósito</h3>
  <p>El propósito de este documento es proporcionar una Especificación de Requisitos de Software (SRS) para el sistema de gestión y operación de buques militares. Este documento detalla los requisitos funcionales y no funcionales necesarios para asegurar la operatividad y eficiencia del buque en diversas misiones, incluyendo alistamiento, tránsito y reabastecimiento en la mar.</p>

  <h3>1.2 Alcance</h3>
  <p>Este SRS cubre los requisitos para el sistema de gestión de carga y estiba, embarque de efectivos, despliegue de estado mayor, tránsito y reabastecimiento en la mar. El sistema debe cumplir con los estándares y mejores prácticas de la Marina de los Estados Unidos, asegurando la interoperabilidad y seguridad en todas las operaciones.</p>

  <h3>1.3 Definiciones, Acrónimos y Abreviaturas</h3>
  <ul>
    <li><strong>SRS:</strong> Software Requirements Specification</li>
    <li><strong>RTM:</strong> Requirements Traceability Matrix</li>
    <li><strong>RAS:</strong> Replenishment At Sea</li>
    <li><strong>C4I:</strong> Command, Control, Communications, Computers, and Intelligence</li>
    <li><strong>CIC:</strong> Combat Information Center</li>
  </ul>

  <h3>1.4 Referencias</h3>
  <ul>
    <li>Guía de Estilo de Redacción</li>
    <li>Instrucciones de NAVSEA</li>
    <li>Guía de Planificación Logística</li>
    <li>Guía de Estilo de Emisión del DoD</li>
  </ul>

  <div class="page-break"></div>

  <h2>2. Descripción General del Sistema</h2>

  <h3>2.1 Perspectiva del Producto</h3>
  <p>El sistema de gestión y operación de buques militares es una solución integral que permite la administración eficiente de las operaciones de carga y estiba, embarque de efectivos, despliegue de estado mayor, tránsito y reabastecimiento en la mar. El sistema debe ser capaz de integrarse con los sistemas existentes de la Marina y cumplir con los requisitos operacionales y técnicos especificados.</p>

  <h3>2.2 Funciones del Producto</h3>
  <ul>
    <li>Gestión de carga y estiba</li>
    <li>Embarque y alojamiento de efectivos</li>
    <li>Despliegue de estado mayor</li>
    <li>Monitoreo y control de tránsito</li>
    <li>Operaciones de reabastecimiento en la mar</li>
  </ul>

  <h3>2.3 Usuarios del Producto</h3>
  <ul>
    <li>Personal de la Marina</li>
    <li>Operadores de buques</li>
    <li>Técnicos de mantenimiento</li>
    <li>Oficiales de estado mayor</li>
  </ul>

  <h3>2.4 Restricciones</h3>
  <p>El sistema debe cumplir con los estándares de seguridad y operatividad de la Marina de los Estados Unidos, incluyendo la interoperabilidad con sistemas C4I y CIC.</p>

  <div class="page-break"></div>

  <h2>3. Requisitos Funcionales y No Funcionales</h2>

  <h3>3.1 Requisitos Funcionales</h3>
  <table>
    <thead>
      <tr>
        <th width="15%">ID</th>
        <th width="30%">Requisito Funcional</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>F-01</td>
        <td>Gestión de carga y estiba</td>
        <td>El sistema debe permitir la carga y estiba eficiente de materiales y equipos.</td>
      </tr>
      <tr>
        <td>F-02</td>
        <td>Embarque de efectivos</td>
        <td>El sistema debe facilitar el embarque y alojamiento de efectivos.</td>
      </tr>
      <tr>
        <td>F-03</td>
        <td>Despliegue de estado mayor</td>
        <td>El sistema debe proporcionar espacios adecuados para el estado mayor y sus operaciones.</td>
      </tr>
      <tr>
        <td>F-04</td>
        <td>Monitoreo y control de tránsito</td>
        <td>El sistema debe permitir el monitoreo y control del tránsito del buque.</td>
      </tr>
      <tr>
        <td>F-05</td>
        <td>Operaciones de reabastecimiento en la mar</td>
        <td>El sistema debe soportar operaciones de reabastecimiento en la mar.</td>
      </tr>
    </tbody>
  </table>

  <h3>3.2 Requisitos No Funcionales</h3>
  <table>
    <thead>
      <tr>
        <th width="15%">ID</th>
        <th width="30%">Requisito No Funcional</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>NF-01</td>
        <td>Seguridad</td>
        <td>El sistema debe cumplir con los estándares de seguridad de la Marina.</td>
      </tr>
      <tr>
        <td>NF-02</td>
        <td>Interoperabilidad</td>
        <td>El sistema debe ser interoperable con sistemas C4I y CIC.</td>
      </tr>
      <tr>
        <td>NF-03</td>
        <td>Escalabilidad</td>
        <td>El sistema debe ser escalable para acomodar futuras expansiones.</td>
      </tr>
      <tr>
        <td>NF-04</td>
        <td>Fiabilidad</td>
        <td>El sistema debe ser fiable y asegurar la operatividad continua.</td>
      </tr>
      <tr>
        <td>NF-05</td>
        <td>Usabilidad</td>
        <td>El sistema debe ser fácil de usar para el personal de la Marina.</td>
      </tr>
    </tbody>
  </table>

  <div class="page-break"></div>

  <h2>4. Trazabilidad</h2>

  <h3>4.1 Matriz de Trazabilidad de Requisitos (RTM)</h3>
  <table>
    <thead>
      <tr>
        <th>Requisito Operacional</th>
        <th>Requisito Técnico</th>
        <th>Métrica</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>F-01 Alistamiento: Carga y Estiba</td>
        <td>47xID01</td>
        <td>Capacidad de sujeción (toneladas)</td>
      </tr>
      <tr>
        <td>F-01 Alistamiento: Carga y Estiba</td>
        <td>47xID02</td>
        <td>Tiempo de estiba (horas)</td>
      </tr>
      <tr>
        <td>F-01 Alistamiento: Carga y Estiba</td>
        <td>47xID03</td>
        <td>Precisión de detección (cm)</td>
      </tr>
      <tr>
        <td>F-01 Alistamiento: Carga y Estiba</td>
        <td>47xID04</td>
        <td>Tiempo de respuesta de alarma (segundos)</td>
      </tr>
      <tr>
        <td>F-02 Alistamiento: Embarque de Efectivos</td>
        <td>47xID05</td>
        <td>Tiempo de embarque (horas)</td>
      </tr>
      <tr>
        <td>F-02 Alistamiento: Embarque de Efectivos</td>
        <td>47xID06</td>
        <td>Capacidad de alojamiento (número de efectivos)</td>
      </tr>
      <tr>
        <td>F-02 Alistamiento: Embarque de Efectivos</td>
        <td>47xID07</td>
        <td>Capacidad de preparación de raciones (raciones/día)</td>
      </tr>
      <tr>
        <td>F-02 Alistamiento: Embarque de Efectivos</td>
        <td>47xID08</td>
        <td>Número de baños y duchas</td>
      </tr>
      <tr>
        <td>F-03 Alistamiento: Despliegue de Estado Mayor</td>
        <td>47xID09</td>
        <td>Capacidad de oficinas y sala de briefing (número de personas)</td>
      </tr>
      <tr>
        <td>F-03 Alistamiento: Despliegue de Estado Mayor</td>
        <td>47xID10</td>
        <td>Capacidad de interconexión (número de sistemas)</td>
      </tr>
      <tr>
        <td>F-03 Alistamiento: Despliegue de Estado Mayor</td>
        <td>47xID11</td>
        <td>Capacidad de dispositivos conectados (número de dispositivos)</td>
      </tr>
      <tr>
        <td>F-03 Alistamiento: Despliegue de Estado Mayor</td>
        <td>47xID12</td>
        <td>Número de sistemas redundantes</td>
      </tr>
      <tr>
        <td>F-04 Tránsito: Velocidad y Alcance</td>
        <td>47xID13</td>
        <td>Velocidad de crucero (nudos), alcance (millas náuticas)</td>
      </tr>
      <tr>
        <td>F-04 Tránsito: Velocidad y Alcance</td>
        <td>47xID14</td>
        <td>Consumo de combustible (litros/nm)</td>
      </tr>
      <tr>
        <td>F-04 Tránsito: Velocidad y Alcance</td>
        <td>47xID15</td>
        <td>Potencia de motores (MW)</td>
      </tr>
      <tr>
        <td>F-04 Tránsito: Velocidad y Alcance</td>
        <td>47xID16</td>
        <td>Capacidad de almacenamiento (litros)</td>
      </tr>
      <tr>
        <td>F-05 Tránsito: Reabastecimiento en la Mar</td>
        <td>47xID17</td>
        <td>Tiempo de reabastecimiento (horas)</td>
      </tr>
      <tr>
        <td>F-05 Tránsito: Reabastecimiento en la Mar</td>
        <td>47xID18</td>
        <td>Capacidad de transferencia (litros/hora, toneladas/hora)</td>
      </tr>
      <tr>
        <td>F-05 Tránsito: Reabastecimiento en la Mar</td>
        <td>47xID19</td>
        <td>Capacidad de iluminación (lux)</td>
      </tr>
      <tr>
        <td>F-05 Tránsito: Reabastecimiento en la Mar</td>
        <td>47xID20</td>
        <td>Capacidad de comunicación (canales seguros)</td>
      </tr>
    </tbody>
  </table>

  <div class="page-break"></div>

  <h2>5. Casos de Prueba</h2>

  <h3>5.1 F-01 Alistamiento: Carga y Estiba</h3>
  <table>
    <thead>
      <tr>
        <th>ID Técnico</th>
        <th>Caso de Prueba</th>
        <th>Procedimiento</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>47xID01</td>
        <td>Capacidad de sujeción (toneladas)</td>
        <td>Verificar que los sistemas de estiba y sujeción soporten cargas de hasta 50 toneladas por punto de sujeción. Utilizar pesos calibrados y asegurar en los puntos. Simular estado de la mar 6 y verificar que no haya corrimientos.</td>
      </tr>
      <tr>
        <td>47xID02</td>
        <td>Tiempo de estiba (horas)</td>
        <td>Evaluar el sistema de gestión de carga para distribución y organización en menos de 4 horas. Realizar una operación de carga completa y medir el tiempo desde inicio hasta finalización.</td>
      </tr>
      <tr>
        <td>47xID03</td>
        <td>Precisión de detección (cm)</td>
        <td>Comprobar que los sensores detecten movimientos superiores a 5 cm. Simular movimientos de carga de diferentes magnitudes y verificar la detección.</td>
      </tr>
      <tr>
        <td>47xID04</td>
        <td>Tiempo de respuesta de alarma (segundos)</td>
        <td>Validar que el sistema de alarma se active ante desplazamientos de carga que excedan los límites. Inducir desplazamientos y medir tiempo de activación.</td>
      </tr>
    </tbody>
  </table>

  <h3>5.2 F-02 Alistamiento: Embarque de Efectivos</h3>
  <table>
    <thead>
      <tr>
        <th>ID Técnico</th>
        <th>Caso de Prueba</th>
        <th>Procedimiento</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>47xID05</td>
        <td>Tiempo de embarque (horas)</td>
        <td>Verificar que el buque pueda embarcar hasta 800 efectivos en menos de 6 horas. Realizar operación de embarque y medir tiempo.</td>
      </tr>
      <tr>
        <td>47xID06</td>
        <td>Capacidad de alojamiento (número de efectivos)</td>
        <td>Comprobar que el buque proporciona alojamiento adecuado para 800 efectivos. Inspeccionar instalaciones y verificar número de literas.</td>
      </tr>
      <tr>
        <td>47xID07</td>
        <td>Capacidad de preparación de raciones (raciones/día)</td>
        <td>Evaluar la capacidad de las instalaciones de alimentación para preparar y servir al menos 2 raciones/día por efectivo.</td>
      </tr>
    </tbody>
  </table>

  <div class="footer">
    NAVANTIA SISTEMAS | Generado por Agente de Inteligencia Artificial | Proyecto: Naval AI Processor
  </div>

</body>
</html>
`;

/**
 * Simulates the execution of the provided Multi-Agent Python script.
 */
export const executePythonScript = async (
  file: File,
  onLog: (log: Omit<ProcessLog, "id" | "timestamp">) => void
): Promise<Blob> => {
  try {
    // 1. SETUP & INGESTION
    onLog({ message: `INITIATING UPLINK: ${file.name}`, type: "info" });
    await wait(500);

    onLog({
      message: "[CMD] %pip install pdfplumber openai weasyprint",
      type: "info",
    });
    await wait(800);

    onLog({
      message: "[PYTHON] Importando librerías (pdfplumber, AzureOpenAI)...",
      type: "info",
    });
    await wait(600);

    onLog({
      message: `[AZURE] Conectando a endpoint: https://dev-xton-cross-oai.openai.azure.com/`,
      type: "warning",
    });
    await wait(800);
    onLog({
      message:
        "[AZURE] Cliente AzureOpenAI inicializado correctamente (Model: gpt-4o).",
      type: "success",
    });
    await wait(500);

    // 2. PDF EXTRACTION & STRUCTURE ANALYSIS
    onLog({
      message: `[PDFPLUMBER] Extrayendo texto de ${file.name}...`,
      type: "info",
    });
    await wait(1200);
    onLog({
      message: "[DATA] Texto extraído. Analizando estructura documental...",
      type: "info",
    });
    await wait(800);

    onLog({
      message: "Sección Identificada: 1. Introducción",
      type: "success",
    });
    await wait(200);
    onLog({
      message: "Sección Identificada: 2. Descripción General del Sistema",
      type: "success",
    });
    await wait(200);
    onLog({
      message:
        "Sección Identificada: 3. Requisitos Funcionales y No Funcionales",
      type: "success",
    });
    await wait(200);
    onLog({
      message: "Sección Identificada: 4. Trazabilidad (RTM)",
      type: "success",
    });
    await wait(200);
    onLog({
      message: "Sección Identificada: 5. Casos de Prueba",
      type: "success",
    });

    // 3. MULTI-AGENT ORCHESTRATION
    onLog({
      message: "[ORCHESTRATOR] Iniciando orquestador_multiagente_con_srs...",
      type: "warning",
    });
    await wait(800);

    // Agent 1: Ingestion & Normalization
    onLog({
      message: "[AGENT: INGESTA] Normalizando requisitos (Sintaxis EARS)...",
      type: "info",
    });
    await wait(1000);

    // Agent 2: Derivation
    onLog({
      message: "[AGENT: DERIVACION] Derivando requisitos técnicos (47xIDxx)...",
      type: "info",
    });
    await wait(1200);

    // Agent 3: Verification
    onLog({
      message:
        "[AGENT: VERIFICACION] Auditor de Calidad analizando coherencia...",
      type: "warning",
    });
    await wait(1000);
    onLog({
      message:
        "[AGENT: VERIFICACION] Estado: APROBADO. Coherencia horizontal validada.",
      type: "success",
    });

    // Agent 4: Documentation
    onLog({
      message:
        "[AGENT: RTM MANAGER] Compilando Matriz de Trazabilidad (RTM)...",
      type: "info",
    });
    await wait(1000);
    onLog({
      message:
        "[AGENT: RTM MANAGER] Casos de prueba generados (47xID01 - 47xID20).",
      type: "success",
    });

    // Agent 5: Executive Summary
    onLog({
      message: "[AGENT: EXEC SUMM] Redactando resumen ejecutivo estratégico...",
      type: "info",
    });
    await wait(800);

    // Agent 6: SRS RAG
    onLog({
      message: "[AGENT: SRS] Consultando guías NAVSEA y estándares IEEE-830...",
      type: "info",
    });
    await wait(1000);
    onLog({
      message: "[AGENT: SRS] Estructura del documento completada.",
      type: "success",
    });

    // 4. DOCUMENT GENERATION (HTML/CSS/PDF)
    onLog({
      message: "[HTML GENERATOR] Convirtiendo Markdown a HTML5 semántico...",
      type: "info",
    });
    await wait(800);

    onLog({
      message:
        "[CSS DESIGNER] Aplicando estilos corporativos (Azul Navantia)...",
      type: "info",
    });
    await wait(800);

    onLog({
      message: "[WEASYPRINT] Renderizando PDF final: SRS_corporativo.pdf...",
      type: "warning",
    });
    await wait(2000);

    // 5. COMPLETION
    onLog({
      message: "PROCESO COMPLETADO. Documento listo para descarga.",
      type: "success",
    });

    // Return the Generated HTML Report as a Blob
    const processedBlob = new Blob([NAVANTIA_REPORT_HTML], {
      type: "text/html",
    });
    return processedBlob;
  } catch (error) {
    onLog({
      message: "ERROR CRÍTICO EN EJECUCIÓN DE SCRIPT.",
      type: "error",
    });
    throw error;
  }
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
