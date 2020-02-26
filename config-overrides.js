const { override, addPostcssPlugins } = require('customize-cra');

const purgecss = require('@fullhuman/postcss-purgecss');

const env = process.env.NODE_ENV;

const plugins = [require('tailwindcss')];
if (env === 'production') plugins.push(purgecss({
    content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
}));


module.exports = override(
    addPostcssPlugins(plugins)
);
