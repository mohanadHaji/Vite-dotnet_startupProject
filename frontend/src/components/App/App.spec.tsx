import { render } from '@utilities/test-utilities';
import App from './App';
import { APP_TEST_ID } from './App.const';

describe('App', () => {
    test('Renders the main page', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId(APP_TEST_ID)).toBeInTheDocument();
    });
});
