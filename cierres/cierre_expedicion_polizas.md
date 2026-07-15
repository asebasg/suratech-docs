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
[Descripción del inconveniente al cotizar]

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗶𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
Placa no registrada en Fasecolda. Limitación externa no controlable por soporte.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
No es posible generar cotizaciones. Se requiere actualización de Fasecolda.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Validación del lead.
- Confirmación ausencia en Fasecolda.
- Cierre del caso.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```

### Falla conexión RUNT

#### Mensaje (sin URL de nuevo lead)

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Error en cotización con valores en 0.

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
Falla de conexión con RUNT impidió completar datos del vehículo.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Recotización realizada desde sura.co exitosamente. Proceso completado sin inconvenientes.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Revisión del lead.
- Identificación falla RUNT.
- Recotización desde sura.co.
- Generación de cotizaciones exitosa.
- Cierre del caso.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```

#### Mensaje (con URL de nuevo lead)

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
[Error en cotización con valores en 0]

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗶𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
Falla de conexión con RUNT impidió completar datos del vehículo.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Nuevo lead creado con datos completos. Continúe gestión en: [URL]

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Identificación falla RUNT.
- Creación nuevo lead.
- Diligenciamiento campos obligatorios.
- Cierre del caso.

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
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Cliente pagó pero póliza no se convierte ni genera carátula.

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
Póliza no expedida automáticamente tras pago. Proceso conversión no completado.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Póliza expedida manualmente. Estado pago actualizado a "Aprobado". Lead convertido exitosamente.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Verificación transacción SFI.
- Validación cotización y pago.
- Expedición manual póliza.
- Actualización estado pago.
- Conversión lead.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
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
