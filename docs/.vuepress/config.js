// 注意: base的值为github仓库的名称
// https://33765534.github.io/hl-study-docs/
module.exports = {
  base: "/hl-study-docs/" /* 基础虚拟路径: */,
  dest: "dist" /* 打包文件基础路径, 在命令所在目录下 */,
  title: "学习文档", // 标题
  description: "学习使用 js", // 标题下的描述
  themeConfig: {
    // 主题配置
    nav: [
      {
        text: "初识 js",
        link: "深入JS",
      },
    ],
    sidebar: {
      "/深入JS/": [
        {
          title: "深入JS",
          collapsable: false,
          children: [
            {
              title: "浏览器", // 标题
              children: [
                // 下级列表
                ["/深入JS/1-浏览器/1-浏览器工作原理和V8引擎", "浏览器工作原理和V8引擎"],
                ["/深入JS/1-浏览器/2-代码执行过程", "代码执行过程"],
              ],
            },
            {
              title: "JS基础知识", // 标题
              children: [
                ["/深入JS/2-JS基础知识/3-高阶函数和闭包的定义", "高阶函数和闭包的定义"],
                ["/深入JS/2-JS基础知识/4-函数的this指向", "函数的this指向"],
                ["/深入JS/2-JS基础知识/5-箭头函数", "箭头函数"],
                ["/深入JS/2-JS基础知识/6-手写call和apply和bind和arguments", "手写call和apply和bind和arguments"],
                ["/深入JS/2-JS基础知识/7-纯函数和柯里化和组合函数", "纯函数和柯里化和组合函数"],
                ["/深入JS/2-JS基础知识/8-严格模式和属性描述符操作", "严格模式和属性描述符操作"],
              ],
            },
          ],
        },
      ],
    },
  },
};
