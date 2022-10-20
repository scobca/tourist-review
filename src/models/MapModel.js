import BaseModel from "@/models/BaseModel";
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import PlaceModel from "@/models/PlaceModel";

mapboxgl.accessToken = 'pk.eyJ1Ijoia29zYWt1cmEiLCJhIjoiY2p4eDR4am8yMDk3czNicGo4dmVmbDE2OSJ9.0eys6-WKigotzfUlrhoLLA';

class MapModel {

    static map

    static abort = new AbortController

    static ratio = .5
    static filters = [
        "TOURISM",
        "POI",
        "PEDESTRIAN_AREA",
        "HISTORICAL_OBJECT",
        "RELIGIOUS_OBJECT",
        "VIEW_POINT",
        "PIECE_OF_ART",
        "CULTURAL_OBJECT",
        "MONUMENT"
    ]

    static userGeolocation = {}

    static init() {

        this.map = new mapboxgl.Map({
            container: 'map',
            attributionControl: false,
            language: 'ru',
            antialias: true,
            pitch: 60,
            bearing: 150,
            style: 'mapbox://styles/kosakura/cl9bpvqqr002n15nlxbmrsmdm?optimize=true', // Specify which map style to use?
            center: [30.315644, 59.938955], // Specify the starting position
            zoom: 1, // Specify the starting zoom,
            projection: 'globe'
        });


        this.geolocateControls = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            showAccuracyCircle: false,
            trackUserLocation: true,
            showUserHeading: true
        })

        this.map.addControl(this.geolocateControls);

        this.geolocateControls.on('geolocate', function(e) {
            // if (MapModel.currentRoute) MapModel.buildRoute()
            const lon = e.coords.longitude;
            const lat = e.coords.latitude
            MapModel.userGeolocation = `${lat}, ${lon}`;
        });

        this.map.on('load', () => {
            document.querySelector('.mapboxgl-ctrl-geolocate').style.display = 'none';
            document.querySelector('.mapboxgl-ctrl-bottom-left').style.display = 'none'
            this.geolocateControls.trigger();
        })

    }

    static async buildRoute(destination=this.currentRoute, departure='', loc='spb', ratio=this.ratio) {

        MapModel.currentRoute = destination;

        const body = {
            loc,
            ratio,
            points: [
                destination,
                departure ?? this.userGeolocation,
            ],
            filters: this.filters,
        }

        const data = await BaseModel.request('map/route', { body, signal: this.abort.signal  })


        if (!data.latLonPoints) return false;

        const coords = data.latLonPoints.map(item => item.reverse())

        const geojson = {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'LineString',
                coordinates: coords
            }
        }

        data.sightAreas.forEach(area => {
            new mapboxgl.Marker({
                color: "#FFFFFF",
                draggable: false
            }).setLngLat(area.centroid.reverse()).setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>")).addTo(this.map);
        })

        if (this.map.getSource('route')) {
            this.map.getSource('route').setData(geojson)
        } else {
            this.map.addSource('route', {
                type: 'geojson',
                data: geojson
            })

            this.map.addLayer(
                {
                    id: 'routeline-active',
                    type: 'line',
                    source: 'route',
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    paint: {
                        'line-color': '#3887be',
                        'line-width': ['interpolate', ['linear'], ['zoom'], 12, 3, 22, 12]
                    }
                },
                'waterway-label'
            );

            this.map.addLayer(
                {
                    id: 'route',
                    type: 'symbol',
                    source: 'route',
                    layout: {
                        'symbol-placement': 'line',
                        'text-field': '◄',
                        'text-size': ['interpolate', ['linear'], ['zoom'], 12, 24, 22, 60],
                        'symbol-spacing': ['interpolate', ['linear'], ['zoom'], 12, 30, 22, 160],
                        'text-keep-upright': false
                    },
                    paint: {
                        'text-color': '#3887be',
                        'text-halo-color': 'hsl(55, 11%, 96%)',
                        'text-halo-width': 3
                    }
                },
                'waterway-label'
            );

            this.map.flyTo({
                center: coords[0]
            })

            return true;

        }

    }

    static deleteRoute() {
        this.abort.abort();
        this.abort = new AbortController();
        if (this.map.getLayer('route')) this.map.removeLayer('route')
        if (this.map.getLayer('routeline-active')) this.map.removeLayer('routeline-active')
        if (this.map.getSource('route')) this.map.removeSource('route')
        this.currentRoute = '';
    }

}

export default MapModel;