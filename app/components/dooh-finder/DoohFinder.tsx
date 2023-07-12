import { Fragment, useState } from 'react';

import { ClusterMap } from '~/components/cluster-map/ClusterMap';
import type { ClusterMapProps } from 'app/components/cluster-map/ClusterMap';

import { DoohDetails } from './DoohDetails';
import { SlideInDrawer } from 'app/components/slide-in-drawer/SlideInDrawer';

export interface DoohFinderProps
    extends Omit<ClusterMapProps, 'onMarkerClick' | 'onClusterMakerClick'> {}

export const DoohFinder = ({ token, points }: DoohFinderProps) => {
    const [activeDoohID, setaActiveDoohID] = useState(0);

    return (
        <>
            <ClusterMap
                token={token!}
                points={points}
                onMarkerClick={(pinData) => {
                    setaActiveDoohID(pinData.properties.id);
                }}
            />
            <SlideInDrawer
                open={activeDoohID > 0}
                onClose={() => setaActiveDoohID(0)}
            >
                <DoohDetails selectedId={activeDoohID} />
            </SlideInDrawer>
        </>
    );
};
