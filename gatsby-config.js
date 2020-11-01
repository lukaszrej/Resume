module.exports = {
    siteMetadata: {
        title: `Resume`,
        author: `Łukasz Rej`,
        description: `Personal resume. Created with GatsbyJS`,
        lang: `en`,
        charSet: `utf-8`,
        robots: `noindex, nofollow `,
    },
    pathPrefix: "/Resume",
    plugins: [
        `gatsby-plugin-react-helmet`,
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
        {
            resolve: `gatsby-plugin-styled-components`,
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Resume Łukasz Rej`,
                short_name: `Resume`,
                description: `It's just my resume.`,
                lang: `en`,
                display: `standalone`,
                icon: `src/data/images/favicons/favicon.png`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#fff`,
            },
        },
    ],
};
