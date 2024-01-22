/** @type {import('@remix-run/dev').AppConfig} */

const config = {
    appDirectory: "src",
    ignoredRouteFiles: ["**/.*"],
    future: {},
    server: "./server.ts",
    serverBuildPath: "functions/[[path]].js",
    serverConditions: ["workerd", "worker", "browser"],
    serverModuleFormat: "esm",
    serverPlatform: "neutral",
}

export default config
