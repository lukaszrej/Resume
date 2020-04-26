import { useStaticQuery, graphql } from 'gatsby';

const usePersonalData = () => {
    const data = useStaticQuery(
        graphql`
            query PersonalData {
                allDataJson(filter: { name: { eq: "Łukasz Rej" } }) {
                    nodes {
                        name
                        profile
                        contact {
                            location
                            phone
                            email
                        }
                        skills
                        info {
                            linkedIn {
                                title
                                url
                            }
                            github {
                                title
                                url
                            }
                        }
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
                        otherExperience {
                            company
                            dates
                            position
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