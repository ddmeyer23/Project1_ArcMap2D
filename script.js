require(["esri/config","esri/Map", "esri/views/MapView","esri/widgets/BasemapToggle", "esri/widgets/BasemapGallery", "esri/layers/FeatureLayer", "esri/WebMap","esri/widgets/Legend","esri/views/SceneView","esri/widgets/Search"], 
      
        function (esriConfig,Map, MapView,BasemapToggle, BasemapGallery, FeatureLayer, WebMap,Legend,SceneView,Search){
  
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

        view.when(function() {
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
          var featureLayer = webmap.layers.getItemAt(1);

          var legend = new Legend({
            view: view,
            layerInfos: [{
                layer:featureLayer,
                title: "Recent Earthquakes"
              }
            ]
          });

          // Add widget to the bottom right corner of the view
          view.ui.add(legend, "bottom-right");
        });
     
  
  });
