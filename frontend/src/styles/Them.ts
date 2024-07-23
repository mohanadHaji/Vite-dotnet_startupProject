export const lightTheme = {
    borderRadius: '5px',

    colors: {
        main: 'cyan',
        secondary: 'magenta',
        gray15: 'gray',
    },
    bodyBackgroundColor: 'white'
};

export const darkTheme = {
    borderRadius: '5px',

    colors: {
        main: 'red',
        secondary: 'blue',
        gray15: 'black',
    },
    bodyBackgroundColor: 'gray'
};

export type ITheme = typeof lightTheme;
