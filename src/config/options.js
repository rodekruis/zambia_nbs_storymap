const center = [27.1413635, -15.484146];
const pitch = 0;
const bearing = 0;
const zoom = 7.8;
const maxZoom = 15;
 
const chapters = {
  climate_current: {
    paint: [
      {
        id: 'BDI_climate_cdd',
        opacity: 1,
      },
      {
        id: 'BDI_climate_prcptot',
        opacity: 0,
      },
      {
        id: 'BDI_climate_rx5',
        opacity: 0,
      },
      {
        id: 'BDI_climate_txx',
        opacity: 0,
      },
      {
        id: 'BDI_climate_cdd_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_prcptot_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_rx5_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_txx_proj',
        opacity: 0,
      },
      {
        id: 'BDI_historical_disasters_heat',
        opacity: 0,
      },
      {
        id: 'BDI_historical_disasters_point',
        opacity: 0,
      },
      {
        id: 'BDI_migration',
        opacity: 0,
      },
      {
        id: 'BDI_conflict_UCDP_pol',
        opacity: 0,
      },
      {
        id: 'BDI_conflict_trends',
        opacity: 0,
      },
      {
        id: 'BDI_inform_lack',
        opacity: 0,
      },
      {
        id: 'BDI_inform_vuln',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he',
        opacity: 0,
      },
      {
        id: 'BDI_inform_risk',
        opacity: 0,
      },
      {
        id: 'BDI_erosion',
        opacity: 0,
      },
      {
        id: 'BDI_nbs',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he_proj_30',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he_proj_50',
        opacity: 0,
      },
    ],
    layout: [],
    position: {
      pitch: 0,
      bearing: 0,
      zoom,
      center,
      duration: 800,
    },
  },
  hotspots: {
    paint: [
      {
        id: 'BDI_climate_cdd',
        opacity: 0,
      },
      {
        id: 'BDI_climate_prcptot',
        opacity: 0,
      },
      {
        id: 'BDI_climate_rx5',
        opacity: 0,
      },
      {
        id: 'BDI_climate_txx',
        opacity: 0,
      },
      {
        id: 'BDI_inform_risk',
        opacity: 1,
      },
      {
        id: 'BDI_climate_cdd_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_prcptot_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_rx5_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_txx_proj',
        opacity: 0,
      },
      {
        id: 'BDI_historical_disasters_heat',
        opacity: 0,
      },
      {
        id: 'BDI_historical_disasters_point',
        opacity: 0,
      },
      {
        id: 'BDI_migration',
        opacity: 0,
      },
      {
        id: 'BDI_conflict_UCDP_pol',
        opacity: 0,
      },
      {
        id: 'BDI_conflict_trends',
        opacity: 0,
      },
      {
        id: 'BDI_inform_vuln',
        opacity: 0,
      },
      {
        id: 'BDI_inform_lack',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he',
        opacity: 0,
      },
      {
        id: 'BDI_erosion',
        opacity: 0,
      },
      {
        id: 'BDI_nbs',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he_proj_30',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he_proj_50',
        opacity: 0,
      },
    ],
    layout: [],
    position: {
      // center: [121.0974737857415, 14.651397521228759],
      // zoom: 14.5,
      center,
      zoom,
      bearing: 0,
      pitch: 0,
      duration: 800,
    },
  },
  climate_projections: {
    paint: [
      {
        id: 'BDI_climate_cdd',
        opacity: 0,
      },
      {
        id: 'BDI_climate_prcptot',
        opacity: 0,
      },
      {
        id: 'BDI_climate_rx5',
        opacity: 0,
      },
      {
        id: 'BDI_climate_txx',
        opacity: 0,
      },
      {
        id: 'BDI_climate_cdd_proj',
        opacity: 1,
      },
      {
        id: 'BDI_climate_prcptot_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_rx5_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_txx_proj',
        opacity: 0,
      },
      {
        id: 'BDI_historical_disasters_heat',
        opacity: 0,
      },
      {
        id: 'BDI_historical_disasters_point',
        opacity: 0,
      },
      {
        id: 'BDI_migration',
        opacity: 0,
      },
      {
        id: 'BDI_conflict_UCDP_pol',
        opacity: 0,
      },
      {
        id: 'BDI_conflict_trends',
        opacity: 0,
      },
      {
        id: 'BDI_inform_lack',
        opacity: 0,
      },
      {
        id: 'BDI_inform_vuln',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he',
        opacity: 0,
      },
      {
        id: 'BDI_inform_risk',
        opacity: 0,
      },
      {
        id: 'BDI_erosion',
        opacity: 0,
      },
      {
        id: 'BDI_nbs',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he_proj_30',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he_proj_50',
        opacity: 0,
      },
    ],
    layout: [],
    position: {
      pitch: 0,
      bearing: 0,
      zoom,
      center,
      duration: 800,
    },
  },
  disasters: {
    paint: [
      {
        id: 'BDI_climate_cdd',
        opacity: 0,
      },
      {
        id: 'BDI_climate_prcptot',
        opacity: 0,
      },
      {
        id: 'BDI_climate_rx5',
        opacity: 0,
      },
      {
        id: 'BDI_climate_txx',
        opacity: 0,
      },
      {
        id: 'BDI_climate_cdd_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_prcptot_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_rx5_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_txx_proj',
        opacity: 0,
      },
      {
        id: 'BDI_historical_disasters_heat',
        opacity:
        {
        stops: [
          [8.5, 1],
          [9, 0]
        ]
      },
      },
      {
        id: 'BDI_historical_disasters_point',
        opacity:
        {
          stops: [
            [8.5, 0],
            [9, 1]
          ]
        },
      },
      {
        id: 'BDI_migration',
        opacity: 0,
      },
      {
        id: 'BDI_conflict_UCDP_pol',
        opacity: 0,
      },
      {
        id: 'BDI_conflict_trends',
        opacity: 0,
      },
      {
        id: 'BDI_inform_lack',
        opacity: 0,
      },
      {
        id: 'BDI_inform_vuln',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he',
        opacity: 0,
      },
      {
        id: 'BDI_inform_risk',
        opacity: 0,
      },
      {
        id: 'BDI_erosion',
        opacity: 0,
      },
      {
        id: 'BDI_nbs',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he_proj_30',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he_proj_50',
        opacity: 0,
      },
    ],
    layout: [],
    position: {
      pitch,
      bearing,
      zoom: 7.8,
      center,
      duration: 800,
    },
  },
  migration: {
    paint: [
      {
        id: 'BDI_climate_cdd',
        opacity: 0,
      },
      {
        id: 'BDI_climate_prcptot',
        opacity: 0,
      },
      {
        id: 'BDI_climate_rx5',
        opacity: 0,
      },
      {
        id: 'BDI_climate_txx',
        opacity: 0,
      },
      {
        id: 'BDI_climate_cdd_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_prcptot_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_rx5_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_txx_proj',
        opacity: 0,
      },
      {
        id: 'BDI_historical_disasters_heat',
        opacity: 0,
      },
      {
        id: 'BDI_historical_disasters_point',
        opacity: 0,
      },
      {
        id: 'BDI_migration',
        opacity: 1,
      },
      {
        id: 'BDI_conflict_UCDP_pol',
        opacity: 0,
      },
      {
        id: 'BDI_conflict_trends',
        opacity: 0,
      },
      {
        id: 'BDI_inform_lack',
        opacity: 0,
      },
      {
        id: 'BDI_inform_vuln',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he',
        opacity: 0,
      },
      {
        id: 'BDI_inform_risk',
        opacity: 0,
      },
    ],
    layout: [],
    position: {
      pitch: 0,
      bearing: 0,
      maxZoom: 11,
      center,
      duration: 800,
    },
  },
  conflict: {
    paint: [
      {
        id: 'BDI_climate_cdd',
        opacity: 0,
      },
      {
        id: 'BDI_climate_prcptot',
        opacity: 0,
      },
      {
        id: 'BDI_climate_rx5',
        opacity: 0,
      },
      {
        id: 'BDI_climate_txx',
        opacity: 0,
      },
      {
        id: 'BDI_climate_cdd_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_prcptot_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_rx5_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_txx_proj',
        opacity: 0,
      },
      {
        id: 'BDI_historical_disasters_heat',
        opacity: 0,
      },
      {
        id: 'BDI_historical_disasters_point',
        opacity: 0,
      },
      {
        id: 'BDI_migration',
        opacity: 0,
      },
      {
        id: 'BDI_conflict_UCDP_pol',
        opacity: 1,
      },
      {
        id: 'BDI_conflict_trends',
        opacity: 0,
      },
      {
        id: 'BDI_inform_lack',
        opacity: 0,
      },
      {
        id: 'BDI_inform_vuln',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he',
        opacity: 0,
      },
      {
        id: 'BDI_inform_risk',
        opacity: 0,
      },
      {
        id: 'BDI_erosion',
        opacity: 0,
      },
      {
        id: 'BDI_nbs',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he_proj_30',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he_proj_50',
        opacity: 0,
      },
    ],
    layout: [],
    position: {
      // center: [121.0974737857415, 14.651397521228759],
      // zoom: 14.5,
      center,
      zoom,
      bearing: 0,
      pitch: 0,
      duration: 800,
    },
  },
  vulnerability: {
    paint: [
      {
        id: 'BDI_climate_cdd',
        opacity: 0,
      },
      {
        id: 'BDI_climate_prcptot',
        opacity: 0,
      },
      {
        id: 'BDI_climate_rx5',
        opacity: 0,
      },
      {
        id: 'BDI_climate_txx',
        opacity: 0,
      },
      {
        id: 'BDI_climate_cdd_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_prcptot_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_rx5_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_txx_proj',
        opacity: 0,
      },
      {
        id: 'BDI_historical_disasters_heat',
        opacity: 0,
      },
      {
        id: 'BDI_historical_disasters_point',
        opacity: 0,
      },
      {
        id: 'BDI_migration',
        opacity: 0,
      },
      {
        id: 'BDI_conflict_UCDP_pol',
        opacity: 0,
      },
      {
        id: 'BDI_conflict_trends',
        opacity: 0,
      },
      {
        id: 'BDI_inform_vuln',
        opacity: 1,
      },
      {
        id: 'BDI_inform_lack',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he',
        opacity: 0,
      },
      {
        id: 'BDI_inform_risk',
        opacity: 0,
      },
      {
        id: 'BDI_erosion',
        opacity: 0,
      },
      {
        id: 'BDI_nbs',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he_proj_30',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he_proj_50',
        opacity: 0,
      },
    ],
    layout: [],
    position: {
      // center: [121.0974737857415, 14.651397521228759],
      // zoom: 14.5,
      center,
      zoom,
      bearing: 0,
      pitch: 0,
      duration: 800,
    },
  },
  lack_of_coping_capacity: {
    paint: [
      {
        id: 'BDI_climate_cdd',
        opacity: 0,
      },
      {
        id: 'BDI_climate_prcptot',
        opacity: 0,
      },
      {
        id: 'BDI_climate_rx5',
        opacity: 0,
      },
      {
        id: 'BDI_climate_txx',
        opacity: 0,
      },
      {
        id: 'BDI_climate_cdd_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_prcptot_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_rx5_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_txx_proj',
        opacity: 0,
      },
      {
        id: 'BDI_historical_disasters_heat',
        opacity: 0,
      },
      {
        id: 'BDI_historical_disasters_point',
        opacity: 0,
      },
      {
        id: 'BDI_migration',
        opacity: 0,
      },
      {
        id: 'BDI_conflict_UCDP_pol',
        opacity: 0,
      },
      {
        id: 'BDI_conflict_trends',
        opacity: 0,
      },
      {
        id: 'BDI_inform_vuln',
        opacity: 0,
      },
      {
        id: 'BDI_inform_lack',
        opacity: 1,
      },
      {
        id: 'BDI_inform_he',
        opacity: 0,
      },
      {
        id: 'BDI_inform_risk',
        opacity: 0,
      },
      {
        id: 'BDI_erosion',
        opacity: 0,
      },
      {
        id: 'BDI_nbs',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he_proj_30',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he_proj_50',
        opacity: 0,
      },
    ],
    layout: [],
    position: {
      // center: [121.0974737857415, 14.651397521228759],
      // zoom: 14.5,
      center,
      zoom,
      bearing: 0,
      pitch: 0,
      duration: 800,
    },
  },
  hazard_exposure: {
    paint: [
      {
        id: 'BDI_climate_cdd',
        opacity: 0,
      },
      {
        id: 'BDI_climate_prcptot',
        opacity: 0,
      },
      {
        id: 'BDI_climate_rx5',
        opacity: 0,
      },
      {
        id: 'BDI_climate_txx',
        opacity: 0,
      },
      {
        id: 'BDI_climate_cdd_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_prcptot_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_rx5_proj',
        opacity: 0,
      },
      {
        id: 'BDI_climate_txx_proj',
        opacity: 0,
      },
      {
        id: 'BDI_historical_disasters_heat',
        opacity: 0,
      },
      {
        id: 'BDI_historical_disasters_point',
        opacity: 0,
      },
      {
        id: 'BDI_migration',
        opacity: 0,
      },
      {
        id: 'BDI_conflict_UCDP_pol',
        opacity: 0,
      },
      {
        id: 'BDI_conflict_trends',
        opacity: 0,
      },
      {
        id: 'BDI_inform_vuln',
        opacity: 0,
      },
      {
        id: 'BDI_inform_lack',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he',
        opacity: 1,
      },
      {
        id: 'BDI_inform_risk',
        opacity: 0,
      },
      {
        id: 'BDI_erosion',
        opacity: 0,
      },
      {
        id: 'BDI_nbs',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he_proj_30',
        opacity: 0,
      },
      {
        id: 'BDI_inform_he_proj_50',
        opacity: 0,
      },
    ],
    layout: [],
    position: {
      // center: [121.0974737857415, 14.651397521228759],
      // zoom: 14.5,
      center,
      zoom,
      bearing: 0,
      pitch: 0,
      duration: 800,
    },
  },
  land_erosion: {
    paint: [
        {
          id: 'BDI_climate_cdd',
          opacity: 0,
        },
        {
          id: 'BDI_climate_prcptot',
          opacity: 0,
        },
        {
          id: 'BDI_climate_rx5',
          opacity: 0,
        },
        {
          id: 'BDI_climate_txx',
          opacity: 0,
        },
        {
          id: 'BDI_climate_cdd_proj',
          opacity: 0,
        },
        {
          id: 'BDI_climate_prcptot_proj',
          opacity: 0,
        },
        {
          id: 'BDI_climate_rx5_proj',
          opacity: 0,
        },
        {
          id: 'BDI_climate_txx_proj',
          opacity: 0,
        },
        {
          id: 'BDI_historical_disasters_heat',
          opacity: 0,
        },
        {
          id: 'BDI_historical_disasters_point',
          opacity: 0,
        },
        {
          id: 'BDI_migration',
          opacity: 0,
        },
        {
          id: 'BDI_conflict_UCDP_pol',
          opacity: 0,
        },
        {
          id: 'BDI_conflict_trends',
          opacity: 0,
        },
        {
          id: 'BDI_inform_vuln',
          opacity: 0,
        },
        {
          id: 'BDI_inform_lack',
          opacity: 0,
        },
        {
          id: 'BDI_inform_he',
          opacity: 0,
        },
        {
          id: 'BDI_inform_risk',
          opacity: 0,
        },
        {
          id: 'BDI_erosion',
          opacity: 1,
        },
        {
          id: 'BDI_nbs',
          opacity: 0,
        },
        {
          id: 'BDI_inform_he_proj_30',
          opacity: 0,
        },
        {
          id: 'BDI_inform_he_proj_50',
          opacity: 0,
        },
      ],
      layout: [],
      position: {
        // center: [121.0974737857415, 14.651397521228759],
        // zoom: 14.5,
        center,
        zoom,
        bearing: 0,
        pitch: 0,
        duration: 800,
      },
    },
  nbs: {
    paint: [
        {
          id: 'BDI_climate_cdd',
          opacity: 0,
        },
        {
          id: 'BDI_climate_prcptot',
          opacity: 0,
        },
        {
          id: 'BDI_climate_rx5',
          opacity: 0,
        },
        {
          id: 'BDI_climate_txx',
          opacity: 0,
        },
        {
          id: 'BDI_climate_cdd_proj',
          opacity: 0,
        },
        {
          id: 'BDI_climate_prcptot_proj',
          opacity: 0,
        },
        {
          id: 'BDI_climate_rx5_proj',
          opacity: 0,
        },
        {
          id: 'BDI_climate_txx_proj',
          opacity: 0,
        },
        {
          id: 'BDI_historical_disasters_heat',
          opacity: 0,
        },
        {
          id: 'BDI_historical_disasters_point',
          opacity: 0,
        },
        {
          id: 'BDI_migration',
          opacity: 0,
        },
        {
          id: 'BDI_conflict_UCDP_pol',
          opacity: 0,
        },
        {
          id: 'BDI_conflict_trends',
          opacity: 0,
        },
        {
          id: 'BDI_inform_vuln',
          opacity: 0,
        },
        {
          id: 'BDI_inform_lack',
          opacity: 0,
        },
        {
          id: 'BDI_inform_he',
          opacity: 0,
        },
        {
          id: 'BDI_inform_risk',
          opacity: 0,
        },
        {
          id: 'BDI_erosion',
          opacity: 0,
        },
        {
          id: 'BDI_nbs',
          opacity: 1,
        },
        {
          id: 'BDI_inform_he_proj_30',
          opacity: 0,
        },
        {
          id: 'BDI_inform_he_proj_50',
          opacity: 0,
        },
      ],
      layout: [],
      position: {
        // center: [121.0974737857415, 14.651397521228759],
        // zoom: 14.5,
        center,
        zoom,
        bearing: 0,
        pitch: 0,
        duration: 800,
      },
    },
  hazard_projections_2030: {
    paint: [
        {
          id: 'BDI_climate_cdd',
          opacity: 0,
        },
        {
          id: 'BDI_climate_prcptot',
          opacity: 0,
        },
        {
          id: 'BDI_climate_rx5',
          opacity: 0,
        },
        {
          id: 'BDI_climate_txx',
          opacity: 0,
        },
        {
          id: 'BDI_climate_cdd_proj',
          opacity: 0,
        },
        {
          id: 'BDI_climate_prcptot_proj',
          opacity: 0,
        },
        {
          id: 'BDI_climate_rx5_proj',
          opacity: 0,
        },
        {
          id: 'BDI_climate_txx_proj',
          opacity: 0,
        },
        {
          id: 'BDI_historical_disasters_heat',
          opacity: 0,
        },
        {
          id: 'BDI_historical_disasters_point',
          opacity: 0,
        },
        {
          id: 'BDI_migration',
          opacity: 0,
        },
        {
          id: 'BDI_conflict_UCDP_pol',
          opacity: 0,
        },
        {
          id: 'BDI_conflict_trends',
          opacity: 0,
        },
        {
          id: 'BDI_inform_vuln',
          opacity: 0,
        },
        {
          id: 'BDI_inform_lack',
          opacity: 0,
        },
        {
          id: 'BDI_inform_he',
          opacity: 0,
        },
        {
          id: 'BDI_inform_risk',
          opacity: 0,
        },
        {
          id: 'BDI_erosion',
          opacity: 0,
        },
        {
          id: 'BDI_nbs',
          opacity: 0,
        },
        {
          id: 'BDI_inform_he_proj_30',
          opacity: 1,
        },
        {
          id: 'BDI_inform_he_proj_50',
          opacity: 0,
        },
      ],
      layout: [],
      position: {
        // center: [121.0974737857415, 14.651397521228759],
        // zoom: 14.5,
        center,
        zoom,
        bearing: 0,
        pitch: 0,
        duration: 800,
      },
    },
  hazard_projections_2050: {
    paint: [
        {
          id: 'BDI_climate_cdd',
          opacity: 0,
        },
        {
          id: 'BDI_climate_prcptot',
          opacity: 0,
        },
        {
          id: 'BDI_climate_rx5',
          opacity: 0,
        },
        {
          id: 'BDI_climate_txx',
          opacity: 0,
        },
        {
          id: 'BDI_climate_cdd_proj',
          opacity: 0,
        },
        {
          id: 'BDI_climate_prcptot_proj',
          opacity: 0,
        },
        {
          id: 'BDI_climate_rx5_proj',
          opacity: 0,
        },
        {
          id: 'BDI_climate_txx_proj',
          opacity: 0,
        },
        {
          id: 'BDI_historical_disasters_heat',
          opacity: 0,
        },
        {
          id: 'BDI_historical_disasters_point',
          opacity: 0,
        },
        {
          id: 'BDI_migration',
          opacity: 0,
        },
        {
          id: 'BDI_conflict_UCDP_pol',
          opacity: 0,
        },
        {
          id: 'BDI_conflict_trends',
          opacity: 0,
        },
        {
          id: 'BDI_inform_vuln',
          opacity: 0,
        },
        {
          id: 'BDI_inform_lack',
          opacity: 0,
        },
        {
          id: 'BDI_inform_he',
          opacity: 0,
        },
        {
          id: 'BDI_inform_risk',
          opacity: 0,
        },
        {
          id: 'BDI_erosion',
          opacity: 0,
        },
        {
          id: 'BDI_nbs',
          opacity: 0,
        },
        {
          id: 'BDI_inform_he_proj_30',
          opacity: 0,
        },
        {
          id: 'BDI_inform_he_proj_50',
          opacity: 1,
        },
      ],
      layout: [],
      position: {
        // center: [121.0974737857415, 14.651397521228759],
        // zoom: 14.5,
        center,
        zoom,
        bearing: 0,
        pitch: 0,
        duration: 800,
      },
    },
};


