const query = `
{
  teamMemberCollection {
    items {
      fullName
      role
      education
      narrative
      dateJoined
      isAlumni
      profilePicture {
        url
      }
      location {
        lat
        lon
      }
    }
  }
}
`;

// returns an array of objects where the key-value pairs are of this format...
// {
//   coord: ""            // string in the form of "lon,lat"
//   teamMembers: []      // array of objects representing each team member's profile
// }
const groupTeamMembersByLocation = (teamMembers) => {
  const locations = [];

  teamMembers.forEach((person) => {
    const lon = person.location.lon;
    const lat = person.location.lat;
    const coord = `${lon},${lat}`;

    const location = locations.filter((location) => location.coord === coord); // returns an arr of length at most 1
    if (location.length > 0) {
      // this location group already exists
      location[0]['teamMembers'].push(person);
    } else {
      // this location group does not exist, so create it
      locations.push({ coord, teamMembers: [ person ] });
    }
  });

  // sort locations by the number of team members in that location
  locations.sort((a, b) => {
    if (a['teamMembers'].length < b['teamMembers'].length) return 1;
    if (a['teamMembers'].length > b['teamMembers'].length) return -1;
    return 0;
  });

  return locations;
};

const fetchTeam = (setTeamMembers, setTeamLocations) => {
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
        const teamMembers = data.teamMemberCollection.items;

        setTeamMembers(teamMembers);
        setTeamLocations(groupTeamMembersByLocation(teamMembers));
      }
    });
};

export default fetchTeam;
