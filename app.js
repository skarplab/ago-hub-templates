let app = new Vue({
    el: '#app',
    data: {
        item: {
            name: 'Debris-PRCR (Supervisor)',
            url: 'https://ral.maps.arcgis.com/apps/webappviewer/index.html?id=61a4408aeacc4e6f9780335fe21332a6',
        },
        image:{
            url: 'https://github.com/skarplab/prcr-eo-hub/raw/master/IMAGES/RaleighPRCR_DebrisPRCRSupervisor_Thumbnail_1.png',
            alt: 'Debris-PRCR Supervisor application'
        },
        description: 'A viewer and editor application for operations staff to view, add, and update debris reports.'
    }
})