# Mensajes de cierre para incidente: Expedición de Pólizas

## Tabla de Tipologías de Resolución

| Tipología |
| --- |
| [Borrado de información](#borrado-de-información) |
| [Cambio de accesorios](#cambio-de-accesorios) |
| [Cotizaciones en 0](#cotizaciones-en-0) |
| [Error de renovación por cúmulo](#error-de-renovación-por-cúmulo) |
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
Cliente reporta incapacidad para cotizar vehículo (motocicleta). Sistema presenta error durante el proceso y visualiza valores en 0 en pantalla principal. El vehículo existe en la plataforma, pero no puede completarse la cotización.

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
La placa del vehículo no se encuentra registrada en la guía de valores de Fasecolda (asociación que gestiona la valuación de vehículos en Colombia). Aunque el vehículo esté inscrito en RUNT (Registro Único Nacional de Tránsito), Fasecolda aún no ha procesado ni incluido este registro en su base de datos de valores, lo cual genera una limitación externa que no es controlable por nuestro equipo de soporte.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Se realizó recotización manual a través de Sura Colombia, confirmando que Fasecolda aún no dispone de información de valor para esta placa. Debido a esto, el sistema no puede realizar cálculos de prima ni generar cotizaciones hasta que Fasecolda actualice su guía de valores con este registro. Se informó al cliente sobre la causa y tiempos esperados.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
1. Revisión detallada del lead y requerimiento inicial.
2. Validación de existencia de placa en RUNT.
3. Recotización manual desde plataforma Sura Colombia.
4. Consulta a base de datos Fasecolda para confirmar ausencia del registro.
5. Documentación de la limitación técnica identificada.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A
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

## Error de renovación por cúmulo

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Cliente solicitó renovación de póliza, sin embargo el sistema mostró estado "ESTADO_DESCARTADO", impidiendo procesar la renovación.

𝗖𝗮𝘂𝘀𝗮 𝗥𝗮í𝘇 𝗜𝗱𝗲𝗻𝘵𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
Las fechas de renovación en SFI no coincidían, causando que el sistema rechazara la solicitud de renovación.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Se verificó en SFI que las fechas de renovación existen y están en orden. Se confirmó que la póliza está en condiciones de ser renovada y se procede a reenviar la solicitud de renovación al sistema.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
1. Verificación de las fechas de renovación de la póliza en SFI.
2. Validación de que las fechas existen y están en orden.
3. Reenvío de la solicitud de renovación al sistema.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```

### Estado del vehículo no asegurable

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Al diligenciar información vehicular, el sistema genera cotizaciones con valores en 0 en pantalla principal, impidiendo completar el proceso de cotización.

𝗖𝗮𝘂𝘀𝗮 𝗥𝗮í𝘡 𝗜𝗱𝗲𝗻𝘵𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
La consulta a RUNT desde la plataforma falló, impidiendo completar los datos técnicos del vehículo (placa, cilindraje, línea, año) necesarios para validar la política de estado del vehículo y calcular la tarifa correspondiente.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Se verificó que el vehículo no cumple con la política de estado del vehículo establecida por la compañía. Esta es una restricción de negocio que el equipo técnico no puede saltarse. No es posible asegurar este vehículo bajo las políticas vigentes.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
1. Revisión de lead y datos del requerimiento.
2. Confirmación de falla en conexión a RUNT.
3. Validación de datos técnicos del vehículo.
4. Confirmación de incumplimiento de política de estado del vehículo.
5. Eliminación de cotizaciones generadas en 0.
6. Cierre del caso.

𝗡𝗼𝘁𝗮 𝗽𝗮𝗿𝗮 𝗲𝗹 𝗮𝘀𝗲𝘀𝗼𝗿:
El vehículo no pasa la política de estado del vehículo. No es posible asegurar este vehículo bajo las políticas vigentes. Se recomienda contactar al cliente para informar de esta restricción.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
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
