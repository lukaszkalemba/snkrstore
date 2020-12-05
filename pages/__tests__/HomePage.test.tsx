import { render } from 'utils/test-utils';
import Home from '../index';

test('Check for Getting Started Text', () => {
  const { getByRole } = render(<Home />);
  expect(getByRole('heading')).toBeInTheDocument();
});
