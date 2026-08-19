## Ya existe documento contabilizado

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
El asegurado reporta imposibilidad de realizar el pago debido a que la factura permanece con estado "Pendiente generación factura SAP", bloqueando la transacción en el sistema.

𝗖𝗮𝘂𝘀𝗮 𝗥𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
La factura no se sincronizó correctamente desde SAP hacia SFI, permaneciendo en estado "Pendiente generación factura SAP" a pesar de contar con los datos necesarios para su generación.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Se revisó el estado de la factura en SFI y se corroboró que los datos están completos y válidos. Se procedió a forzar la generación de factura desde SAP y se actualizó manualmente el estado en SFI de "Pendiente generación factura SAP" a "Factura disponible" para habilitar el pago.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
1. Validación del estado de la factura en SFI.
2. Confirmación de datos completos y válidos.
3. Fuerza de generación de factura desde SAP.
4. Actualización manual de estado a "Factura disponible" en SFI.
5. Confirmación de que el asegurado puede proceder con el pago.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```

# Factura ya paga

```text
𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:
El asegurado reporta que realizó el pago correspondiente, pero este no se registra como aplicado en el sistema.

𝗖𝗮𝘂𝘀𝗮 𝗥𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:
La factura no se sincronizó correctamente en SFI tras recibirse el pago, permaneciendo con estado pendiente a pesar de contar con comprobante válido de la transacción.

𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:
Se verificó el comprobante de pago adjunto en el incidente y se confirmó su validez. Se actualizó el estado de la factura a "Factura pagada" en SFI.

𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:
1. Verificación de comprobante de pago adjunto en el incidente.
2. Validación de información en SFI.
3. Cambio de estado de factura a "Factura pagada".
4. Confirmación de actualización exitosa.

𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:
N/A.
```
