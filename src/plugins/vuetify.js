/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com/
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';

export default createVuetify({
  theme: {
    defaults: {
      palettes: {
        primary: {
          base: '#03A9F4',
          darken1: '#0079D3',
          darken2: '#005CB2',
          lighten1: '#53D2FF',
          lighten2: '#82E9FF',
        },
        secondary: {
          base: '#FF5722',
          darken1: '#F44336',
          darken2: '#EB3822',
          lighten1: '#FF7961',
          lighten2: '#FF9D80',
        },
        accent: {
          base: '#FFEB3B',
          darken1: '#F8D628',
          darken2: '#F9C801',
          lighten1: '#FFF86E',
          lighten2: '#FFFCB7',
        },
      },
    },
  },
});
