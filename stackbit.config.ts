
import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    stackbitVersion: "~0.6.0",
    nodeVersion: "18",
    ssgName: "hugo",
    contentSources: [],
    postInstallCommand: "npm i --no-save @stackbit/types && npm install -g hugo-cli@latest",
    devCommand: "npx hugo server -D"  // 使用 npx 运行 hugo，确保使用的是 Extended 版本
});
