import { GlobalContext } from '@/contexts/GlobalContext';
import { fireEvent } from '@testing-library/react';
import { render } from '@utilities/test-utilities';
import ThemeSwitchButton from '.';

describe('Switch Component', () => {
    const setGlobalStateCallbackMock = jest.fn();

    const renderComponent = (theme: 'light' | 'dark') => {
        return render(
            <GlobalContext.Provider
                value={{
                    globalState: { theme },
                    setGlobalStateCallback: setGlobalStateCallbackMock,
                }}
            >
                <ThemeSwitchButton />
            </GlobalContext.Provider>,
        );
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders with dark mode when theme is dark', () => {
        const { getByRole } = renderComponent('dark');

        const switchElement = getByRole('switch', {
            name: /dark mode/i,
        });
        expect(switchElement).toBeInTheDocument();
        expect(switchElement).toBeChecked();
    });

    test('renders with light mode when theme is light', () => {
        const { getByRole } = renderComponent('light');

        const switchElement = getByRole('switch', {
            name: /light mode/i,
        });
        expect(switchElement).toBeInTheDocument();
        expect(switchElement).not.toBeChecked(); // should not be checked if theme is 'light'
    });

    test('toggles to dark mode when clicked', () => {
        const { getByRole } = renderComponent('light');

        const switchElement = getByRole('switch', {
            name: /light mode/i,
        });
        fireEvent.click(switchElement);

        expect(setGlobalStateCallbackMock).toHaveBeenCalledWith({
            theme: 'dark',
        });
    });

    test('toggles to light mode when clicked', () => {
        const { getByRole } = renderComponent('dark');

        const switchElement = getByRole('switch', {
            name: /dark mode/i,
        });
        fireEvent.click(switchElement);

        expect(setGlobalStateCallbackMock).toHaveBeenCalledWith({
            theme: 'light',
        });
    });
});
