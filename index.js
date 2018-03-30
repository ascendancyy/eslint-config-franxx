module.exports = {
  extends: [
    'plugin:vue/recommended',
  ],
  rules: {
    'vue/require-default-prop': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
