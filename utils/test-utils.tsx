import { FC, ReactNode, ReactElement, ComponentType } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

const AllProviders: FC<AllProvidersProps> = ({ children }) => {
  return <div>{children}</div>;
};

interface AllProvidersProps {
  children: ReactNode;
}

const customRender = (ui: ReactElement, options?: {}) =>
  render(ui, { wrapper: AllProviders as ComponentType, ...options });

export * from '@testing-library/react';

export { customRender as render };
