import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
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
        `);

    return site.siteMetadata;
};

export default useSiteMetadata;

