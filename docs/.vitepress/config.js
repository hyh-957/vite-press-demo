export default {
  title: 'Hyh957',
  description: 'Hyh957的blog',
  themeConfig: {
    logo: '/tea.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Archives', link: '/pages/archives' },
      { text: 'Tags', link: '/pages/tags' },
      { text: 'About', link: '/pages/about' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base:'/opt/build/repo/'
}