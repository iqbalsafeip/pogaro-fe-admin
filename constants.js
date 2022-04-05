const mainColors = {
    green1: '#1B6C46',
    green2: '#44B281',
    yellow: "#FFA727",
    dark1: '#303030',
    white: "#FFFFFF",
    grey1: '#bbbdc1',
    grey2: '#f5f5f8',
    black1: '#000000',
    red: 'red',
    blue: '#0064c0'
};

const colors = {
    greenPrimary: mainColors.green1,
    greenSecondary: mainColors.green2,
    yellowPrimary: mainColors.yellow,
    blackPrimary: mainColors.black1,
    blackSecondary: mainColors.dark1,
    whitePrimary: mainColors.white,
    bluePrimary: mainColors.blue,

    text: {
        primary: mainColors.dark1,
        secondary: mainColors.grey1,
        inActive: mainColors.dark2,
        active: mainColors.green1,
        disable: mainColors.grey4
    },

    button: {
        primary: {
            background: mainColors.yellowPrimary,
            text: mainColors.whitePrimary
        },
        secondary: {
            background: mainColors.greenPrimary,
            text: mainColors.whitePrimary
        },
        tertiary: {
            background: mainColors.greenSecondary,
            text: mainColors.whitePrimary
        },
        disable: {
            background: mainColors.grey1,
            text: mainColors.blackPrimary
        }
    },

    border: mainColors.grey1,
    cardLight: mainColors.yellowPrimary,
    loadingBackground: mainColors.greenPrimary,
    error: mainColors.red,
    grayBg: mainColors.grey2
};

export default colors;