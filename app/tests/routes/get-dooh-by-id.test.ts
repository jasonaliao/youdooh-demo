import { loader } from '../../routes/get-dooh-by-id';

describe('fetches dooh by given id', () => {
    it('fails with an invalid id', async () => {
        const request = new Request('http://foo.ber');

        try {
            await loader({ request, context: {}, params: { id: 'foo' } });
        } catch (error) {
            expect((error as Response).status).toEqual(404);
        }
        // Todo: assert loader has thrown
    });
    it('fetches dooh data with correct type', async () => {
        const request = new Request('http://foo.ber');

        try {
            const data = await loader({
                request,
                context: {},
                params: { id: '2' },
            });

            expect(data).toHaveLength(1);
            expect(data.latitude).toBeDefined();
            expect(data.longitude).toBeDefined();
            expect(data.creative_dimension).toBeDefined();
            expect(data.resolution).toBeDefined();
        } catch (error) {}
    });
});
