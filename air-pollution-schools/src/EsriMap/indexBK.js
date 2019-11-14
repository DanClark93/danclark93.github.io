/* global fetch */
import React from 'react';
import style from './style.scss';
import { loadModules, loadCss } from 'esri-loader';
loadCss('https://js.arcgis.com/4.10/esri/css/main.css');

export class EsriMap extends React.Component {
  componentDidMount() {
    loadModules([
      'esri/views/SceneView',
      'esri/WebScene',
      'esri/widgets/Search',
    ])
      .then(([SceneView, WebScene, Search]) => {
        // then we load a web map from an id
        var webmap = new WebScene({
          portalItem: {
            // autocasts as new PortalItem()
            id: 'be7673b368b344c7bd4f93c6b6692790',
            //id: 'd28d3c7330c84866a143f36b6d2d2150',
          },
        });
        // and we show that map in a container w/ id #viewDiv
        var view = new SceneView({
          map: webmap,
          container: 'viewDiv',
          center: [-0.106029, 51.574628],
          zoom: 17,
          camera: {
            tilt: 60,
            position: [-0.106029, 51.574628, 750],
          },
        });

        var searchWidget = new Search({
          view: view,
        });

        view.ui.add(searchWidget, {
          position: 'top-right',
        });
      })
      .catch(err => {
        // handle any errors
        //console.error(err);
      });
  }
  render() {
    return <div id="viewDiv" className={style.Map} />;
  }
}

export default EsriMap;