const filters = {
  climate_current: [
    {
      hasAll: false,
      value: 'layer',
      label: 'Layers',
      onChange: 'updateLayer',
      options: [
        {
          label: 'CDD',
          value: 'BDI_climate_cdd',
          stops: [
            [46.2, '#081d58'],
            [58.4, '#225ea8'],
            [70.6, '#41b6c4'],
            [82.8, '#c7e9b4'],
            [96, '#ffffd9'],
          ],
        },
        {
          label: 'PRCPTOT',
          value: 'BDI_climate_prcptot',
          stops: [
            [750, '#ffffd9'],
            [1000, '#c7e9b4'],
            [1250, '#41b6c4'],
            [1500, '#225ea8'],
            [2000, '#081d58'],
          ],
        },
        {
          label: 'RX5day',
          value: 'BDI_climate_rx5',
          stops: [
            [65, '#ffffd9'],
            [80, '#c7e9b4'],
            [95, '#41b6c4'],
            [110, '#225ea8'],
            [125, '#081d58'],
          ],
        },
        {
          label: 'TXx',
          value: 'BDI_climate_txx',
          stops: [
            [32.2, '#dddcdc'],
            [33.4, '#f3c8b2'],
            [34.6, '#f6a586'],
            [35.8, '#e7745b'],
            [37, '#c83836'],
          ],
        },
      ],
    },
  ],
  hotspots: [
    {
      hasAll: false,
      value: 'layer',
      label: 'Final inform risk',
      onChange: 'updateLayer',
      options: [
        {
          label: 'INFORM risk',
          value: 'BDI_inform_risk',
          stops: [
            [1.9, '#fec8c0'],
            [3.4, '#fe9181'],
            [4.9, '#fe5b42'],
            [6.4, '#911300'],
            [10, '#610d00'],
          ],
        },
        {
          label: 'Hazard Exposure',
          value: 'BDI_inform_he',
          stops: [
            [1.4, '#fce6d8'],
            [2.6, '#facdb2'],
            [4.0, '#f8b48b'],
            [6.0, '#d9580c'],
            [10, '#913b08'],
          ],
        },
        {
          label: 'Vulnerability',
          value: 'BDI_inform_vuln',
          stops: [
            [1.9, '#ccd9ed'],
            [3.2, '#99b3dc'],
            [4.7, '#668ecb'],
            [6.3, '#20385e'],
            [10, '#15263f'],
          ],
        },
        {
          label: 'Lack of Coping Capacity',
          value: 'BDI_inform_lack',
          stops: [
            [3.1, '#e1e9d7'],
            [4.6, '#c4d3b0'],
            [5.9, '#a7bd89'],
            [7.3, '#4f6236'],
            [10, '#354124'],
          ],
        },
      ],
    }
  ],
  climate_projections: [
    {
      hasAll: false,
      value: 'layer',
      label: 'Layers',
      onChange: 'updateLayer',
      options: [
        {
          label: 'CDD change RCP45',
          value: 'BDI_climate_cdd_proj',
          stops: [
            [-20, '#01564d'],
            [-15, '#2f9189'],
            [-10, '#8ad1c6'],
            [-5, '#d9eeeb'],
            [0, '#f6edd5'],
            [5, '#e1c684'],
            [10, '#b77928'],
            [15, '#754308'],
            [20, '#543005'],
          ],
        },
        {
          label: 'PRCPTOT change RCP45',
          value: 'BDI_climate_prcptot_proj',
          stops: [
            [-20, '#774508'],
            [-15, '#b97b29'],
            [-10, '#e2c787'],
            [-5, '#f6edd7'],
            [0, '#d7eeeb'],
            [5, '#87d0c5'],
            [10, '#2d8f87'],
            [15, '#01564d'],
          ],
        },
        {
          label: 'RX5day change RCP45',
          value: 'BDI_climate_rx5_proj',
          stops: [
            [-20, '#774508'],
            [-15, '#b97b29'],
            [-10, '#e2c787'],
            [-5, '#f6edd7'],
            [0, '#d7eeeb'],
            [5, '#87d0c5'],
            [10, '#2d8f87'],
            [15, '#01564d'],
          ],
        },
        {
          label: 'TXx change RCP45',
          value: 'BDI_climate_txx_proj',
          stops: [
            [0.5, '#fff0dc'],
            [1, '#fee2bb'],
            [1.5, '#fdce98'],
            [2, '#fdb67f'],
            [2.5, '#fc8c59'],
            [3, '#f0694a'],
            [3.5, '#dc3c28'],
            [4, '#be0f0a'],
            [4.5, '#960000'],
            [5, '#7f0000'],
          ],
        },
      ],
    },
    {
      hasAll: false,
      value: 'climateYear',
      label: 'Timespan',
      onChange: 'updateClimateYear',
      options: [
        {
          label: '2020-2040 w.r.t 1981-2000',
          value: 'change_2030_mean',
        },
        {
          label: '2030-2050 w.r.t 1981-2000',
          value: 'change_2050_mean',
        },
      ],
    },
  ],
  disasters: [
    {
      hasAll: true,
      value: 'disasterType',
      label: 'Hazard Type',
      onChange: 'updateDisasterType',
      options: [
        {
          label: 'Drought',
          value: 'Drought',
        },
        {
          label: 'Heavy rainfall',
          value: 'Heavy rainfall',
        },
        {
          label: 'Epidemic',
          value: 'Epidemic',
        },
        {
          label: 'Wildfire',
          value: 'Wildfire',
        },
        {
          label: 'Violent wind',
          value: 'Violent wind',
        },
      ],
    },
  ],
  conflict: [
    {
      hasAll: false,
      value: 'layer',
      label: 'Conflict hotspots',
      onChange: 'updateLayer',
      options: [
        {
          label: 'Past (1989 - 2020)',
          value: 'BDI_conflict_UCDP_pol',
        },
        {
          label: 'Future trends',
          value: 'BDI_conflict_trends',
        },
      ],
    },
  ],
  vulnerability: [
    {
      hasAll: false,
      value: 'layerVuln',
      label: 'Vulnerability indicators',
      onChange: 'updateLayerVuln',
      options: [
        {
          label: 'Composite vulnerability score',
          value: 'VULNERABILITY',
        },
        {
          label: 'Multidimensional Poverty Index',
          value: 'Multidimensional Poverty Index INDEX',
        },
        {
          label: 'Malaria Mortality rate',
          value: 'Malaria Mortality rate INDEX',
        },
        {
          label: 'Food insecurity',
          value: 'Food insecurity (categories) INDEX',
        },
        {
          label: 'People in need',
          value: 'People in need FINAL INDEX',
        },
        {
          label: 'Elderly over 60',
          value: 'Elderly over 60 FINAL INDEX',
        },
        {
          label: 'Children under 5',
          value: 'Children under 5 FINAL INDEX',
        },
        {
          label: 'Pregnant women ',
          value: 'Pregnant women FINAL INDEX',
        },
        {
          label: 'IDPs',
          value: 'IDPs FINAL INDEX',
        },
      ],
    },
  ],
  lack_of_coping_capacity: [
    {
      hasAll: false,
      value: 'layerLOCC',
      label: 'Lack of coping capacity indicators',
      onChange: 'updateLayerLOCC',
      options: [
        {
          label: 'Lack of coping capacity score',
          value: 'LACK OF COPING CAPACITY',
        },
        {
          label: 'Access to healthcare',
          value: 'Access to healthcare INDEX FINAL',
        },
        {
          label: 'Access to education',
          value: 'Access to education INDEX FINAL',
        },
        {
          label: 'Access to electricity',
          value: 'Access to electricity Relative INDEX',
        },
        {
          label: 'Access to cities',
          value: 'Access to cities INDEX',
        },
      ]
    }
  ],
  hazard_exposure: [
    {
      hasAll: false,
      value: 'layerHe',
      label: 'Hazard exposure indicators',
      onChange: 'updateLayerHe',
      options: [
        {
          label: 'Hazard exposure score',
          value: 'HAZARD & EXPOSURE',
        },
        {
          label: 'Flood exposure',
          value: 'Flood exposure FINAL INDEX',
        },
        {
          label: 'Drought exposure',
          value: 'Drought exposure FINAL INDEX',
        },
        {
          label: 'Landslide exposure',
          value: 'Landslide exposure  FINAL INDEX',
        },
        {
          label: 'Conflict trends',
          value: 'Conflict FINAL INDEX',
        },
      ],
    }
  ],
  hazard_projections_2030: [
    {
      hasAll: false,
      value: 'layerHe30',
      label: 'Hazards',
      onChange: 'updateLayerHe30',
      options: [
        {
          label: 'Hazard exposure 2030',
          value: 'proj_hazard_2030',
        },
        {
          label: 'Flood exposure 2030',
          value: 'proj_flood_2030',
        },
        {
          label: 'Drought exposure 2030',
          value: 'proj_drought_2030',
        },
        {
          label: 'Landslide exposure',
          value: 'proj_landslide_2030',
        },
      ],
    }
  ],
  hazard_projections_2050: [
    {
      hasAll: false,
      value: 'layerHe50',
      label: 'Hazards',
      onChange: 'updateLayerHe50',
      options: [
        {
          label: 'Hazard exposure 2050',
          value: 'proj_hazard_2050',
        },
        {
          label: 'Flood exposure 2050',
          value: 'proj_flood_2050',
        },
        {
          label: 'Drought exposure 2050',
          value: 'proj_drought_2050',
        },
        {
          label: 'Landslide exposure',
          value: 'proj_landslide_2050',
        },
      ],
    }
  ],
};


