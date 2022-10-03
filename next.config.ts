/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              context: "",
              outputPath: "static",
              publicPath: "_next/static",
              name: "[path][name].[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
};
