/** @type {import('next').NextConfig} */

const open = require("open");
const dotenv = require("dotenv");
dotenv.config();

const { HOST_NAME } = process.env;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    if (!config.experiments) {
      config.experiments = {};
    }
    config.experiments.topLevelAwait = true;

    config.resolve.fallback = { fs: false };
    config.plugins.push({
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap("AfterEmitPlugin", () => {
          runAfterStart();
        });
      },
    });
    return config;
  },
};

function runAfterStart() {
  console.log("App started at: " + HOST_NAME);
  console.log("GraphQl started at: " + `${HOST_NAME}api/graphql`);
}

module.exports = nextConfig;
