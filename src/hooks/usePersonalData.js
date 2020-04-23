import { useStaticQuery, graphql } from 'gatsby';

const usePersonalData = () => {
    const data = useStaticQuery(
        graphql`
            query PersonalData {
                allDataJson(filter: { name: { eq: "Łukasz Rej" } }) {
                    nodes {
                        name
                        profile
                    }
                }
            }
        `
    );

    return data.allDataJson.nodes[0];
};

export default usePersonalData;