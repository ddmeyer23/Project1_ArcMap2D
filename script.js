require(["esri/config","esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer", "esri/WebMap","esri/widgets/Legend","esri/views/SceneView","esri/widgets/LayerList"], 
      
        function (esriConfig,Map, MapView, FeatureLayer, WebMap,Legend,SceneView,LayerList){
  
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

        
  // Add a legend instance to the panel of a
        // ListItem in a LayerList instance
        const layerList = new LayerList({
          view: view,
          listItemCreatedFunction: function(event) {
            const item = event.item;
            if (item.layer.type != "group") {
              // don't show legend twice
              item.panel = {
                content: "legend",
                open: true
              };
            }
          }
        });
        view.ui.add(layerList, "bottom-right");
     
     
  
  });
