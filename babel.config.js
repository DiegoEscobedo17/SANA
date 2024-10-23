// babel.config.js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './', // Asegúrate de que '@' apunta a la raíz del proyecto
          },
        },
      ],
    ],
  };
};
