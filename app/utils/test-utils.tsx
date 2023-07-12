import type { ReactElement } from 'react';
import type React from 'react';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return children;
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
