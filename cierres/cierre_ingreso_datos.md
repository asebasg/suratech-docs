# Mensajes de cierre para incidente: Error en el ingreso de los datos

## Tabla de Tipologías de Resolución

| Tipología |
| --- |
| [Cambio de correo](#cambio-de-correo) |
| [Cambio de datos del asegurado](#cambio-de-datos-del-asegurado) |
| [Cambio de documento](#cambio-de-documento) |
| [Cambio de línea de vehículo](#cambio-de-línea-de-vehículo) |
| [Cambio de número de documento](#cambio-de-número-de-documento) |
| [Cambio de valor asegurado](#cambio-de-valor-asegurado) |
| [Datos de Propietario/Inquilino](#datos-de-propietarioinquilino) |
| [Error en ingreso de los datos](#error-en-ingreso-de-los-datos) |
| [No se encuentra información](#no-se-encuentra-información) |
| [Valor de cobro](#valor-de-cobro) |
| [Cambio datos de valor asegurado](#cambio-datos-de-valor-asegurado) |
| [Cambio de teléfono](#cambio-de-teléfono) |
| [Valor fasecolda en cotización](#valor-fasecolda-en-cotización) |
| [Error en fecha de vigencia/vencimiento](#error-en-fecha-de-vigenciavencimiento) |

---

## Cambio de correo

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Se reportó que la carátula de la póliza presentaba un correo electrónico errado y se solicitó corregir a [CORREO_CORRECTO].

𝗖𝗮𝘂𝘀𝗮 𝗥𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
El correo estaba diligenciado de forma incorrecta en el sistema como "[CORREO_INCORRECTO]" en lugar de "[CORREO_CORRECTO]" (error tipográfico o de digitación).

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Se revisó en SFI y se concluyó que el correo estaba diligenciado de manera correcta como [CORREO_CORRECTO], confirmando que la corrección ya se encontraba aplicada en el sistema.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
1. Revisión del correo electrónico en SFI.
2. Validación de que el correo estaba correctamente actualizado.
3. Cierre del caso al evidenciarse la solución satisfactoria.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```

## Cambio de datos del asegurado

```text
No se ha proporcionado descripción aún
```

## Cambio de documento

```text
No se ha proporcionado descripción aún
```

## Cambio de línea de vehículo

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Carátula no coincide con información de cotización realizada: línea y código Fasecolda incorrectos.

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
Lead y asset de póliza registraban línea diferente y código Fasecolda errado (no coincidían con cotización original).

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Lead y asset actualizados con información correcta: línea SUZUKI GIXXER 250 y código Fasecolda 08817172. Carátula regenerada con datos correctos.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Revisión cotización y carátula.
- Acceso lead.
- Corrección línea a SUZUKI GIXXER 250.
- Corrección código Fasecolda a 08817172.
- Acceso asset póliza.
- Actualización información vehicular.
- Regeneración carátula con datos correctos.
- Se adjunta carátula corregida.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```

## Cambio de número de documento

```text
No se ha proporcionado descripción aún
```

## Cambio de valor asegurado

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Se solicitó corrección del valor asegurado y de referencia en carátula. La póliza registraba un valor superior al solicitado.

𝗖𝗮𝘂𝘀𝗮 𝗥𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
El valor asegurado estaba desactualizado en múltiples registros: JSON del lead, Asset de la póliza y plan de cotización, generando inconsistencia en la carátula.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Se verificó en SFI el valor correcto y se actualizaron todos los registros con el valor asegurado de $[VALOR_CORRECTO]. Se regeneró la carátula con los datos precisos.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
1. Verificación del valor asegurado en SFI.
2. Corrección de JSON del lead.
3. Actualización de valor en Asset de la póliza.
4. Corrección de valor en plan de cotización.
5. Regeneración de carátula con datos actualizados.
6. Se adjunta carátula corregida.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```

## Datos de Propietario/Inquilino

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
[Descripción del error reportado en carátula/contrato]

𝗖𝗮𝘂𝘀𝗮 𝗥𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
[Explicación: información corregida en JSON del lead pero no sincronizada en IPA/campos correspondientes]

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Se actualizó [campo específico] con información correcta. Se regeneró documento con datos precisos.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Identificación del error.
- Corrección en [registro/campo].
- Regeneración de documento.
- Se adjunta documento corregido.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```

## Error en ingreso de los datos

```text
No se ha proporcionado descripción aún
```

## No se encuentra información

```text
No se ha proporcionado descripción aún
```

## Valor de cobro

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
[Descripción del error al cambiar código Fasecolda]

𝗖𝗮𝘂𝘀𝗮 𝗥𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
Validación de código Fasecolda no coincidía con valor ingresado.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Se actualizó lead con valor correcto [monto].

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Acceso al lead.
- Corrección código y valor.
- Validación exitosa.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```

## Cambio datos de valor asegurado

```text
No se ha proporcionado descripción aún
```

## Cambio de teléfono

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Número de celular incorrecto en carátula de Mery Romero.

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
Número de celular parametrizado incorrectamente en lead.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Número corregido a [numero de telefono]. Carátula regenerada con información actualizada.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Verificación lead.
- Corrección número celular.
- Generación carátula actualizada.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```

## Valor fasecolda en cotización

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Sistema rechaza código Fasecolda al intentar cotizar con mensaje "valor no permitido".

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
Valor comercial del inmueble/vehículo registrado en SFI no corresponde al valor asociado en base de datos de Fasecolda. Validación rechaza cotización por inconsistencia entre código y valor.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Valor actualizado en SFI para coincidir con código Fasecolda. Sistema acepta código y permite cotización sin errores.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘡𝗮𝗱𝗮𝘀:
- Revisión código Fasecolda en SFI.
- Verificación valor registrado.
- Identificación inconsistencia valor-código.
- Corrección valor en SFI.
- Validación aceptación código Fasecolda.
- Se adjunta comprobación cambio.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```

## Error en fecha de vigencia/vencimiento

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Carátula presenta fechas incorrectas de vigencia del seguro.

𝗖𝗮𝘂𝘀𝗮 𝗿𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
Campos de fecha inicio y fecha fin de vigencia registrados incorrectamente en lead. Información no coincide con lo solicitado por el cliente.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Fechas de inicio y fin de vigencia corregidas en lead. Carátula regenerada con información de vigencia correcta.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
- Revisión lead y carátula.
- Identificación fechas incorrectas.
- Corrección fecha inicio vigencia.
- Corrección fecha fin vigencia.
- Regeneración carátula con datos correctos.
- Se adjunta carátula corregida.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```
