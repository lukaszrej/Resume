import { useStaticQuery, graphql } from "gatsby";

export default () => {
    const { site } = useStaticQuery(
        graphql`
            query siteMetadata {
                site {
                    siteMetadata {
                        title
                        author
                        description
                        lang
                        charSet
                        robots
                    }
                }
            }
        `
    );

    return site.siteMetadata;
};
