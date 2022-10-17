import BaseModel from "@/models/BaseModel";
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoia29zYWt1cmEiLCJhIjoiY2p4eDR4am8yMDk3czNicGo4dmVmbDE2OSJ9.0eys6-WKigotzfUlrhoLLA';

class MapModel {

    static map

    static init() {

        this.map = new mapboxgl.Map({
            container: 'map',
            attributionControl: false,
            language: 'ru',
            antialias: true,
            pitch: 60,
            bearing: 150,
            // style: 'mapbox://styles/mapbox/satellite-v9', // Specify which map style to use?
            style: 'mapbox://styles/kosakura/cl9bpvqqr002n15nlxbmrsmdm?optimize=true', // Specify which map style to use?
            center: [30.315644, 59.938955], // Specify the starting position
            zoom: 13, // Specify the starting zoom,
            minzoom: 10,
            maxzoom: 15,
            projection: 'globe'
        });

    }

    static async buildRoute(body) {

        const data = await BaseModel.request('map/route', { body })

        this.map.addSource('route', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': data.body.latLonPoints.map(item => item.reverse())
                }
            }
        })

        this.map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#FF6464',
                'line-width': 4
            }
        });

    }

}

export default MapModel;