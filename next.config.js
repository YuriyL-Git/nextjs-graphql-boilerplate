/** @type {import('next').NextConfig} */

const dotenv = require("dotenv");
const watch = require("node-watch");
const http = require("http");

dotenv.config();

const { HOST_NAME, SCHEMAS_PATH } = process.env;

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

  watch(SCHEMAS_PATH, { recursive: true }, function (evt, name) {
    console.log("%s changed.", name);
    http.get(`${HOST_NAME}api/graphql`);
  });
}

module.exports = nextConfig;
