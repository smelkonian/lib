import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import filesize from "rollup-plugin-filesize";
import { readFile } from "fs/promises";
import { babel } from "@rollup/plugin-babel";

const json = JSON.parse(await readFile(new URL("./package.json", import.meta.url)));

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: json.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({ babelHelpers: "runtime", plugins: ["@babel/plugin-transform-runtime"] }),
      filesize(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: ["react", "react-dom", "styled-components"],
  },
];
