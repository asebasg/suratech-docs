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
Al intentar cotizar, sistema muestra error y valores en 0 en pantalla principal.

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
Placa del vehículo no existe registrada en guía de valores de Fasecolda. Aunque el vehículo aparezca en RUNT, Fasecolda aún no ha incluido este registro en su base de datos, limitación externa no controlable por soporte.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Recotización manual desde sura.colombia confirmó ausencia de valor en guía Fasecolda. No es posible generar cotizaciones hasta que Fasecolda actualice su base de datos.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Revisión lead y requerimiento.
- Validación placa en RUNT.
- Recotización manual sura.colombia.
- Confirmación ausencia valor en Fasecolda.
- Cierre del caso.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```

### RUNT con mensaje de respuesta de error

#### Mensaje (sin URL de nuevo lead)

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Al diligenciar información vehicular, sistema genera cotizaciones con valores en 0 en pantalla principal.

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
Consulta a RUNT desde plataforma falló, impidiendo completar datos técnicos del vehículo (placa, cilindraje, línea, año) necesarios para cálculo de tarifa.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Acceso directo a sura.co y cotización manual ingresando datos del prospecto permitió generar cotizaciones con valores correctos y sin errores.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Revisión lead y requerimiento.
- Confirmación falla conexión RUNT.
- Acceso directo portal sura.co.
- Cotización manual exitosa.
- Eliminación cotizaciones en 0.
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
Cliente realizó pago pero póliza no se expide automáticamente ni genera carátula.

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
Flujo automático de expedición posterior a pago no se activó. Lead permaneció en estado de cotización sin convertirse a póliza activa.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Póliza expedida manualmente en SFI. Estado de pago actualizado a "Aprobado". Lead convertido a contacto. Carátula generada exitosamente.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Verificación comprobante y transacción pago en SFI.
- Validación cotización y monto pagado.
- Expedición manual póliza.
- Actualización estado pago a "Aprobado".
- Conversión lead a póliza activa.
- Generación carátula.

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
