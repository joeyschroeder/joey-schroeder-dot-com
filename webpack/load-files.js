export const loadFiles = ({ options } = {}) => {
  return {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|pdf)$/i,
          use: {
            loader: "url-loader",
            options,
          },
        },
      ],
    },
  };
};
