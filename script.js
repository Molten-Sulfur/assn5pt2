require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/Camera",
  "esri/widgets/Home",
  "esri/widgets/LayerList",
  "esri/widgets/Legend",
  "dojo/domReady!"
], function(WebScene, SceneView, Camera, Home, LayerList, Legend) {
  var scene = new WebScene({
    portalItem:{
      id:"8046207c1c214b5587230f5e5f8efc77"
    }
  });
  
  var camera = new Camera({
    position: [
      -71.060217,// lon
      42.382655, // lat
      2500// elevation in meters
    ],
    tilt:45,
    heading: 180
  })
  
  var view = new SceneView({
    container: "bostonDiv",
    map: scene,
    camera: camera
  });
  
  view.when(function() {
    // get the first layer in the collection of operational layers in the WebMap
    // when the resources in the MapView have loaded.
    var featureLayer = scene.layers.getItemAt(1);
    
    var homeBtn = new Home({
      view: view
    });
      
    var layerList = new LayerList({
      view: view
    });
    
    var legend = new Legend({
      view: view,
      layerInfos: [{
        layer: featureLayer,
        title: "Major project buildings"
      }]
    });
    
    view.ui.add(homeBtn, "top-left");
    view.ui.add(layerList, "bottom-right");
    view.ui.add(legend, "bottom-right");
  });
});
