import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    stackbitVersion: "~0.6.0",
    nodeVersion: "18",
    ssgName: "hugo",
    contentSources: [],
    postInstallCommand: "npm i --no-save @stackbit/types && npm install -g hugo-cli && hugo-cli --version",  // 添加检查 hugo-cli 安装的命令
    devCommand: "npx hugo-cli server -D"
});
