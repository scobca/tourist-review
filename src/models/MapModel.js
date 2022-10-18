import BaseModel from "@/models/BaseModel";
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoia29zYWt1cmEiLCJhIjoiY2p4eDR4am8yMDk3czNicGo4dmVmbDE2OSJ9.0eys6-WKigotzfUlrhoLLA';

class MapModel {

    static map

    static ratio = 0
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
            // style: 'mapbox://styles/mapbox/satellite-v9', // Specify which map style to use?
            style: 'mapbox://styles/kosakura/cl9bpvqqr002n15nlxbmrsmdm?optimize=true', // Specify which map style to use?
            center: [30.315644, 59.938955], // Specify the starting position
            zoom: 15, // Specify the starting zoom,
            projection: 'globe'
        });

        this.map.on('load', () => {
            this.getUserGeo();
            this.map.flyTo({
                center: [30.315644, 59.938955],
                zoom: 15,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
        })

    }

    static async getUserGeo() {

        this.geolocateControls = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        })

        this.map.addControl(this.geolocateControls);
        setTimeout(function() {
            document.querySelector('.mapboxgl-ctrl-geolocate').click()
        }, 200)


        this.geolocateControls.on('geolocate', function(e) {
            const lon = e.coords.longitude;
            const lat = e.coords.latitude
            MapModel.userGeolocation = {lon, lat}
        });

    }

    static async buildRoute(points) {

        const body = {
            points,
            desiredCoordinates: points[0],
            filters: this.filters,
            ratio: this.ratio
        }

        const { latLonPoints } = await BaseModel.request('map/route', { body })

        const coords = latLonPoints.map(item => item.reverse())

        // Remove old route
        if (this.map.getLayer('route')) this.map.removeLayer('route')
        if (this.map.getSource('route')) this.map.removeSource('route')

        this.map.addSource('route', {
            type: 'geojson',
            data: {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'LineString',
                    coordinates: coords
                }
            }
        })

        this.map.addLayer({
            id: 'route',
            type: 'line',
            source: 'route',
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': '#FF6464',
                'line-width': 4
            }
        });

        this.map.on('load', () => {
            this.flightAcrossTheRoute(coords)
        })

    }

    static flightAcrossTheRoute(coords) {
        return false;
        let step = 0
        setInterval(() => {
            if (!coords[step]) clearInterval()
            this.map.flyTo({ center: coords[step] })
            step += 1
        }, 100)
    }

}

export default MapModel;