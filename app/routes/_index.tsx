import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import supabase from 'utils/supabase';

import { NavBar } from '~/components/navbar/Navbar';
import { DoohFinder } from '~/components/dooh-finder/DoohFinder';
import { mapMarkersToPoints } from '~/utils/map.server';

export const meta: V2_MetaFunction = () => {
    return [
        { title: 'Youdooh - Demo' },
        { name: 'description', content: 'Welcome to Youdooh!' },
    ];
};

export const links = () => {
    return [
        {
            rel: 'stylesheet',
            href: 'https://api.tiles.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css',
        },
    ];
};

export const loader = async (args: LoaderArgs) => {
    const mapBoxToken = process.env.MAPBOX_TOKEN;

    const { data } = await supabase.from('creative_dimension').select();
    const points = mapMarkersToPoints(data);
    return { mapBoxToken, points };
};

export default function Index() {
    const { points, mapBoxToken } = useLoaderData<typeof loader>();

    return (
        <div>
            <NavBar />
            <DoohFinder token={mapBoxToken!} points={points} />
        </div>
    );
}
