/** @type {import('next').NextConfig} */

const dotenv = require("dotenv");
const open = require("open");
const watch = require("node-watch");
const http = require("http");
const { Project } = require("ts-morph");

dotenv.config();

const { HOST_NAME, SCHEMAS_PATH, QUERY_TYPES_PATH, GRAPHQL_API_PATH } =
  process.env;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config) => {
    if (!config.experiments) {
      config.experiments = {};
    }
    config.experiments.topLevelAwait = true;

    config.resolve.fallback = { fs: false };
    return config;
  },
};

function openApps() {
  open(HOST_NAME);
  open(`${HOST_NAME}api/graphql`);
}

function updateQueryNamesExport(queryTypesPath) {
  function getQueryNames() {
    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(queryTypesPath);
    const getSdkFunc = sourceFile.getFunction("getSdk");

    return getSdkFunc
      .getReturnType()
      .getProperties()
      .map((prop) => prop.getEscapedName());
  }

  function updateExports() {
    sourceFile.getExportDeclarations().forEach((declarations) => {
      declarations.remove();
    });
    sourceFile.addExportDeclarations([
      {
        namedExports: queryNames,
      },
    ]);
  }

  function updateQueryVariables() {
    sourceFile
      .getVariableDeclarations()
      .find((declr) => declr.getText().includes("getSdk(gglClient)"))
      .replaceWithText(`{ ${queryNames.join(", ")} } = getSdk(gglClient)`);
  }

  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(GRAPHQL_API_PATH);
  const queryNames = getQueryNames();

  updateQueryVariables();
  updateExports();
  sourceFile.save();
}

function updateConfig() {
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath("src/config/config.ts");
  console.log(
    "DECLARATIONS=",
    sourceFile
      .getVariableDeclaration("HOST_NAME")
      .setInitializer(`"${HOST_NAME}"`)
  );
  sourceFile.save();
}

function runAfterStart() {
  openApps();

  watch(SCHEMAS_PATH, { recursive: true }, function (evt, name) {
    //will trigger schema update
    http.get(`${HOST_NAME}api/graphql`);
  });

  watch(QUERY_TYPES_PATH, { recursive: true }, function (evt, name) {
    updateQueryNamesExport(QUERY_TYPES_PATH);
  });

  updateConfig();
}

module.exports = () => {
  runAfterStart();
  return nextConfig;
};
