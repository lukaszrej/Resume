module.exports = {
  siteMetadata: {
    title: `Resume`,
    author: `Łukasz Rej`,
    description: `Personal resume. Created with GatsbyJS`,
    lang: `en`,
    charSet: `utf-8`,
    robots: `noindex, nofollow `,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
        typeName: `Json`,
      },
    },
  ],
};