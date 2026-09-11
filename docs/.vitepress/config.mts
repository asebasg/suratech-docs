import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/suratech-docs/',
  lang: 'es-ES',
  title: "SuraTech Docs",
  description: "Base de Conocimiento",
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      {
        text: 'Categorías',
        items: [
          { text: 'Procesos', link: '/procesos/envio_cxc' },
          { text: 'Consultas', link: '/consultas/consultar_runt_y_fasecolda' },
          { text: 'Soporte', link: '/soporte/1_priorizacion_incidentes' },
          { text: 'Cierres', link: '/cierres/cierre_caratula' },
          { text: 'Loop', link: '/loop/cancelar-poliza' },
          { text: 'Plantillas', link: '/templates/cierre_incidentes' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Procesos',
        collapsed: true,
        items: [
          { text: 'Envío CXC', link: '/procesos/envio_cxc' },
          { text: 'Expedir contrato carátula renovación', link: '/procesos/expedir_contrato_caratula_renovacion' },
          { text: 'Expedir póliza', link: '/procesos/expedir_poliza' },
          { text: 'Generar carátula', link: '/procesos/generar_caratula' },
          { text: 'Renovar póliza', link: '/procesos/renovar_poliza' }
        ]
      },
      {
        text: 'Consultas',
        collapsed: true,
        items: [
          { text: 'Consultar RUNT y Fasecolda', link: '/consultas/consultar_runt_y_fasecolda' }
        ]
      },
      {
        text: 'Soporte',
        collapsed: true,
        items: [
          { text: '1 Priorización Incidentes', link: '/soporte/1_priorizacion_incidentes' }
        ]
      },
      {
        text: 'Cierres',
        collapsed: true,
        items: [
          { text: 'Cierre Carátula', link: '/cierres/cierre_caratula' },
          { text: 'Cierre Cotizaciones', link: '/cierres/cierre_cotizaciones' },
          { text: 'Cierre CXC', link: '/cierres/cierre_cxc' },
          { text: 'Cierre Expedición Pólizas', link: '/cierres/cierre_expedicion_polizas' },
          { text: 'Cierre Falta Información', link: '/cierres/cierre_falta_informacion' },
          { text: 'Cierre Ingreso Datos', link: '/cierres/cierre_ingreso_datos' },
          { text: 'Cierre Procesos Pagos', link: '/cierres/cierre_procesos_pagos' }
        ]
      },
      {
        text: 'Loop',
        collapsed: true,
        items: [
          { text: 'Cancelar Póliza', link: '/loop/cancelar-poliza' }
        ]
      },
      {
        text: 'Plantillas',
        collapsed: true,
        items: [
          { text: 'Cierre Incidentes', link: '/templates/cierre_incidentes' },
          { text: 'Comentarios Strikes', link: '/templates/comentarios_strikes' },
          { text: 'Mensaje Resolución IA', link: '/templates/mensaje_resolucion_ia' },
          { text: 'Tipologías Resolución', link: '/templates/tipologias_resolucion' }
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Buscar',
                buttonAriaLabel: 'Buscar'
              },
              modal: {
                displayDetails: 'Mostrar detalles',
                resetButtonTitle: 'Borrar búsqueda',
                backButtonTitle: 'Cerrar búsqueda',
                noResultsText: 'No se encontraron resultados para',
                footer: {
                  selectText: 'para seleccionar',
                  navigateText: 'para navegar',
                  closeText: 'para cerrar'
                }
              }
            }
          }
        }
      }
    }
  }
})
