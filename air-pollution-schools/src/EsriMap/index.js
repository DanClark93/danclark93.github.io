import React from 'react';
import style from './style.scss';
import { loadModules, loadCss } from 'esri-loader';
import Proj4 from 'proj4';

loadCss('https://js.arcgis.com/4.10/esri/css/main.css');

export class EsriMap extends React.Component {
  state = {
    view: null,
    error: null,
  };
  convertUtmToLatLng = school => {
    // use Proj4 library to convert from easting, northing > lat lng for the school marker
    const utm =
      '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=371,-111,434,0,0,0,0 +units=m +no_defs';
    const wgs84 = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';
    return Proj4(utm, wgs84, [school.easting, school.northing]);
  };

  drawMap = school => {
    loadModules(['esri/views/MapView', 'esri/WebMap'])
      .then(([MapView, WebMap]) => {
        // then we load a web map from an id
        const webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: '017d9c1ab73b4af5adaacc3ff2ab71ba',
            // id: '478453463c094d09a156d4d86578af6e',
            //id: 'd28d3c7330c84866a143f36b6d2d2150',
          },
        });

        // and we show that map in a container w/ id #viewDiv
        const view = new MapView({
          map: webmap,
          container: 'viewDiv',
          center: [-0.141507, 51.50816],
          zoom: 8,
        });

        this.setState({
          view: view,
        });

        this.addMarker(school);
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  addMarker = school => {
    loadModules(['esri/Graphic', 'esri/symbols/PictureMarkerSymbol']).then(
      ([Graphic, PictureMarkerSymbol]) => {
        let { view } = this.state;
        view.graphics.removeAll();
        const coordinates = this.convertUtmToLatLng(school);

        const point = {
          type: 'point',
          latitude: coordinates[1],
          longitude: coordinates[0],
        };

        const markerSymbol = new PictureMarkerSymbol(
          'http://s3-eu-west-1.amazonaws.com/nuk-tnl-editorial-prod-staticassets/2019/air-pollution-schools/pin.png',
          12,
          15
        );

        const pointGraphic = new Graphic({
          geometry: point,
          symbol: markerSymbol,
        });

        view.graphics.add(pointGraphic);
      }
    );
  };

  componentDidMount() {
    const { school } = this.props;
    this.drawMap(school);
  }

  componentDidUpdate(prevProps) {
    const { school } = this.props;

    // if the school has updated call the addMarker function that removes and adds the marker rather than re-drawing the whole map again
    if (prevProps.school !== school) {
      this.addMarker(school);
    }
  }
  render() {
    return (
      <div className={style.MapContainer}>
        <div id="viewDiv" className={style.Map} />
      </div>
    );
  }
}

export default EsriMap;
