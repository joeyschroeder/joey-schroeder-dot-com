import CopyPlugin from 'copy-webpack-plugin';

export const buildCopyFilesConfig = ({ from, to } = {}) => {
  return {
    plugins: [
      new CopyPlugin({
        patterns: [{ from, to }],
      }),
    ],
  };
};
