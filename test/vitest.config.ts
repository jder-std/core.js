import { defineConfig } from "vitest/config";

export default defineConfig({
    optimizeDeps: {
        exclude: [
            "@jderjs/core",
        ],
    },
    test: {
        logHeapUsage: true,
    },
});
