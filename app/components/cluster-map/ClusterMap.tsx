import { useEffect, useRef, useState } from 'react';
import Supercluster from 'supercluster';
import Map from 'react-map-gl';
import type { MapRef, MapboxMap } from 'react-map-gl';
import type { BBox } from 'geojson';
import type { Point } from 'app/types';

import { MarkerPin } from './MarkerPin';
import { ClusterPin } from './ClusterPin';

import {
    MAP_ORIGIN,
    MAP_STYLE,
    MAP_MAX_ZOOM_DEFAULT,
    MAP_ZOOM_DEFAULT,
    MAP_BOUND_DEFAULT,
    MAP_CLUSTER_RADIUS_DEFAULT,
} from './constants';

export interface ClusterMapProps extends Partial<MapboxMap> {
    token: string;
    points: Point[];
    onMarkerClick?: (pinData: Point) => void;
    onClusterMakerClick?: (childrenPins: Point[]) => void;
}

// Initialize Supercluster instance
const superCluster = new Supercluster({
    radius: MAP_CLUSTER_RADIUS_DEFAULT,
    maxZoom: MAP_MAX_ZOOM_DEFAULT,
});

export const ClusterMap = ({
    token,
    points,
    onMarkerClick,
    onClusterMakerClick,
    ...mapBoxProps
}: ClusterMapProps) => {
    const mapRef = useRef<MapRef>(null);
    const [viewport, setViewport] = useState({
        latitude: MAP_ORIGIN.latitude,
        longitude: MAP_ORIGIN.longitude,
        zoom: MAP_ZOOM_DEFAULT,
    });

    const [clusters, setClusters] = useState<
        (
            | Supercluster.PointFeature<Supercluster.AnyProps>
            | Supercluster.ClusterFeature<Supercluster.AnyProps>
        )[]
    >([]);
    const [bounds, setBounds] = useState(MAP_BOUND_DEFAULT);
    const [zoom, setZoom] = useState(MAP_ZOOM_DEFAULT);

    // Load points into Supercluster
    useEffect(() => {
        superCluster.load(points);
        setClusters(superCluster.getClusters(bounds as BBox, zoom));
    }, [points, bounds, zoom]);

    useEffect(() => {
        if (!mapRef.current) return;
        setBounds(mapRef.current.getMap().getBounds().toArray().flat());
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <Map
                initialViewState={viewport}
                maxZoom={MAP_MAX_ZOOM_DEFAULT}
                mapStyle={MAP_STYLE}
                mapboxAccessToken={token}
                style={{
                    width: '100%',
                    height: 'calc(100vh - 80px)',
                }}
                onZoomEnd={(e) => setZoom(e.viewState.zoom)}
                ref={mapRef}
                data-test-id={'cluster-map'}
                {...mapBoxProps}
            >
                {clusters.map((cluster) => {
                    const { cluster: isCluster, point_count } =
                        cluster.properties;
                    const [longitude, latitude] = cluster.geometry.coordinates;

                    if (isCluster) {
                        return (
                            <ClusterPin
                                key={cluster.properties.siteId}
                                longitude={longitude}
                                latitude={latitude}
                                pointCount={point_count}
                                onClusterPinClick={() => {
                                    const zoom = Math.min(
                                        superCluster?.getClusterExpansionZoom(
                                            cluster.id as number
                                        ),
                                        MAP_MAX_ZOOM_DEFAULT
                                    );

                                    mapRef.current?.flyTo({
                                        center: [longitude, latitude],
                                        zoom,
                                        speed: 1,
                                    });

                                    // TODO: add custom cluster marker click
                                    if (zoom > 17 && cluster.id) {
                                        const clusterPins =
                                            superCluster?.getChildren(
                                                +cluster.id
                                            );
                                        onClusterMakerClick?.(
                                            clusterPins ?? []
                                        );
                                    }
                                }}
                            />
                        );
                    }

                    return (
                        <MarkerPin
                            key={cluster.properties.siteId}
                            data={cluster}
                            onMarkerClick={onMarkerClick}
                        />
                    );
                })}
            </Map>
        </div>
    );
};
