module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [ // Place the 'plugins' array here
      // ... other plugins ...
      'react-native-reanimated/plugin',
    ],
  };
};
