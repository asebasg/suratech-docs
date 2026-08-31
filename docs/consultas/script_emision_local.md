# Soporte — Encolado de Notificación de Primera CXC (Emisión Local)

Este documento detalla los scripts Apex utilizados para forzar el encolamiento y envío manual de la primera Cuenta por Cobrar (CXC) tras la emisión local de una póliza, segmentado por tipo de producto.

## Propósito
En escenarios donde el proceso automático de notificación de emisión local no se disparó de forma correcta al momento de emitir la póliza, es necesario encolar de manera manual el trabajo asíncrono (`Queueable`) correspondiente para que la primera cuenta por cobrar sea notificada y transmitida al backend.

---

## Scripts de Ejecución (Consola Anónima Apex)

Deberá ejecutar el bloque de código correspondiente al tipo de producto en cuestión, reemplazando el ID del parámetro por el ID de la póliza de seguros (`InsurancePolicy.Id`).

### 1. Arriendos
```apex
Id jobId = System.enqueueJob(
    new ArriendosLocalEmisionNotificationHandler('IdPoliza')
);
System.debug('Job de notificación de Arriendos encolado con ID: ' + jobId);
```

### 2. Autos
```apex
Id jobId = System.enqueueJob(
    new AutosLocalEmisionNotificationHandler('IdPoliza')
);
System.debug('Job de notificación de Autos encolado con ID: ' + jobId);
```

### 3. Motos
```apex
Id jobId = System.enqueueJob(
    new MotosLocalEmisionNotificationHandler('a70Qo00000CuOTlIAN')
);
System.debug('Job de notificación de Motos encolado con ID: ' + jobId);
```

### 4. Viajes
```apex
Id jobId = System.enqueueJob(
    new ViajesLocalEmisionNotificationHandler('0YTQo000000F0KfOAK')
);
System.debug('Job de notificación de Viajes encolado con ID: ' + jobId);
```

---

## Instrucciones para la Ejecución
1. Obtenga el ID de la póliza (`InsurancePolicy.Id`) que no ha enviado la primera CXC.
2. Ingrese a la consola de desarrollador de Salesforce (Developer Console $\rightarrow$ Debug $\rightarrow$ Execute Anonymous).
3. Seleccione el script correspondiente al ramo de la póliza.
4. Reemplace el argumento de cadena `'IdPoliza'` o el ID de prueba por el ID real de la póliza a procesar.
5. Presione **Execute**.
6. Monitoree la ejecución del trabajo asíncrono desde el menú de configuración de Salesforce en la sección **Apex Jobs** buscando el nombre de la clase handler ejecutada.
