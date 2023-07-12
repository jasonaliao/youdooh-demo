import type { Marker, Point } from 'app/types';

export const mapMarkersToPoints = (markers: Marker[] | null): Point[] => {
    return (
        markers?.map((marker) => ({
            type: 'Feature',
            properties: {
                siteId: marker.site_number,
                cluster: false,
                ...marker,
            },
            geometry: {
                type: 'Point',
                coordinates: [marker.longitude ?? 0, marker.latitude ?? 0],
            },
        })) ?? []
    );
};
