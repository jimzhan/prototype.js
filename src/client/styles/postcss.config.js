module.exports = () => ({
  use: [
    'postcss-cssnext',
    'postcss-import',
    'postcss-custom-properties',
    'postcss-nesting',
    'postcss-calc',
  ],
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'ie 6-8',
      'Firefox > 20',
    ],
  },
  postcssCssnext: {
    features: {
      autoprefixer: true,
    },
  },
});
