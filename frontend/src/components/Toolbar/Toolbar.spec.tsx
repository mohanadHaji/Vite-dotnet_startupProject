import { render } from '@utilities/test-utilities';
import Toolbar from './Toolbar';
import { TOOLBAR_TEST_ID } from './Toolbar.const';

describe('Toolbar Component', () => {
    test('renders the ToolbarWrapper', () => {
        const { getByTestId } = render(<Toolbar />);

        const toolbarElement = getByTestId(TOOLBAR_TEST_ID);
        expect(toolbarElement).toBeInTheDocument();
    });
});
