import colors from 'vuetify/lib/util/colors'

let darkMode = false
if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || false
}

/** !IMPORTANT
 ** If you change the palette bellow,
 ** don't forget to update /saas-theme/components/Testimonials/Testimonials.vue on const palette as well.
 ** Make sure the const palette has same value as this const palette bellow
 **/

const palette = {
  violeta: {
    // primary: colors.purple.base, // primary main
    primarylight: colors.purple.lighten4, // primary light
    primarydark: colors.purple.darken3, // primary dark
    secondary: colors.lightGreen.base, // secondary main
    secondarylight: colors.lightGreen.lighten4, // secondary light
    secondarydark: colors.lightGreen.darken3, // secondary dark
    anchor: colors.purple.base, // link
    primary: '#316ce8',
    accent: '#607df9',
    info: '#0164d3',
    warning: '#fec500',
    error: '#ff4d7e',
    success: '#2cdd9b',
  },
}

export const theme = {
  ...palette.violeta,
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme,
      },
      dark: {
        ...theme,
      },
    },
    options: {
      customProperties: true,
    },
  },
}
