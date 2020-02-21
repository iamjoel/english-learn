module.exports = {
  title: 'Joel英语学习进度',
  description: '',
  base: '/english-learn/progress/joel/dist/', // 部署站点的基础路径
  dest: './dist', // 构建输出的位置，从项目根路径开始算。
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F
    nav: [
      {text: 'GitHub', link: 'https://github.com/iamjoel/english-learn'}
    ],
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F
    sidebar: [
      {
        title: '句子',
        path: '/sentence.md'
      },
      {
        title: '词汇',
        collapsable: false,
        children: [
          {
            title: '按字母分类',
            path: '/vocabulary/by-first-letter'
          },
          {
            title: '按场景分类',
            path: '/vocabulary/by-scence'
          },
        ]
      },
    ]
  }
}