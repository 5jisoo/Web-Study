module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{ loader: "file-loader" }],
      },
    ],
  },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.css$/i,
  //         use: [
  //           "style-loader",
  //           "css-loader",
  //           {
  //             loader: "postcss-loader",
  //             options: {
  //               postcssOptions: {
  //                 plugins: [
  //                   [
  //                     "postcss-preset-env",
  //                     {
  //                       // Options
  //                     },
  //                   ],
  //                 ],
  //               },
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //   },
};
