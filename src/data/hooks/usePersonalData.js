import { useStaticQuery, graphql } from 'gatsby';

export default () => {
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
                        skills {
                            id
                            label
                        }
                        socialMedia {
                            linkedInLabel
                            linkedInUrl
                            githubLabel
                            githubUrl
                        }
                        workExperience {
                            id
                            company
                            dates
                            position
                            tasks
                        }
                        projects {
                            id
                            name
                            description {
                                technologies
                                demo
                                url
                                points
                            }
                        }
                        education {
                            id
                            school
                            dates
                            field
                            scope
                            degree
                        }
                        otherExperience {
                            id
                            company
                            dates
                            position
                        }
                        languages {
                            id
                            label
                        }
                        consent
                    }
                }
            }
        `
    );

    return data.allDataJson.nodes[0];
};