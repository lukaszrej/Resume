module.exports = {
  siteMetadata: {
    title: `Resume`,
    author: `Łukasz Rej`,
    description: `Personal resume. Created with GatsbyJS`,
    lang: `en`,
    charSet: `utf-8`,
    robots: `noindex, nofollow `,
  },
  pathPrefix: "/resume",
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
        typeName: `Json`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};