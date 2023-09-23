const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  watchFolders: [
    path.resolve(__dirname, 'node_modules'),
    path.resolve(__dirname, 'node_modules', 'ui'),
    path.resolve(__dirname, '../', '../', 'packages', 'ui', 'src'),
    path.resolve(__dirname, '../', '../', 'packages', 'feat'),
    path.resolve(__dirname, '../', '../', 'node_modules'),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
