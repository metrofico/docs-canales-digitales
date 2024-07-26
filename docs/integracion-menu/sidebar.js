module.exports = [
    { "type": "doc", "id": "integracion-menu/core-api-integracion-de-delivery-platform-agregadores" },
    { "type": "category", "label": "Autenticacion /auth", "link": 
        { "type": "doc", "id": "integracion-menu/autenticacion-auth" },
         "items": [
            { "type": "doc", "id": "integracion-menu/metodo-de-autenticacion-para-la-interfaz-de-usuario-app-web", "label": "Metodo de autenticación para la interfaz de usuario (APP-WEB)", "className": "api-method post" },
            { "type": "doc", "id": "integracion-menu/metodo-de-autenticacion-para-refrescar-el-token-anterior-generado", "label": "Método de autenticación para refrescar el token anterior generado,", "className": "api-method post" },
            { "type": "doc", "id": "integracion-menu/se-obtiene-informacion-del-usuario-logeado", "label": "Se obtiene información del usuario logeado.", "className": "api-method get" }
        ] 
    }, 
    { "type": "category", "label": "Agregadores", "link": 
        { "type": "doc", "id": "integracion-menu/agregadores" }, 
        "items": [
            { "type": "doc", "id": "integracion-menu/retorna-la-lista-de-todos-los-agregadores", "label": "Retorna la lista de todos los agregadores", "className": "api-method get" },
            { "type": "doc", "id": "integracion-menu/envia-menu-hacia-los-agregadores", "label": "Envía menús hacia los agregadores", "className": "api-method post" }
        ] 
    },
     { "type": "category", "label": "Configuraciones", "link": { "type": "doc", "id": "integracion-menu/configuraciones" }, "items": [{ "type": "doc", "id": "integracion-menu/se-obtiene-la-ultima-configuracion-registrada", "label": "Se obtiene la ultima configuracion registrada.", "className": "api-method get" }, { "type": "doc", "id": "integracion-menu/creacion-y-actualizacion-de-la-configuracion-parar-la-ejecucion-de-sincronizacion-de-los-agregadores", "label": "Creación y actualización de la configuración parar la ejecución de sincronización de los agregadores.", "className": "api-method put" }] }, { "type": "category", "label": "Sincronización", "link": { "type": "doc", "id": "integracion-menu/sincronizacion" }, "items": [{ "type": "doc", "id": "integracion-menu/metodo-para-la-ejecucion-de-la-sincronizacion-inmediata", "label": "Método para la ejecución de la sincronización inmediata.", "className": "api-method post" }] }];