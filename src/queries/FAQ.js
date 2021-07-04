const query = `
{
  faqCollection (order: displayOrder_ASC) {
    items {
      question
      answer
    }
  }
}
`;

const fetchFAQs = (setFaqItems) => {
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
        setFaqItems(data.faqCollection.items);
      }
    });
};

export default fetchFAQs;
