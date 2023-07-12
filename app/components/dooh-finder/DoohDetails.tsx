import { useFetcher } from '@remix-run/react';
import { useEffect } from 'react';
import { QUERY_DOOH_BY_ID } from '~/routes/get-dooh-by-id';
import type { Marker } from 'app/types';

export interface DoohDetailsProps {
    selectedId: number;
}

export const DoohDetails = ({ selectedId }: DoohDetailsProps) => {
    const fetcher = useFetcher<Marker>();
    const { data } = fetcher;

    // Fetch dooh details by given ID
    useEffect(() => {
        const formData = new FormData();
        formData.append('id', selectedId.toString());

        if (fetcher.state === 'idle' && !fetcher.data) {
            fetcher.submit(formData, {
                method: 'GET',
                action: QUERY_DOOH_BY_ID,
            });
        }
    }, [selectedId, fetcher]);

    if (!data || fetcher.state === 'loading') {
        return <div>loading</div>;
    }

    return (
        <div>
            <div className='text-xl font-semibold text-black'>
                {data.media_owner}
            </div>
            <div className='text-sm text-gray-600'>{data.site_name}</div>
            <div className='mt-8'>
                <div className='text-sm text-gray-600'>{`Display resolution: ${formatResolution(
                    data.resolution
                )}`}</div>
                <div className='text-sm text-gray-600'>{`Recommended resolution: ${formatResolution(
                    data.creative_dimension
                )}`}</div>
            </div>
            <div className='mt-8'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full'>
                    Book now
                </button>
            </div>
        </div>
    );
};

// Utility function to format resolution
const formatResolution = (resolution: string | null) => {
    if (!resolution) return '';
    const [width, height] = resolution.split('x');
    return `${width}px by ${height}px`;
};