const tooltipConfig = {
    BDI_climate_cdd: {
        features: [
          {
            label: 'Name',
            value: 'NAME_ADM3',
            type: 'title',
          },
          {
            label: 'Current climatology',
            value: 'obs_mean',
          },
        ],
      },
    BDI_climate_prcptot: {
        features: [
          {
            label: 'Name',
            value: 'NAME_ADM3',
            type: 'title',
          },
          {
            label: 'Current climatology',
            value: 'obs_mean',
          },
        ],
      },
    BDI_climate_rx5: {
        features: [
          {
            label: 'Name',
            value: 'NAME_ADM3',
            type: 'title',
          },
          {
            label: 'Current climatology',
            value: 'obs_mean',
          },
        ],
      },
    BDI_climate_txx: {
        features: [
          {
            label: 'Name',
            value: 'NAME_ADM3',
            type: 'title',
          },
          {
            label: 'Current climatology',
            value: 'obs_mean',
          },
        ],
      },
    BDI_historical_disasters_point: {
    features: [
      {
        label: 'Main hazard: ',
        value: 'main_hazard',
      },
      {
        label: 'Cascading/compounding disasters: ',
        value: 'second_disaster',
      },
      {
        label: 'Date: ',
        value: 'Date',
      },
      ],
    },
    BDI_climate_cdd_proj: {
        features: [
          {
            label: 'Name',
            value: 'NAME_ADM3',
            type: 'title',
          },
          {
            label: 'Projections RCP45 for 2030',
            value: 'change_2030_mean',
          },
          {
            label: 'Projections RCP45 for 2050',
            value: 'change_2050_mean',
          },
        ],
      },
    BDI_climate_prcptot_proj: {
        features: [
          {
            label: 'Name',
            value: 'NAME_ADM3',
            type: 'title',
          },
          {
            label: 'Projections RCP45 for 2030',
            value: 'change_2030_mean',
          },
          {
            label: 'Projections RCP45 for 2050',
            value: 'change_2050_mean',
          },
        ],
      },
    BDI_climate_rx5_proj: {
        features: [
          {
            label: 'Name',
            value: 'NAME_ADM3',
            type: 'title',
          },
          {
            label: 'Projections RCP45 for 2030',
            value: 'change_2030_mean',
          },
          {
            label: 'Projections RCP45 for 2050',
            value: 'change_2050_mean',
          },
        ],
      },
    BDI_climate_txx_proj: {
        features: [
          {
            label: 'Name',
            value: 'NAME_ADM3',
            type: 'title',
          },
          {
            label: 'Projections RCP45 for 2030',
            value: 'change_2030_mean',
          },
          {
            label: 'Projections RCP45 for 2050',
            value: 'change_2050_mean',
          },
        ],
      },
    BDI_migration: {
      features: [
        {
          label: 'IDPs',
          value: 'individus_int',
          type: 'inline',
        },
      ],
    },
    BDI_conflict_UCDP_pol: {
      features: [
        {
          label: 'NAME',
          value: 'NAME_ADM3',
          type: 'title',
        },
        {
          label: 'fatalities',
          value: 'fat',
          type: 'inline'
        },
      ],
    },
    BDI_conflict_trends: {
      features: [
        {
          label: ' ',
          value: 'Con_type',
          type: 'inline',
        },
      ],
    },
    BDI_inform_vuln: {
      features: [
        {
          label: 'Name',
          value: 'NAME_ADM3',
          type: 'title',
        },
        {
          label: 'Vulnerability index',
          value: 'VULNERABILITY',
        },
        {
          label: 'Multidimensional Poverty Index',
          value: 'Multidimensional Poverty Index INDEX',
        },
        {
          label: 'Malaria Mortality rate',
          value: 'Malaria Mortality rate INDEX',
        },
        {
          label: 'Food insecurity (categories) INDEX',
          value: 'Food insecurity (categories) INDEX',
        },
        {
          label: 'People in need FINAL INDEX',
          value: 'People in need FINAL INDEX',
        },
        {
          label: 'Elderly over 60 FINAL INDEX',
          value: 'Elderly over 60 FINAL INDEX',
        },
        {
          label: 'Children under 5 FINAL INDEX',
          value: 'Children under 5 FINAL INDEX',
        },
        {
          label: 'Pregnant women FINAL INDEX',
          value: 'Pregnant women FINAL INDEX',
        },
        {
          label: 'IDPs FINAL INDEX',
          value: 'IDPs FINAL INDEX',
        },
      ],
    },
    BDI_inform_lack: {
      features: [
        {
          label: 'Name',
          value: 'NAME_ADM3',
          type: 'title',
        },
        {
          label: 'Lack of coping capacity score',
          value: 'LACK OF COPING CAPACITY',
        },
        {
          label: 'Access to healthcare',
          value: 'Access to healthcare INDEX FINAL',
        },
        {
          label: 'Access to education',
          value: 'Access to education INDEX FINAL',
        },
        {
          label: 'Access to electricity',
          value: 'Access to electricity Relative INDEX',
        },
        {
          label: 'Access to cities',
          value: 'Access to cities INDEX',
        },
      ],
    },
    BDI_inform_he: {
      features: [
        {
          label: 'Name',
          value: 'NAME_ADM3',
          type: 'title',
        },
        {
          label: 'Hazard exposure score',
          value: 'HAZARD & EXPOSURE',
        },
        {
          label: 'Flood exposure',
          value: 'Flood exposure FINAL INDEX',
        },
        {
          label: 'Drought exposure',
          value: 'Drought exposure FINAL INDEX',
        },
        {
          label: 'Landslide exposure',
          value: 'Landslide exposure  FINAL INDEX',
        },
        {
          label: 'Conflict trends',
          value: 'Conflict FINAL INDEX',
        },
      ],
    },
    BDI_inform_risk: {
      features: [
        {
          label: 'Name',
          value: 'NAME_ADM3',
          type: 'title',
        },
        {
          label: 'INFORM index',
          value: 'INFORM RISK INDEX SCORE',
        },
        {
          label: 'Hazard exposure',
          value: 'HAZARD & EXPOSURE',
        },
        {
          label: 'Lack of coping capacity',
          value: 'LACK OF COPING CAPACITY',
        },
        {
          label: 'Vulnerability',
          value: 'VULNERABILITY',
        },
      ],
    },
    BDI_erosion: {
      features: [
        {
          label: 'Name',
          value: 'NAME_ADM3',
          type: 'title',
        },
        {
          label: 'Erosion rate, tons/ha/year',
          value: 'Average erosion rate by colline, tons/ha/year',
        },
      ],
    },
    BDI_nbs: {
      features: [
        {
          label: 'Name',
          value: 'NAME_ADM3',
          type: 'title',
        },
        {
          label: 'NBS Potential Index',
          value: 'NBS Potential Index',
        },
      ],
    },
    BDI_inform_he_proj_30: {
      features: [
        {
          label: 'Name',
          value: 'NAME_ADM3',
          type: 'title',
        },
        {
          label: 'Hazard exposure 2030',
          value: 'proj_hazard_2030',
        },
        {
          label: 'Flood exposure 2030',
          value: 'proj_flood_2030',
        },
        {
          label: 'Drought exposure 2030',
          value: 'proj_drought_2030',
        },
        {
          label: 'Landslide exposure 2030',
          value: 'proj_landslide_2030',
        },
      ],
    },
    BDI_inform_he_proj_50: {
      features: [
        {
          label: 'Name',
          value: 'NAME_ADM3',
          type: 'title',
        },
        {
          label: 'Hazard exposure 2050',
          value: 'proj_hazard_2050',
        },
        {
          label: 'Flood exposure 2050',
          value: 'proj_flood_2050',
        },
        {
          label: 'Drought exposure 2050',
          value: 'proj_drought_2050',
        },
        {
          label: 'Landslide exposure 2050',
          value: 'proj_landslide_2050',
        },
      ],
    },
  };

