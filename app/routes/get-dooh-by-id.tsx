import type { LoaderArgs } from '@remix-run/node'; // or cloudflare/deno
import supabase from 'utils/supabase';

export const loader = async ({ request }: LoaderArgs) => {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    const { data } = await supabase
        .from('creative_dimension')
        .select()
        .eq('id', id);

    if (!data?.[0]) {
        throw new Response(null, {
            status: 404,
            statusText: 'Dooh not Found',
        });
    }

    return data[0];
};

export const QUERY_DOOH_BY_ID = '/get-dooh-by-id';
