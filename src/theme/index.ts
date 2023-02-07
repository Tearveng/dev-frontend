import {extendTheme} from 'native-base';
export const BaseTheme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: '8px',
        color: 'gray.300',
      },
      // variants: {
      //     rounded: ({
      //                   colorScheme
      //               }:any) => {
      //         return {
      //             bg: `${colorScheme}.500`,
      //             rounded: "full"
      //         };
      //     }
      // }
    },
    Input: {
      baseStyle: {
        color: 'white',
        paddingLeft: '10px',
        height: '40px',
        border: '5px solid',
        borderColor: 'white',
        borderBottomColor: 'white',
        hovered: {
          borderColor: 'white',
        },
        focused: {
          background: 'none',
          outline: 'none',
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'gray.300',
      },
      variants: {
        smallText: {
          color: 'gray.300',
          fontWeight: '300',
          fontSize: 12,
        },
      },
      sizes: {
        xl: {
          fontSize: '64px',
        },
        lg: {
          fontSize: '32px',
        },
        md: {
          fontFamily: 'ApanageBold',
          fontSize: '20px',
        },
        sm: {
          fontFamily: 'Apana',
          fontSize: '14px',
        },
      },
    },
  },
  fontConfig: {
    Apana: {
      200: {
        normal: 'ApanageBold.ttf',
      },
    },
  },
  colors: {
    slateGray: {
      50: '#f3f2f2',
      100: '#d8d8d8',
      200: '#bebebe',
      300: '#a3a3a3',
      400: '#898989',
      500: '#6f6f6f',
      600: '#565656',
      700: '#3e3e3e',
      800: '#252525',
      900: '#0d0c0d',
    },
  },
  Pressable: {
    cursor: 'pointer',
  },

  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'light',
  },
});
