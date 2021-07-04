// these keywords are compared to a team member's role (e.g. UX Designer)
// if there is a match, we know that this team member is part of a particular team (e.g. Designers)
// ...maybe move this to contentful?
const founderKeywords = [ 'founder' ];
const developerKeywords = [ 'developer', 'engineer' ];
const designerKeywords = [ 'design' ];
const managerKeywords = [ 'manage' ];
const businessTeamKeywords = [ 'market', 'advisor', 'advising', 'consult', 'agent', 'financ', 'affair' ];

const getTeamMemberRole = (teamMember) => {
  return teamMember.role.toLowerCase();
};

const isFounder = (teamMember) => {
  const role = getTeamMemberRole(teamMember);

  for (let i = 0; i < founderKeywords.length; i++) {
    const keyword = founderKeywords[i];
    if (role.includes(keyword)) return true;
  }

  return false;
};

const isDeveloper = (teamMember) => {
  if (isFounder(teamMember)) return false;
  if (isDesigner(teamMember)) return false;

  const role = getTeamMemberRole(teamMember);
  for (let i = 0; i < developerKeywords.length; i++) {
    const keyword = developerKeywords[i];
    if (role.includes(keyword)) return true;
  }

  return false;
};

const isDesigner = (teamMember) => {
  if (isFounder(teamMember)) return false;

  const role = getTeamMemberRole(teamMember);
  for (let i = 0; i < designerKeywords.length; i++) {
    const keyword = designerKeywords[i];
    if (role.includes(keyword)) return true;
  }

  return false;
};

const isManager = (teamMember) => {
  if (isFounder(teamMember)) return false;

  const role = getTeamMemberRole(teamMember);
  for (let i = 0; i < managerKeywords.length; i++) {
    const keyword = managerKeywords[i];
    if (role.includes(keyword)) return true;
  }

  return false;
};

const isInBusinessTeam = (teamMember) => {
  if (isFounder(teamMember)) return false;

  const role = getTeamMemberRole(teamMember);
  for (let i = 0; i < businessTeamKeywords.length; i++) {
    const keyword = businessTeamKeywords[i];
    if (role.includes(keyword)) return true;
  }

  return false;
};

const teamCategories = [
  { teamName: 'Founders', filter: isFounder },
  { teamName: 'Developers', filter: isDeveloper },
  { teamName: 'Designers', filter: isDesigner },
  { teamName: 'Managers', filter: isManager },
  { teamName: 'Business Team', filter: isInBusinessTeam }
];

export default teamCategories;
