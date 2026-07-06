# Mensajes de cierre para incidente: Expedición de Pólizas

## Tabla de Tipologías de Resolución

| Tipología |
| --- |
| [Borrado de información](#borrado-de-información) |
| [Cambio de accesorios](#cambio-de-accesorios) |
| [Cotizaciones en 0](#cotizaciones-en-0) |
| [Cumulo](#cumulo) |
| [Error en cobertura duplicadas](#error-en-cobertura-duplicadas) |
| [Error en fechas](#error-en-fechas) |
| [Error por falta de correo](#error-por-falta-de-correo) |
| [Expedición manual erronea](#expedición-manual-erronea) |
| [Falta de actualización Fasecolda](#falta-de-actualización-fasecolda) |
| [Falla conexión CXC en póliza](#falla-conexión-cxc-en-póliza) |
| [Lead no se convierte](#lead-no-se-convierte) |
| [No se replica error](#no-se-replica-error) |
| [Pago rechazado](#pago-rechazado) |
| [Poliza cancelada por error](#poliza-cancelada-por-error) |
| [Tiempo de expedición](#tiempo-de-expedición) |
| [Transacción rechazada por pasarela](#transacción-rechazada-por-pasarela) |
| [Fechas de renovación](#fechas-de-renovación) |
| [Membresia no activa](#membresia-no-activa) |
| [Tiempo notificación de pago](#tiempo-notificación-de-pago) |

---

## Borrado de información

```text
No se ha proporcionado descripción aún
```

## Cambio de accesorios

```text
No se ha proporcionado descripción aún
```

## Cotizaciones en 0

### No existen datos en Fasecolda

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

### Falla conexión RUNT

#### Mensaje (sin URL de nuevo lead)

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

#### Mensaje (con URL de nuevo lead)

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

## Cumulo

```text
No se ha proporcionado descripción aún
```

## Error en cobertura duplicadas

```text
No se ha proporcionado descripción aún
```

## Error en fechas

```text
No se ha proporcionado descripción aún
```

## Error por falta de correo

```text
No se ha proporcionado descripción aún
```

## Expedición manual erronea

```text
No se ha proporcionado descripción aun
```

## Falta de actualización Fasecolda

```text
No se ha proporcionado descripción aún
```

## Falla conexión CXC en póliza

```text
No se ha proporcionado descripción aún
```

## Lead no se convierte

```text
No se ha proporcionado descripción aún
```

## No se replica error

```text
No se ha proporcionado descripción aún
```

## Pago rechazado

```text
No se ha proporcionado descripción aún
```

## Poliza cancelada por error

```text
No se ha proporcionado descripción aún
```

## Tiempo de expedición

```text
No se ha proporcionado descripción aún
```

## Transacción rechazada por pasarela

```text
No se ha proporcionado descripción aún
```

## Fechas de renovación

```text
No se ha proporcionado descripción aún
```

## Membresia no activa

```text
No se ha proporcionado descripción aún
```

## Tiempo notificación de pago

```text
No se ha proporcionado descripción aún
```
