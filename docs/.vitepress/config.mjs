import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Suratech Docs",
  description: "Documentación y recursos técnicos",
  base: "/suratech-docs/",
  lang: "es",
  
  themeConfig: {
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
                backButtonTitle: 'Cerrar',
                noResultsText: 'No hay resultados para',
                footer: {
                  selectText: 'seleccionar',
                  navigateText: 'navegar',
                  closeText: 'cerrar'
                }
              }
            }
          }
        }
      }
    },
    
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Procesos', link: '/procesos/' },
      { text: 'Soporte', link: '/soporte/' },
      { text: 'Consultas', link: '/consultas/' }
    ],

    sidebar: {
      '/procesos/': [
        {
          text: 'Expedición',
          items: [
            { text: 'Expedir Póliza', link: '/procesos/expedir_poliza' },
            { text: 'Expedir Contrato Carátula Renovación', link: '/procesos/expedir_contrato_caratula_renovacion' },
            { text: 'Gestión de Carátulas', link: '/procesos/gestion_caratulas' },
            { text: 'Gestión de CXC', link: '/procesos/gestion_cxc' }
          ]
        },
        {
          text: 'Cierres',
          items: [
            { text: 'Cierre Cancelado', link: '/procesos/cierre_cancelado' },
            { text: 'Cierre Carátula', link: '/procesos/cierre_caratula' },
            { text: 'Cierre CxC', link: '/procesos/cierre_cxc' },
            { text: 'Cierre Expedición Pólizas', link: '/procesos/cierre_expedicion_polizas' },
            { text: 'Cierre Ingreso Datos', link: '/procesos/cierre_ingreso_datos' }
          ]
        }
      ],
      '/soporte/': [
        {
          text: 'Incidentes',
          items: [
            { text: 'Priorización de Incidentes', link: '/soporte/1_priorizacion_incidentes' },
            { text: 'Consultar RUNT y Fasecolda', link: '/soporte/consultar_runt_y_fasecolda' }
          ]
        }
      ],
      '/consultas/': [
        {
          text: 'Scripts y SFs',
          items: [
            { text: 'Cantidad Registros SAP', link: '/consultas/cantidad_registros_sap' },
            { text: 'Centro de Costos', link: '/consultas/centro_de_costos' },
            { text: 'Consulta de Ventas', link: '/consultas/consulta_de_ventas' },
            { text: 'Consulta Estado Pago Cotizaciones', link: '/consultas/consulta_estado_pago_cotizaciones' },
            { text: 'Consulta Renovaciones con Error', link: '/consultas/consulta_renovaciones_con_error' },
            { text: 'Consultar Renovaciones Pendientes', link: '/consultas/consultar_renovaciones_pendientes' },
            { text: 'Error Facturación', link: '/consultas/error_facturacion' },
            { text: 'Manual Cancelación Masiva CxC', link: '/consultas/manual_cancelacion_masiva_cxc' },
            { text: 'Nuevas Querys Monitoreo', link: '/consultas/nuevas_querys_monitoreo' },
            { text: 'Script Contabilización', link: '/consultas/script_contabilizacion' },
            { text: 'Script Emisión Local', link: '/consultas/script_emision_local' },
            { text: 'Script URL Renovación Arriendos', link: '/consultas/script_url_renovacion_arriendos' },
            { text: 'Script URL Renovación Arriendos con Error Masivo', link: '/consultas/script_url_renovacion_arriendos_con_error_masivo' }
          ]
        }
      ]
    }
  }
})
