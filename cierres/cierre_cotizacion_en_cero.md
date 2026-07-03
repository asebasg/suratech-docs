# Mensajes de cierre para incidente: Cotización en cero

## Tabla de Tipologías de Resolución

| Tipología |
| --- |
| [No existen datos en Fasecolda](#no-existen-datos-en-fasecolda) |
| [Falla conexión RUNT](#falla-conexión-runt) |

---

## No existen datos en Fasecolda

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Se reporta inconveniente al momento de cotizar, ya que al diligenciar la información, el sistema presenta error en la cotización y los valores en pantalla principal se visualizan en 0.

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗶𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
La placa del vehículo no se encuentra registrada en la base de datos de Fasecolda. Aunque el vehículo aparezca en el RUNT, el registro de Fasecolda es gestionado por la entidad externa y no es controlable desde nuestro equipo de soporte. Sin este registro en Fasecolda, el sistema no puede generar cotizaciones con valor.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Se validó el caso y se confirmó que la placa no existe en los registros de Fasecolda. Por lo anterior, no es posible generar cotizaciones en este momento. Se recomienda esperar a que Fasecolda actualice su base de datos con el nuevo registro del vehículo.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Revisión del lead asociado al caso.
- Validación del registro de la placa en sistema.
- Confirmación de ausencia en registros de Fasecolda.
- Información al asesor sobre limitación externa.
- Cierre del caso al evidenciarse que la solución depende de actualización de Fasecolda.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```

## Falla conexión RUNT

### Mensaje (sin URL de nuevo lead)

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Se reporta inconveniente al momento de cotizar, ya que al diligenciar la información el sistema presenta error en la cotización y los valores en pantalla principal se visualizan en 0.

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗶𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
Se evidenció una falla de conexión con RUNT que impidió completar la información del vehículo, necesaria para el proceso de tarificación.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Se forzó la actualización del lead ingresando nuevamente por el flujo normal. Los datos se normalizaron y se generaron las cotizaciones con valor exitosamente. El lead puede continuar con su gestión normal.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Revisión del lead asociado al caso.
- Validación del requerimiento registrado.
- Identificación de falla de conexión con RUNT.
- Actualización del lead mediante flujo normal.
- Verificación de carga correcta de datos del vehículo.
- Generación y validación de cotizaciones con valor.
- Cierre del caso al evidenciarse la solución satisfactoria.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```

### Mensaje (con URL de nuevo lead)

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Se reporta inconveniente al momento de cotizar, ya que al diligenciar la información el sistema presenta error en la cotización y los valores en pantalla principal se visualizan en 0.

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗶𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
Se evidenció una falla de conexión con RUNT que impidió completar la información del vehículo, necesaria para el proceso de tarificación.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Se creó un nuevo lead con los valores actualizados debido al error en la consulta hacia RUNT. Se completaron todos los campos obligatorios para que el proceso continúe sin inconvenientes. Continúe la gestión únicamente con este nuevo registro: [URL DEL NUEVO LEAD]

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Revisión del lead original y del error asociado.
- Identificación de falla de conexión con RUNT.
- Creación de nuevo lead con valores actualizados.
- Diligenciamiento de campos obligatorios.
- Cierre del caso al evidenciarse la solución satisfactoria.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```
