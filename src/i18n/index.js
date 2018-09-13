import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'en', // set locale
  messages: {
    en: {
      global: {
        hello: 'Hello',
      },
    },
    fr: {
      global: {
        hello: 'Bonjour',
      },
    },
  },
});
