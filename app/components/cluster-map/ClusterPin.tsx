import { Marker } from 'react-map-gl';

export interface ClusterPinProps {
    longitude: number;
    latitude: number;
    pointCount: string;
    onClusterPinClick: () => void;
}

export const ClusterPin = ({
    latitude,
    longitude,
    pointCount,
    onClusterPinClick,
}: ClusterPinProps) => {
    return (
        <Marker longitude={longitude} latitude={latitude}>
            <div
                className='flex justify-center items-center text-md border-2 rounded-full bg-slate-300 opacity-50 hover:opacity-100'
                style={{
                    width: `50px`,
                    height: `50px`,
                }}
                onClick={() => onClusterPinClick()}
            >
                {pointCount}
            </div>
        </Marker>
    );
};
