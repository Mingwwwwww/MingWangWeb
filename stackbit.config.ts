import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    stackbitVersion: "~0.6.0",
    nodeVersion: "18",
    ssgName: "hugo",
    contentSources: [],
    postInstallCommand: "npm i --no-save @stackbit/types && npm install -g hugo-cli@latest",
    devCommand: "npx hugo@0.91.2 serve -D"  // 强制使用指定版本的 Hugo
});
