import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    stackbitVersion: "~0.6.0",
    nodeVersion: "18",
    ssgName: "hugo",
    contentSources: [],
    postInstallCommand: "npm i --no-save @stackbit/types && npm install -g hugo-cli",
    devCommand: "hugo-cli server -D"  // 使用 hugo-cli 来运行 Hugo
});
