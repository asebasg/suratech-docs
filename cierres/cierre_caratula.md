# Mensajes de cierre para incidente: Generación de carátula

## Tabla de Tipologías de Resolución

| Tipología |
| --- |
| [Error en fechas de vigencia de polizas](#error-en-fechas-de-vigencia-de-polizas) |
| [Error en marcación del lead - 0km](#error-en-marcación-del-lead---0km) |
| [No se genera carátula](#no-se-genera-carátula) |
| [No se genera póliza por automatización](#no-se-genera-póliza-por-automatización) |
| [PQR - Legalización manual SAP](#pqr---legalización-manual-sap) |
| [Cambio de asesor](#cambio-de-asesor) |
| [No llegan documentos al cliente](#no-llegan-documentos-al-cliente) |

---

## Error en fechas de vigencia de polizas

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
X pólizas presentan discrepancias en fechas de vigencia entre carátulas y datos registrados en sistema.

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
Campos de fecha inicio y fecha fin de vigencia parametrizados incorrectamente en leads de las X pólizas, generando carátulas con datos inconsistentes respecto a la información contractual.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Fechas de vigencia corregidas en leads de las 3 pólizas. Carátulas regeneradas con información de vigencia correcta y consistente.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Revisión carátulas X pólizas.
- Identificación desfases fechas vigencia.
- Corrección fecha inicio y fecha fin en leads.
- Regeneración carátulas con datos correctos.
- Se adjuntan carátulas corregidas.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```

## Error en marcación del lead - 0km

### Error en marcación del lead

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Nombre cliente incorrecto en carátula.

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
Campo nombre parametrizado incorrectamente en Salesforce.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Nombre corregido en Lead, Account e IPA. Carátula regenerada.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Corrección nombre registros.
- Carátula actualizada.
- Se adjunta corregida.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```

### Error en marcación 0km en vehículo

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Vehículo registrado como 0 km en carátula y documentación cuando corresponde a motocicleta usada.

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗰𝗮𝗱𝗮:
Campo "Condición 0 km" en lead parametrizado como "Sí" cuando debería ser "No". Esta inconsistencia se reflejó en carátula y contrato generados.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Campo "Condición 0 km" corregido a "No" en lead. Carátula y contrato regenerados con información correcta.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Revisión lead y documentación.
- Identificación inconsistencia condición vehículo.
- Corrección campo "Condición 0 km" a "No".
- Regeneración carátula con datos correctos.
- Regeneración contrato con datos correctos.
- Se adjunta documentación corregida.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```

## No se genera carátula

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Se reportó que el cliente no recibió la carátula de su póliza tras la expedición en el sistema, impidiendo que contara con la documentación oficial de su cobertura.

𝗖𝗮𝘂𝘀𝗮 𝗥𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
La carátula no se generó automáticamente en el sistema debido a intermitencias en el servicio que interrumpieron el proceso de generación y distribución automática del documento al cliente.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Se verificó en SFI que la póliza está en condiciones de generar carátula. Se procedió a generar manualmente el documento con los datos del sistema y se validó que la información sea precisa y completa antes de su distribución.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
1. Revisión en SFI del estado de la póliza.
2. Confirmación de que la póliza está apta para generar carátula.
3. Generación manual de carátula con datos del sistema.
4. Validación de información completa y precisa en el documento.
5. Se adjunta carátula generada para distribución al cliente.

𝗡𝗼𝘁𝗮 𝗽𝗮𝗿𝗮 𝗹𝗼𝘀 𝗮𝘀𝗲𝘀𝗼𝗿𝗲𝘀:
Ustedes mismos pueden generar carátulas desde el botón que se encuentra en la póliza. Esta funcionalidad permite agilizar el proceso sin necesidad de escalamiento. (Se adjunta captura de pantalla con la ubicación del botón).

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```

## No se genera póliza por automatización

```text
No se ha proporcionado descripción aún
```

## PQR - Legalización manual SAP

```text
No se ha proporcionado descripción aún
```

## Cambio de asesor

```text
No se ha proporcionado descripción aún
```

## No llegan documentos al cliente

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Cliente no recibió carátula y contrato.

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
Documentos generados correctamente pero no enviados por intermitencias en servicio.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Documentos verificados. Reenviados manualmente al cliente.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Validación póliza.
- Envío manual.
- Se adjuntan documentos.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```
