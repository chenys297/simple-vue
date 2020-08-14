import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";

export default {
  input: "./src/index.js",
  output: {
    format: "umd", // 模块化的类型 esModule commonjs模块
    name: "Vue", // 全局变量的名字
    file: "dist/umd/vue.js",
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    serve({
      port: 3000, // 用浏览器打开，端口是3000
      contentBase: "",
      openPage: "/index.html", // 打开的页面
    }),
  ],
};
