const query = `
{
  testimonialCollection {
    items {
      name
      title
      quote
      profilePicture {
        url
      }
    }
  }
}
`;

const fetchTestimonials = (setTestimonials) => {
  window
    .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authenticate the request
        Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN}`
      },
      // send the GraphQL query
      body: JSON.stringify({ query })
    })
    .then((response) => response.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.error(errors);
      } else {
        setTestimonials(data.testimonialCollection.items);
      }
    });
};

export default fetchTestimonials;
