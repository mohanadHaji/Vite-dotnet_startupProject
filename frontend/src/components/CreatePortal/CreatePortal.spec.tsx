import { render } from '@utilities/test-utilities';
import CreatePortal from './CreatePortal';

describe('CreatePortal Component', () => {
    const PORTAL_ID = 'portal-root';
    const CHILD_TEXT = 'This is the portal content';

    beforeEach(() => {
        const portalRoot = document.createElement('div');
        portalRoot.setAttribute('id', PORTAL_ID);
        document.body.appendChild(portalRoot);
    });

    afterEach(() => {
        const portalRoot = document.getElementById(PORTAL_ID);
        if (portalRoot) {
            document.body.removeChild(portalRoot);
        }
    });

    test('renders children into the portal', () => {
        const { getByText } = render(
            <CreatePortal portalId={PORTAL_ID}>
                <div>{CHILD_TEXT}</div>
            </CreatePortal>,
        );

        const portalElement = getByText(CHILD_TEXT);
        expect(portalElement).toBeInTheDocument();
    });

    test('returns null if the portal element does not exist', () => {
        const { queryByText } = render(
            <CreatePortal portalId="non-existing-id">
                <div>{CHILD_TEXT}</div>
            </CreatePortal>,
        );

        const portalElement = queryByText(CHILD_TEXT);
        expect(portalElement).toBeNull();
    });
});
