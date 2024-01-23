import type { RollupOptions } from "rollup"
import babel from "@rollup/plugin-babel"
import typescript from "@rollup/plugin-typescript"

const config: RollupOptions[] = [
    {
        input: "src/index.ts",
        output: {
            file: "index.js",
            exports: "named",
            format: "esm",
        },
        plugins: [
            babel({
                babelHelpers: "bundled",
                exclude: "node_modules/**",
            }),
            typescript(),
        ],
    },
]

export default config