const tooltipLayers = {
  climate_current: ['BDI_climate_cdd', 'BDI_climate_prcptot', 'BDI_climate_rx5', 'BDI_climate_txx'],
  climate_projections: ['BDI_climate_cdd_proj', 'BDI_climate_prcptot_proj', 'BDI_climate_rx5_proj', 'BDI_climate_txx_proj'],
  disasters: ['BDI_historical_disasters_point'],
  migration: ['BDI_migration'],
  conflict: ['BDI_conflict_UCDP_pol', 'BDI_conflict_trends'],
  vulnerability: ['BDI_inform_vuln'],
  lack_of_coping_capacity: ['BDI_inform_lack'],
  hazard_exposure: ['BDI_inform_he'],
  hotspots: ['BDI_inform_risk'],
  land_erosion: ['BDI_erosion'],
  nbs: ['BDI_nbs'],
  hazard_projections_2030: ['BDI_inform_he_proj_30'],
  hazard_projections_2050: ['BDI_inform_he_proj_50'],
  };

const legendOptions = {
  BDI_climate_cdd: {
    name: 'MAXIMUM NUMBER OF CONSECUTIVE DRY DAYS WITH RR<1 MM (days)',
    colors: ['#081d58','#225ea8','#41b6c4','#c7e9b4','#ffffd9'],
    min: 35,
    max: 95,
    range: true,
  },
  BDI_climate_prcptot: {
    name: 'MEAN ANNUAL TOTAL PRECIPITATION (mm)',
    colors: ['#ffffd9','#c7e9b4','#41b6c4','#225ea8','#081d58'],
    min: 820,
    max: 1240,
    range: true,
  },
  BDI_climate_rx5: {
    name: 'MAXIMUM 5-DAY PRECIPITATION TOTAL (mm)',
    colors: ['#ffffd9','#c7e9b4','#41b6c4','#225ea8','#081d58'],
    min: 50,
    max: 125,
    range: true,
  },
  BDI_climate_txx: {
    name: 'MAXIMUM OF MAXIMUM TEMPERATURE (°C)',
    colors: ['#dddcdc','#f3c8b2','#f6a586','#e7745b','#c83836'],
    min: 30,
    max: 37,
    range: true,
  },
  BDI_climate_cdd_proj: {
    name: 'MAXIMUM NUMBER OF CONSECUTIVE DRY DAYS CHANGE (%)',
    colors: ['#01564d','#2f9189','#8ad1c6','#d9eeeb','#f6edd5','#e1c684','#b77928','#754308','#543005'],
    min: -20,
    max: 20,
    range: true,
  },
  BDI_climate_prcptot_proj: {
    name: 'MEAN ANNUAL TOTAL PRECIPITATION CHANGE (%)',
    colors: ['#774508','#b97b29','#e2c787','#f6edd7','#d7eeeb','#87d0c5','#2d8f87','#01564d'],
    min: -20,
    max: 20,
    range: true,
  },
  BDI_climate_rx5_proj: {
    name: 'MAXIMUM 5-DAY PRECIPITATION TOTAL CHANGE (%)',
    colors: ['#774508','#b97b29','#e2c787','#f6edd7','#d7eeeb','#87d0c5','#2d8f87','#01564d'],
    min: -20,
    max: 20,
    range: true,
  },
  BDI_climate_txx_proj: {
    name: 'MAXIMUM OF MAXIMUM TEMPERATURE (°C) CHANGE (%)',
    colors: ['#fff0dc','#fee2bb','#fdce98','#fdb67f','#fc8c59','#f0694a','#dc3c28','#be0f0a','#960000','#7f0000'],
    min: 0,
    max: 5,
    range: true,
  },
  BDI_historical_disasters: {
    name: 'Hazard type',
    colors: [
      {
        label: 'Drought',
        color: '#fbb03b',
      },
      {
        label: 'Heavy rainfall',
        color: '#223b53',
      },
      {
        label: 'Epidemic',
        color: '#e55e5e',
      },
      {
        label: 'Wildfire',
        color: '#168C04',
      },
      {
        label: 'Violent wind',
        color: '#3bb2d0',
      },
    ],
    range: false,
  },
  BDI_migration: {
    name: 'Number of IDPs',
    colors: ['#f3ffff','#d6fff3','#baefd6','#84b7a0','#51826c'],
    min: '< 10',
    max: '1000 +',
    range: true,
  },
  BDI_conflict_UCDP_pol: {
    name: 'Number of fatalities',
    colors: ['#feebe2','#fbb4b9'],
    min: '< 1',
    max: '100+',
    range: true,
  },
  BDI_conflict_trends: {
    name: 'Type of conflict',
    colors: [
      {
        label: 'Violence against civilians',
        color: '#5e91b2',
      },
      {
        label: 'Riots',
        color: '#ca7934',
      },
      {
        label: 'Battles',
        color: '#ffd945',
      },
      {
        label: 'Other',
        color: '#6e8a64',
      },
    ],
    range: false,
  },
  BDI_inform_vuln: {
    name: 'Vulnerability Index',
    colors: [
      {
        label: 'Very low',
        color: '#ccd9ed',
      },
      {
        label: 'Low',
        color: '#99b3dc',
      },
      {
        label: 'Medium',
        color: '#668ecb',
      },
      {
        label: 'High',
        color: '#20385e',
      },
      {
        label: 'Very high',
        color: '#15263f',
      },
    ],
    range: false
  },
  BDI_inform_lack: {
    name: 'Lack of coping capacity',
    colors: [
      {
        label: 'Very low',
        color: '#e1e9d7',
      },
      {
        label: 'Low',
        color: '#c4d3b0',
      },
      {
        label: 'Medium',
        color: '#a7bd89',
      },
      {
        label: 'High',
        color: '#4f6236',
      },
      {
        label: 'Very high',
        color: '#354124',
      },
    ],
    range: false
  },
  BDI_inform_he: {
    name: 'Hazard exposure',
    colors: [
      {
        label: 'Very low',
        color: '#fce6d8',
      },
      {
        label: 'Low',
        color: '#facdb2',
      },
      {
        label: 'Medium',
        color: '#f8b48b',
      },
      {
        label: 'High',
        color: '#d9580c',
      },
      {
        label: 'Very high',
        color: '#913b08',
      },
    ],
    range: false
  },
  BDI_inform_risk: {
    name: 'Inform risk',
    colors: [
      {
        label: 'Very low',
        color: '#fec8c0',
      },
      {
        label: 'Low',
        color: '#fe9181',
      },
      {
        label: 'Medium',
        color: '#fe5b42',
      },
      {
        label: 'High',
        color: '#911300',
      },
      {
        label: 'Very high',
        color: '#610d00',
      },
    ],
    range: false
  },
  BDI_erosion: {
    name: 'Mean erosion rate (tons/ha/year)',
    colors: ['#404040', '#767676', '#acacac', '#d1d2d1', '#f0f0f0', '#f9eae4', '#f2c0b1', '#e58f80', '#dc4650', '#c60b27'],
    min: 13,
    max: 7770,
    range: true,
  },
  BDI_nbs: {
    name: 'NBS potential index',
    colors: ['#a5601c', '#b98e59', '#d5b47a', '#e4cda7', '#f2e9d8', '#dce9e8', '#acd5d1', '#7cbdb3', '#469b8c', '#0f7c69'],
    min: 0,
    max: 1,
    range: true,
  },
  BDI_inform_he_proj_30: {
    name: 'Hazard exposure 2030',
    colors: [
      {
        label: 'Very low',
        color: '#fce6d8',
      },
      {
        label: 'Low',
        color: '#facdb2',
      },
      {
        label: 'Medium',
        color: '#f8b48b',
      },
      {
        label: 'High',
        color: '#d9580c',
      },
      {
        label: 'Very high',
        color: '#913b08',
      },
    ],
    range: false
  },
  BDI_inform_he_proj_50: {
    name: 'Hazard exposure 2050',
    colors: [
      {
        label: 'Very low',
        color: '#fce6d8',
      },
      {
        label: 'Low',
        color: '#facdb2',
      },
      {
        label: 'Medium',
        color: '#f8b48b',
      },
      {
        label: 'High',
        color: '#d9580c',
      },
      {
        label: 'Very high',
        color: '#913b08',
      },
    ],
    range: false
  },
};

