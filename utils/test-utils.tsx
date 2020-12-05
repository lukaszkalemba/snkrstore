import { FC, ReactNode, ReactElement, ComponentType } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import '@testing-library/jest-dom';

const AllProviders: FC<AllProvidersProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

interface AllProvidersProps {
  children: ReactNode;
}

const customRender = (ui: ReactElement, options?: {}) =>
  render(ui, { wrapper: AllProviders as ComponentType, ...options });

export * from '@testing-library/react';

export { customRender as render };
