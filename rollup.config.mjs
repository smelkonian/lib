import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import filesize from "rollup-plugin-filesize";
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
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript({ tsconfig: "./tsconfig.json" }), filesize()],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: ["react", "react-dom", "styled-components"],
  },
];
