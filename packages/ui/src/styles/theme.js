const primary = '#ec1187';
const secondary = '#fd8419';
const darkColor = '#0d0c0c';

// const primary = '#4427f2';
// const secondary = '#c230da';
// const darkColor = '#6060ff';


const colors = Object.freeze({
  primary: primary,
  secondary: secondary,
  default: '#dfdfdf',
  dark: '#494949',
  lightdark: '#F8F8F8',
  btnBlack: darkColor,
});

const gradientsColors = Object.freeze({
  firstPattern: [primary, secondary],
});

const theme = Object.freeze({
  extend: {
    colors,
    fontFamily: {
      mm: ['Myanmar Sans Pro'],
    },
  },
});

module.exports = {
  colors,
  theme,
  gradientsColors,
};