const chapterLayers = {
  climate_current: ['BDI_climate_cdd', 'BDI_climate_prcptot', 'BDI_climate_rx5', 'BDI_climate_txx'],
  hotspots: ['BDI_inform_risk', 'BDI_inform_he', 'BDI_inform_vuln', 'BDI_inform_lack'],
  climate_projections: ['BDI_climate_cdd_proj', 'BDI_climate_prcptot_proj', 'BDI_climate_rx5_proj', 'BDI_climate_txx_proj'],
  disasters: ['BDI_historical_disasters'],
  migration: ['BDI_migration'],
  conflict: ['BDI_conflict_UCDP_pol', 'BDI_conflict_trends'],
  vulnerability: ['BDI_inform_vuln'],
  lack_of_coping_capacity: ['BDI_inform_lack'],
  hazard_exposure: ['BDI_inform_he'],
  land_erosion: ['BDI_erosion'],
  nbs: ['BDI_nbs'],
  hazard_projections_2030: ['BDI_inform_he_proj_30'],
  hazard_projections_2050: ['BDI_inform_he_proj_50'],

};

const vulnerabilityStops = [
  [1.9, '#ccd9ed'],
  [3.2, '#99b3dc'],
  [4.7, '#668ecb'],
  [6.3, '#20385e'],
  [10, '#15263f'],
];
const loccStops = [
  [3.1, '#e1e9d7'],
  [4.6, '#c4d3b0'],
  [5.9, '#a7bd89'],
  [7.3, '#4f6236'],
  [10, '#354124'],
];
const heStops = [
  [1.4, '#fce6d8'],
  [2.6, '#facdb2'],
  [4.0, '#f8b48b'],
  [6.0, '#d9580c'],
  [10, '#913b08'],

];
const riskStops = [
  [1.9, '#fec8c0'],
  [3.4, '#fe9181'],
  [4.9, '#fe5b42'],
  [6.4, '#911300'],
  [10, '#610d00'],
];

export {
  chapters, filters, legendOptions, chapterLayers, tooltipConfig, tooltipLayers, vulnerabilityStops, loccStops, heStops, riskStops
};
