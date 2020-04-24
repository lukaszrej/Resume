import { useStaticQuery, graphql } from 'gatsby';

const usePersonalData = () => {
    const data = useStaticQuery(
        graphql`
            query PersonalData {
                allDataJson(filter: { name: { eq: "Łukasz Rej" } }) {
                    nodes {
                        name
                        profile
                        experience {
                            company
                            dates
                            position
                            tasks
                        }
                        projects {
                            name
                            description {
                                technologies
                                demo
                                points
                            }
                        }
                        education {
                            school
                            dates
                            field
                            scope
                            degree
                        }
                        experienceOther {
                            company
                            dates
                            position
                        }
                        contact {
                            phone
                            email
                        }
                        technologies
                        info {
                            linkedIn
                            github
                            location
                        }
                        languages
                        hobbies
                        consent
                    }
                }
            }
        `
    );

    return data.allDataJson.nodes[0];
};

export default usePersonalData;