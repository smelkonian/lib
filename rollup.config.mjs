import { babel } from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { readFile } from "fs/promises";

const json = JSON.parse(await readFile(new URL("./package.json", import.meta.url)));

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: json.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: json.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      babel({
        babelHelpers: "bundled",
        plugins: ["babel-plugin-styled-components"],
        exclude: "node_modules/**",
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: ["react", "react-dom", "styled-components"],
  },
];
