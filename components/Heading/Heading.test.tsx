import { render } from 'utils/test-utils';
import Heading from './Heading';

it('renders heading', () => {
  const { getByRole } = render(<Heading />);
  expect(getByRole('heading')).toBeInTheDocument();
});
