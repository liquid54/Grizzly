const Colors = {
  light: {
    accent: {
      100: '#FF4D001A',
      200: '#FF824C',
      950: '#FF4D00',
    },
    black: {
      100: '#00000080',
      900: '#000000'
    },
    white: {
      100: '#FFFFFF'
    },
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    },
    blue: {
      100: '#29BBDF',
      200: '#008AAC',
      300: '#006699',
      900: '#003F5C'
    },
    green: {
      100: '#CCFFCC',
      300: '#4CAF50',
      500: '#087F23',
      900: '#005005'
    },
    red: {
      100: '#F0101B',
      300: '#C62828',
      900: '#7F0000'
    }
  }
};

export const Gradients = {
  blue: ['#29BBDF', '#008AAC']
};


export const TailwindColors = {
  accent: Colors.light.accent,
  black: Colors.light.black,
  white: Colors.light.white,
  gray: Colors.light.gray,
  blue: Colors.light.blue,
  green: Colors.light.green,
  red: Colors.light.red,
};

export const TailwindGradients = {
  blue: Gradients.blue,
};

export default Colors;