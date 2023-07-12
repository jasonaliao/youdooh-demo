import { Marker } from 'react-map-gl';
import { BuildingOfficeIcon, TvIcon } from '@heroicons/react/24/solid';
import type { Point } from 'app/types';

import type { ClusterMapProps } from './ClusterMap';

export interface MarkerProp extends Pick<ClusterMapProps, 'onMarkerClick'> {
    data: Point;
}

export const MarkerPin = ({ data, onMarkerClick }: MarkerProp) => {
    const [longitude, latitude] = data.geometry.coordinates;

    return (
        <Marker
            key={data.properties.siteId}
            longitude={longitude}
            latitude={latitude}
        >
            <div onClick={() => onMarkerClick?.(data)}>
                {getPinIcon(data.properties.media_type)}
            </div>
        </Marker>
    );
};

export const getPinIcon = (pinType: string) => {
    switch (pinType) {
        case 'Billboards':
            return (
                <TvIcon
                    className='block h-6 w-6 pin-billboard'
                    aria-hidden={true}
                />
            );

        default:
            return (
                <BuildingOfficeIcon
                    className='block h-6 w-6 pin-building'
                    aria-hidden={true}
                />
            );
    }
};
