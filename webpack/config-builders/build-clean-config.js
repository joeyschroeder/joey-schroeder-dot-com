import { CleanWebpackPlugin } from 'clean-webpack-plugin';

/**
 * It returns a webpack config object with a plugin that cleans the build directory
 * before each build
 * @param path - The path to the directory you want to clean.
 * @returns A function that returns an object.
 */
export const buildCleanConfig = (path) => {
  return {
    plugins: [new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: [path] })],
  };
};
