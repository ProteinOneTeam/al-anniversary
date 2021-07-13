// const API_URL = process.env.WP_API_URL;
const API_URL = 'https://animal-logic-anniversary.flywheelsites.com/graphql/';

async function fetchAPI(query, { variables } = {}) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { 'Content-Type': 'application/json' };

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });

  // error handling work
  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log('error details', query, variables);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

// Notice the 'export' keyword here. We'll be calling this function
// directly in our blog/index.js page, so it needs to be exported
export async function getAllYears() {
  const data = await fetchAPI(
    `
    query AllYears {
      years(first: 100, where: {orderby: {field: MENU_ORDER, order: ASC}}) {
        edges {
          node {
            title
            uri
            slug
            acf {
              featuredTitle
              featuredCopy
              featuredImage {
                altText
                sourceUrl
                mediaDetails {
                  sizes {
                    name
                    sourceUrl
                  }
                }
              }
              featuredVideo
              highlights {
                title
                date
                showDate
                copy
                image {
                  altText
                  mediaItemUrl
                  mediaDetails {
                    sizes {
                      name
                      sourceUrl
                    }
                  }
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
    `
  );

  return data?.years;
}

export async function getAllYearsWithSlug() {
  const data = await fetchAPI(
    `
    {
      years(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `
  );
  return data?.years;
}

export async function getAboutUs() {
  const data = await fetchAPI(
    `
    {
      themeGeneralSettings {
        aboutUs {
          aboutUsButtonText
          aboutUsButtonUrl
          aboutUsContent
          aboutUsCopyright
          aboutUsTitle
          fieldGroupName
        }
      }
    }
  `
  );
  return data?.themeGeneralSettings.aboutUs;
}

export async function getYear(slug) {
  const data = await fetchAPI(
    `
    query YearBySlug($id: ID!, $idType: YearIdType!) {
      year(id: $id, idType: $idType) {
        id
        date
        title
        acf {
          featuredTitle
          featuredCopy
          featuredImage {
            altText
            sourceUrl
          }
          featuredVideo          
          highlights {
            title
            date
            showDate
            copy
            image {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: 'SLUG',
      },
    }
  );

  return data;
}
