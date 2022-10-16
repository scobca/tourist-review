import BaseModel from "@/models/BaseModel";

class MapModel {

    static async buildRoute(map, body) {

        const data = await BaseModel.request('map/route', { body })

        map.addSource('route', {
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

        map.addLayer({
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