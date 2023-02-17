// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Strother CPA - Beyond the Numbers',
  siteDescription: 'Strother CPA - Trusted CPA Services for Businesses and Individuals. Get expert tax advice, accounting solutions, and financial planning services to help you achieve your goals. Contact us today to set up an appointment.',
  icon: './src/favicon.png',
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  plugins: [
    {
      use: 'gridsome-plugin-seo',
    },
  ],
}

// {
//   use: '@gridsome/plugin-sitemap',
//   options: {
//     exclude: ['/privacy', '/legal']
//   }
// }