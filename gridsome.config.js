module.exports = {
  siteName: "Strother CPA",
  siteDescription:
    "Strother CPA - Based in the Denver metro area, Strother CPA provides accounting services for businesses and individuals. Get expert tax advice, accounting solutions, and financial planning services to help you achieve your goals. Contact us today to set up an appointment.",
  siteUrl: "https://strother-cpa.netlify.app",
  icon: "./src/favicon.png",
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  plugins: [
    {
      use: "gridsome-plugin-seo",
    },
  ],
};

// {
//   use: '@gridsome/plugin-sitemap',
//   options: {
//     exclude: ['/privacy', '/legal']
//   }
// }
