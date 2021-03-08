require(["esri/config","esri/Map", "esri/views/MapView","esri/widgets/BasemapToggle", "esri/widgets/BasemapGallery", "esri/layers/FeatureLayer", "esri/WebMap"], 
      
        function (esriConfig,Map, MapView,BasemapToggle, BasemapGallery, FeatureLayer, WebMap){
  
  const webmap = new WebMap({
  portalItem: { // autocasts as new PortalItem()
    id: "f3a3ba8f5a4b480ab5c7febe28c8d964"
  }
});

        var view = new MapView({
          map: webmap,
          container: "viewDiv",
          zoom: 5,
          center: [137, 34]
        });
     
  });
