# Mensajes de cierre para incidente: Generación de carátula

## Notas de resolución

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
Se recibe caso reportando inconsistencia en la generación de la carátula, debido a que el vehículo fue registrado con la condición de que sí era 0 km, cuando en realidad no correspondía a un vehículo 0 km. Se requería la corrección para garantizar la precisión de la información y continuar con el proceso.

𝗖𝗮𝘂𝘀𝗮 𝗥𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
En atención al caso reportado, se realizó la validación de la información utilizada en la generación de la carátula, identificando que el campo correspondiente a la condición 0 km se encontraba parametrizado de forma incorrecta, registrando el vehículo como sí 0 km cuando su condición real era no 0 km.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Tras la revisión del caso, se efectuó satisfactoriamente la corrección del dato correspondiente a la condición del vehículo, actualizando la información para reflejar que no es 0 km. Posteriormente, se generó la carátula modificada con el dato correcto.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:

Validación de la información registrada en la generación de la carátula.
Corrección del campo correspondiente a la condición del vehículo, cambiando de “Sí es 0 km” a “No es 0 km”.
Generación de la carátula actualizada con la información correcta.
Se adjunta la carátula modificada como soporte de la corrección realizada.
Cierre del caso al evidenciarse la solución satisfactoria.
Escalado: N/A
```

## N° Ticket de Origen

| Incidente                              |
| -------------------------------------- |
| Desfase de un día                      |
| Error en marcación del lead - 0km      |
| No se genera carátula                  |
| No se genera póliza por automatizacion |
| PQR - Legalización manual SAP          |
| Cambio de asesor                       |
