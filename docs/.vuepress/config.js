// 注意: base的值为github仓库的名称
module.exports = {
  base: "/hl-pages/" /* 基础虚拟路径: */,
  dest: "dist" /* 打包文件基础路径, 在命令所在目录下 */,
  title: "学习文档", // 标题
  description: "学习使用 js", // 标题下的描述
  themeConfig: {
    // 主题配置
    nav: [
      {
        text: "初识 js",
        link: "chapter1",
      },
    ],
    sidebar: {
      "/chapter1/": [
        {
          title: "第一章",
          collapsable: false,
          children: [
            {
              title: "初识", // 标题
              children: [
                // 下级列表
                ["/chapter1/01_测试", "01_测试"],
                ["/chapter1/02_测试", "02_测试"],
                ["/chapter1/03_测试", "03_测试"],
                // "chapter1/01_测试",
                // "chapter1/01_测试",
                // "chapter1/03_测试",
              ],
            },
          ],
        },
      ],
    },
  },
};
