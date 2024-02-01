import babel from "@rollup/plugin-babel"
import typescript from "@rollup/plugin-typescript"

const config = [
    {
        input: "src/index.ts",
        output: {
            file: "dist/esm/index.js",
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
    {
        input: "src/index.ts",
        output: {
            file: "dist/cjs/index.js",
            exports: "named",
            format: "cjs",
        },
        plugins: [
            babel({
                babelHelpers: "bundled",
                exclude: "node_modules/**",
            }),
            typescript(),
        ],
    }
]

export default config
