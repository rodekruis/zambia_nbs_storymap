import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import Legend from './Legend';
import MapTooltip from './MapTooltip';
import {
  chapters, floodStops, suitabilityStops, isoStops, tooltipConfig,
} from '../config/options';

mapboxgl.accessToken = 'pk.eyJ1IjoiNTEwZ2xvYmFsIiwiYSI6ImNrZmkwYXBoNjA3amsyem9kdDN2ZzBkdmIifQ.AgtfMe5wlex1RVjfUNQxdg';

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: -15.488839,//14.639452415446272,
      lng: 27.14493,//121.10270229817115,
      zoom: 5,
    };
  }

  componentDidMount() {
    const {
      lng, lat, zoom,
    } = this.state;

    // Container to put React generated content in.
    this.tooltipContainer = document.createElement('div'); // eslint-disable-line

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/510global/clfl4ijaz000f01o5yhs0l9z6',
      center: [lng, lat],
      zoom,
      minZoom: 1,
      maxZoom: 15,
      pitch: 0,
      bearing: 0,
    });

    this.map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    this.map.on('style.load', () => {
      this.map.addSource('riesgo', {
        type: 'vector',
        url: 'mapbox://unissechua.8kcfu1fc',
      });     
      this.map.addSource('riskmap', {
        type: 'geojson',
        data: 'data/ZMB_historical_disaster.geojson',
      });
      this.map.addSource('studyarea', {
        type: 'geojson',
        data: 'data/areas.geojson',
      });
      this.map.addSource('basins', {
        type: 'geojson',
        data: 'data/basins.geojson',
      });

      this.map.addSource('evacuation', {
        type: 'vector',
        url: 'mapbox://unissechua.4r8fc81u',
      });

      this.map.addSource('landelevation', {
        type: 'vector',
        url: 'mapbox://unissechua.54ft2aw9',
      });

      this.map.addSource('radius', {
        type: 'vector',
        url: 'mapbox://unissechua.78x6pdi0',
      });

      this.map.addSource('buildings', {
        type: 'vector',
        url: 'mapbox://unissechua.bnoseblw',
      });

      this.map.addSource('boundary', {
        type: 'geojson',
        data: 'data/marikina_boundary.geojson',
      });

      this.map.addSource('population', {
        type: 'vector',
        url: 'mapbox://unissechua.djetk3sb',
      });

      this.map.addSource('isochrones', {
        type: 'vector',
        url: 'mapbox://unissechua.166d592u',
      });

      this.map.addSource('areas', {
        type: 'geojson',
        data: 'data/areas_of_interest.geojson',
      });

      this.map.addLayer({
        id: 'studyarea',
        type: 'fill',
        source: 'studyarea',
        'source-layer': 'areas',
        paint: {
          'fill-color': '#38316e',    
          'fill-opacity': 0,     
          'fill-outline-color': '#38316e',
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'basins',
        type: 'fill',
        source: 'basins',
        'source-layer': 'basin',
        paint: {
          'fill-color': '#1b9e77',    
          'fill-opacity': 0,     
          'fill-outline-color': '#1b9e77',
        },
      }, 'waterway'); 


      this.map.addLayer({
        id: 'boundary',
        type: 'line',
        source: 'boundary',
        paint: {
          'line-color': '#090909',
          'line-opacity': 0,
          'line-width': 2,
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'landelevation3d',
        type: 'fill-extrusion',
        source: 'landelevation',
        'source-layer': 'landelevation_100x100',
        paint: {
          'fill-extrusion-color': {
            property: 'value',
            stops: [
              [2, '#ffffcc'],
              [17, '#c7e9b4'],
              [35, '#7fcdbb'],
              [52, '#41b6c4'],
              [70, '#1d91c0'],
            ],
          },
          'fill-extrusion-height': ['*', 10, ['number', ['get', 'value'], 1]],
          'fill-extrusion-opacity': 0.5,
          'fill-extrusion-opacity-transition': {
            duration: 800,
            delay: 0,
          },
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'landelevation',
        type: 'fill',
        source: 'landelevation',
        'source-layer': 'landelevation_100x100',
        paint: {
          'fill-color': {
            property: 'value',
            stops: [
              [2, '#ffffcc'],
              [17, '#c7e9b4'],
              [35, '#7fcdbb'],
              [52, '#41b6c4'],
              [70, '#1d91c0'],
            ],
          },
          'fill-opacity': 0,
          'fill-opacity-transition': {
            duration: 800,
            delay: 0,
          },
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'flood',
        type: 'fill',
        source: 'riesgo',
        'source-layer': 'riesgo',
        paint: {
          'fill-color': {
            property: 'fhm005yrs',
            stops: [
              [1, '#e31a1c'],
              [2, '#fd8d3c'],
              [3, '#fecc5c'],
              [4, '#ffffb2'],
            ],
          },
          'fill-opacity': 0,
          'fill-opacity-transition': {
            duration: 800,
            delay: 0,
          },
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'radius',
        type: 'fill',
        source: 'radius',
        'source-layer': 'radius_coverage',
        paint: {
          'fill-opacity': 0,
          'fill-opacity-transition': {
            duration: 800,
            delay: 0,
          },
          'fill-outline-color': '#49006a',
          'fill-color': {
            property: 'pop_coverage',
            stops: [
              [5700, '#feebe2'],
              [9200, '#fbb4b9'],
              [10500, '#f768a1'],
              [11800, '#c51b8a'],
              [13900, '#7a0177'],
            ],
          },
        },
      });

      this.map.addLayer({
        id: 'suitability',
        type: 'fill',
        source: 'riesgo',
        'source-layer': 'riesgo',
        paint: {
          'fill-color': {
            property: 'mcda005yrs',
            stops: [
              [1, '#000000'],
              [2, '#b2182b'],
              [3, '#ef8a62'],
              [4, '#67a9cf'],
              [5, '#2166ac'],
            ],
          },
          'fill-opacity': 0,
          'fill-opacity-transition': {
            duration: 800,
            delay: 0,
          },
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'evacuation',
        type: 'symbol',
        source: 'evacuation',
        'source-layer': 'marikina_evac_centers',
        layout: {
          visibility: 'none',
          'icon-image': '{icon}-15',
          'icon-allow-overlap': true,
          // 'text-field': '{amenity}',
          // 'text-font': ['Open Sans Bold'],
          // 'text-size': 10,
          // 'text-transform': 'lowercase',
          // 'text-letter-spacing': 0.05,
          // 'text-offset': [0, 1.5],
        },
        // paint: {
        //   'text-color': '#202',
        //   'text-halo-color': '#fff',
        //   'text-halo-width': 2,
        // },
      });

      this.map.addLayer({
        id: 'population',
        type: 'fill',
        source: 'population',
        'source-layer': 'marikina_pop',
        paint: {
          'fill-color': {
            property: 'value',
            stops: [
              [0, '#feebe2'],
              [13, '#fbb4b9'],
              [16, '#f768a1'],
              [21, '#c51b8a'],
              [24, '#7a0177'],
            ],
          },
          'fill-opacity': 0,
          'fill-opacity-transition': {
            duration: 800,
            delay: 0,
          },
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'capacity',
        type: 'circle',
        source: 'evacuation',
        'source-layer': 'marikina_evac_centers',
        paint: {
          'circle-color': {
            property: 'capacity',
            stops: [
              [120, '#feebe2'],
              [150, '#fbb4b9'],
              [820, '#f768a1'],
              [1890, '#c51b8a'],
              [2750, '#7a0177'],
            ],
          },
          'circle-radius': {
            property: 'capacity',
            stops: [
              [{ zoom: 12, value: 120 }, 10],
              [{ zoom: 12, value: 150 }, 15],
              [{ zoom: 12, value: 820 }, 20],
              [{ zoom: 12, value: 1890 }, 25],
              [{ zoom: 12, value: 2750 }, 30],
              [{ zoom: 15, value: 120 }, 20],
              [{ zoom: 15, value: 150 }, 40],
              [{ zoom: 15, value: 820 }, 60],
              [{ zoom: 15, value: 1890 }, 80],
              [{ zoom: 15, value: 2750 }, 100],
            ],
          },
          'circle-opacity': 0,
          'circle-opacity-transition': {
            duration: 800,
            delay: 0,
          },
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'walking',
        type: 'fill',
        source: 'isochrones',
        'source-layer': 'walkingiso',
        paint: {
          'fill-color': {
            property: 'AA_MINS',
            stops: [
              [5, '#feb24c'],
              [10, '#feb24c'],
              [15, '#feb24c'],
              [20, '#fd8d3c'],
              [25, '#f03b20'],
              [30, '#bd0026'],
            ],
          },
          'fill-outline-color': '#090909',
          'fill-opacity': 0,
          'fill-opacity-transition': {
            duration: 800,
            delay: 0,
          },
        },
        filter: ['==', 'AA_MINS', 5],
      }, 'waterway');

      this.map.addLayer({
        id: 'buildings',
        type: 'fill',
        source: 'buildings',
        'source-layer': 'marikina_buildings_features',
        paint: {
          'fill-color': '#38316e',
          // 'fill-color': [
          //   'match',
          //   ['get', 'building'],
          //   'school', '#1b9e77',
          //   'house', '#d95f02',
          //   'residential', '#7570b3',
          //   'commercial', '#e7298a',
          //   'retail', '#66a61e',
          //   'college', '#e6ab02',
          //   'mall', '#a6761d',
          //   'hospital', '#666666',
          //   '#38316e',
          // ],
          'fill-opacity': 0,
          'fill-opacity-transition': {
            duration: 800,
            delay: 0,
          },
          'fill-outline-color': '#38316e',
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'labels',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [{
              type: 'Feature',
              properties: {
                name: 'Marikina River',
                size: 12,
              },
              geometry: {
                type: 'Point',
                coordinates: [121.08634085311045, 14.634044503866145],
              },
            },
            {
              type: 'Feature',
              properties: {
                name: 'Marikina City',
                size: 20,
              },
              geometry: {
                type: 'Point',
                coordinates: [121.10887595008319, 14.652422188794105],
              },
            }],
          },
        },
        layout: {
          'text-field': '{name}',
          'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
          'text-size': ['get', 'size'],
          'text-transform': 'uppercase',
          'text-letter-spacing': 0.05,
          'text-offset': [0, 1.5],
        },
        paint: {
          'text-color': '#303',
          'text-halo-color': '#f9f6e7',
          'text-halo-width': 2,
        },
      });

      this.map.addLayer({
        id: 'aoe',
        type: 'line',
        source: 'areas',
        paint: {
          'line-color': '#303',
          'line-width': 3,
          'line-opacity': 0,
        },
      });

      this.map.addLayer({
        id: 'aoe_labels',
        type: 'symbol',
        source: 'areas',
        layout: {
          'text-field': '{name}',
          'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
          'text-size': 10,
          'text-transform': 'uppercase',
          'text-letter-spacing': 0.05,
          'text-offset': [0, 1.5],
          visibility: 'none',
        },
        paint: {
          'text-color': '#303',
          'text-halo-color': '#f9f6e7',
          'text-halo-width': 2,
        },
      });
    });


    this.tooltipContainer = document.createElement('div');

    const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
      offset: [-110, 0],
    }).setLngLat([0, 0]).addTo(this.map);

    this.map.on('click', (e) => {
      const { chapterName } = this.props;

      // Do only for accessibility story
      if (chapterName === 'accessibility') {
        const features = this.map.queryRenderedFeatures(e.point, { layers: ['evacuation'] });

        if (features.length > 0) {
          const selected = features[0].properties;

          if (selected.osm_id !== undefined) {
            this.map.getCanvas().style.cursor = features.length ? 'default' : '';

            // Set filter for isochrones depending on the osm_id
            this.map.setFilter('walking', ['==', 'osm_id', selected.osm_id]);
            console.log(selected.osm_id);
          }
        }
      }
    });

    this.map.on('mousemove', (e) => {
      const { chapterName } = this.props;
      const tooltipOptions = tooltipConfig[chapterName];

      if (tooltipOptions !== undefined) {
        const features = this.map.queryRenderedFeatures(e.point, { layers: [tooltipOptions.layer] });

        if (features.length > 0) {
          const selected = features[0].properties;

          if (selected !== undefined) {
            this.map.getCanvas().style.cursor = features.length ? 'default' : '';
          }
        }

        tooltip.setLngLat(e.lngLat);
        this.setTooltip(features, tooltipOptions);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const {
      chapterName, amenity, buildingType, layer,
      floodYear, minutes, suitabilityYear,
    } = this.props;

    if (this.map.isStyleLoaded()) {
      if (nextProps.chapterName !== chapterName) {
        const { paint, layout, position } = chapters[nextProps.chapterName]; // eslint-disable-line

        paint.forEach((data) => {
          const currentLayer = this.map.getLayer(data.id);

          if (currentLayer !== undefined) {
            const layerType = currentLayer.type;
            this.map.setPaintProperty(data.id, `${layerType}-opacity`, data.opacity);
          }
        });

        layout.forEach((data) => {
          this.map.setLayoutProperty(data.id, 'visibility', data.visibility);
        });

        this.map.easeTo(position);

        // Try filter buildings based on chapterName
        if (nextProps.chapterName === 'typhoon') {
          this.map.setFilter('buildings', ['<=', 'fhm005yrs', 2]);
        } else {
          this.map.setFilter('buildings', undefined);
        }
      }

      if (nextProps.amenity) {
        if (nextProps.amenity !== amenity) {
          if (nextProps.amenity !== 'all') {
            this.map.setFilter('evacuation', ['==', 'amenity', nextProps.amenity]);
            this.map.setFilter('capacity', ['==', 'amenity', nextProps.amenity]);
            this.map.setFilter('radius', ['==', 'amenity', nextProps.amenity]);
            this.map.setFilter('walking', ['all', ['==', 'amenity', nextProps.amenity], ['==', 'AA_MINS', minutes]]);
          } else {
            this.map.setFilter('evacuation', undefined);
            this.map.setFilter('capacity', undefined);
            this.map.setFilter('radius', undefined);
            this.map.setFilter('walking', ['==', 'AA_MINS', minutes]);
          }
        }
      }

      if (nextProps.buildingType) {
        if (nextProps.buildingType !== buildingType) {
          if (nextProps.buildingType !== 'all') {
            this.map.setFilter('buildings', ['==', 'category', nextProps.buildingType]);
          } else {
            this.map.setFilter('buildings', undefined);
          }
        }
      }

      if (nextProps.layer) {
        if (nextProps.layer !== layer) {
          const current = this.map.getLayer(layer);
          const newlayer = this.map.getLayer(nextProps.layer);

          if (current !== undefined) {
            const layerType = current.type;
            this.map.setPaintProperty(layer, `${layerType}-opacity`, 0);
          }

          if (current !== undefined) {
            const layerType = newlayer.type;
            this.map.setPaintProperty(nextProps.layer, `${layerType}-opacity`, 0.7);
          }
        }
      }

      if (nextProps.floodYear) {
        if (nextProps.floodYear !== floodYear) {
          this.map.setPaintProperty('flood', 'fill-color', {
            property: nextProps.floodYear,
            stops: floodStops,
          });
        }
      }

      if (nextProps.minutes) {
        if (nextProps.minutes !== minutes) {
          if (amenity !== 'all') {
            this.map.setFilter('walking', ['all', ['==', 'AA_MINS', nextProps.minutes], ['==', 'amenity', amenity]]);
          } else {
            this.map.setFilter('walking', ['==', 'AA_MINS', nextProps.minutes]);
          }
        }
      }

      if (nextProps.suitabilityYear) {
        if (nextProps.suitabilityYear !== suitabilityYear) {
          this.map.setPaintProperty('suitability', 'fill-color', {
            property: nextProps.suitabilityYear,
            stops: suitabilityStops,
          });
        }
      }
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  /**
   * Creates the tooltip element for the hovered tile
   * @param {object} features - queried features from the map
   * @public
   */
  setTooltip(features, tooltipOptions) {
    if (features.length) {
      ReactDOM.render(
        React.createElement(
          MapTooltip, {
            features, tooltipOptions,
          },
        ),
        this.tooltipContainer,
      );
    } else {
      ReactDOM.unmountComponentAtNode(this.tooltipContainer);
    }
  }

  tooltipContainer;

  render() {
    const mapStyle = {
      position: 'fixed',
      width: '70%',
      left: '30%',
      top: 0,
      bottom: 0,
    };

    const { chapterName, layer } = this.props;

    return (
      <div>
        <div style={mapStyle} ref={(el) => { this.mapContainer = el; }} />
        <Legend chapterName={chapterName} layer={layer} />
      </div>
    );
  }
}

Map.propTypes = {
  chapterName: PropTypes.string.isRequired,
  buildingType: PropTypes.string.isRequired,
  amenity: PropTypes.string.isRequired,
  layer: PropTypes.string.isRequired,
  floodYear: PropTypes.string.isRequired,
};
