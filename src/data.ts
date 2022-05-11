const priorities = [
  'GOVERNMENT',
  'OPPOSITION',
  'CROSSBENCH_MANY', // Greens
  'CROSSBENCH_TWO', // One Nation
  'CROSSBENCH_ONE', // CA, JLN, LD, RPT
  'HOR', // UAP
  'STATE',
  'FORMER',
  'FORMER_STATE',
  'RECONTESTING',
  'NEW',
  'UNREGISTERED',
] as const;

type Priority = (typeof priorities)[number];

export const candidates = [
  {
    id: 'AC',
    name: 'Australian Christians',
    image: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Australian_Christians_logo.png',
    website: 'https://australianchristians.org.au/our-policies/',
    priority: 'RECONTESTING',
  },
  {
    id: 'AD',
    name: 'Australian Democrats',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Australian_Democrats_Logo.svg/482px-Australian_Democrats_Logo.svg.png',
    website: 'https://www.democrats.org.au/2022-election-platforms-2/',
    priority: 'FORMER',
  },
  {
    id: 'AFP',
    name: 'Australian Federation Party',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/AFP-wiki-300.png',
    website: 'https://ausfedparty.com.au/policies/',
    priority: 'RECONTESTING',
  },
  {
    id: 'ALP',
    name: 'Labor',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/ALP_logo_2017.svg/640px-ALP_logo_2017.svg.png',
    website: 'https://www.alp.org.au/we-stand-for/policies-and-commitments/',
    priority: 'OPPOSITION',
  },
  {
    id: 'AJP',
    name: 'Animal Justice Party',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Animal_Justice_Party_logo.png',
    website: 'https://www.animaljusticeparty.org/our_policies',
    priority: 'STATE',
  },
  {
    id: 'AP',
    name: 'Australian Progressives',
    image: 'https://upload.wikimedia.org/wikipedia/en/2/25/Australian_Progressives_logo.png',
    website: 'https://www.progressives.org.au/policies',
    priority: 'RECONTESTING',
  },
  {
    id: 'AVP',
    name: 'Australian Values Party',
    image: 'https://cdn.australianvalues.org.au/wp-content/uploads/media/2021/10/Australian_Values_Logo-05.png',
    website: 'https://australianvalues.org.au/policies',
    priority: 'NEW',
  },
  {
    id: 'CEC',
    name: 'Citizens Party',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Australian_Citizens_Party_Logo.svg/480px-Australian_Citizens_Party_Logo.svg.png',
    website: 'https://citizensparty.org.au/policies',
    priority: 'RECONTESTING',
  },
  {
    id: 'CLP',
    name: 'NT CLP',
    image: 'https://www.clp.org.au/wp-content/uploads/2022/02/country-liberal-party-460w.png',
    website: 'https://www.clp.org.au/our-plan-for-the-territory/',
    priority: 'GOVERNMENT',
  },
  {
    id: 'DHJP',
    name: 'Derryn Hinch\'s Justice Party',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/12/Derryn_Hinch%27s_Justice_Party_logo.jpg',
    website: 'https://www.justiceparty.com.au/our-policies/',
    priority: 'STATE',
  },
  {
    id: 'DP',
    name: 'David Pocock',
    image: 'https://assets.nationbuilder.com/davidpocock/sites/1/meta_images/original/Asset_16_3x_(1).png',
    website: 'https://www.davidpocock.com.au/policy',
    priority: 'NEW',
  },
  {
    id: 'DPDA',
    name: 'Drew Pavlou Democratic Alliance',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Logo_of_the_Drew_Pavlou_Democratic_Alliance.png',
    website: 'https://www.democraticalliance.com.au/issues',
    priority: 'NEW',
  },
  {
    id: 'DR',
    name: 'Damien Richardson',
    image: 'https://www.damienrichardson.com.au/storage/2022/04/DR-logo001.jpg',
    website: 'https://www.damienrichardson.com.au/policies/',
    priority: 'UNREGISTERED',
  },
  {
    id: 'FF',
    name: 'Australian Family Party',
    image: 'https://australianfamilyparty.org.au/wp-content/uploads/2020/11/banner-6.jpg',
    website: 'https://australianfamilyparty.org.au/policies/',
    priority: 'UNREGISTERED',
  },
  {
    id: 'FIN',
    name: 'Federal ICAC Now',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/FIN_Logo.jpg',
    website: 'https://www.federalicacnow.org/fin_platform',
    priority: 'NEW',
  },
  {
    id: 'FUS',
    name: 'FUSION: Science, Pirate, Secular, Climate Emergency',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Fusion-logo-full-colour.png',
    website: 'https://www.fusionparty.org.au/policy',
    priority: 'RECONTESTING',
  },
  {
    id: 'GAP',
    name: 'The Great Australian Party',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Great_Australian_Party.png',
    website: 'https://www.greataustralianparty.com.au/gap-policies',
    priority: 'FORMER',
  },
  {
    id: 'GGSJ',
    name: 'George Georgatos Social Justice',
    image: 'https://gerrygeorgatossocialjustice.com/wp-content/uploads/2018/09/logo.png',
    website: 'https://gerrygeorgatossocialjustice.com/',
    priority: 'UNREGISTERED',
  },
  {
    id: 'GRN',
    name: 'The Greens',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/AustralianGreensLogo_official.svg/554px-AustralianGreensLogo_official.svg.png',
    website: 'https://greens.org.au/platform',
    priority: 'CROSSBENCH_MANY',
  },
  {
    id: 'IMO',
    name: 'Informed Medical Options Party',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/be/IMOP_logo.png',
    website: 'https://imoparty.com/Policies',
    priority: 'RECONTESTING',
  },
  {
    id: 'IPA',
    name: 'Indigenous - Aboriginal Party of Australia',
    image: 'https://images.squarespace-cdn.com/content/v1/5fae11579965d7640e10746b/21e5ca11-1dac-4479-a109-9df2759b3125/at493f0vtdqjdrrzqffwfm9mj0_image.jpg',
    website: 'https://www.indigenouspartyofaustralia.com/our-policies',
    priority: 'NEW',
  },
  {
    id: 'JLN',
    name: 'Jacqui Lambie Network',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Jacqui_Lambie_Network_logo.svg/640px-Jacqui_Lambie_Network_logo.svg.png',
    website: 'https://lambienetwork.com.au/',
    priority: 'CROSSBENCH_ONE',
  },
  {
    id: 'KC',
    name: 'Kim For Canberra',
    image: 'https://assets.nationbuilder.com/kim4canberra/sites/1/meta_images/original/KimForCanberra_PrimaryLogo_RGB.png',
    website: 'https://www.kim4canberra.com.au/',
    priority: 'NEW',
  },
  {
    id: 'LCA',
    name: 'Legalise Cannabis Australia',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/10/Legalise_Party_logo.png',
    website: 'https://legalisecannabis.org.au/party-policy/',
    priority: 'RECONTESTING',
  },
  {
    id: 'LD',
    name: 'Liberal Democrats',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Liberal_Democratic_Party_Australia_2021_Logo.png',
    website: 'https://www.ldp.org.au/freedom',
    priority: 'CROSSBENCH_ONE'
  },
  {
    id: 'LIB',
    name: 'Liberal',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Liberal_Party_of_Australia_logo.svg/590px-Liberal_Party_of_Australia_logo.svg.png',
    website: 'https://www.liberal.org.au/our-plan',
    priority: 'GOVERNMENT',
  },
  {
    id: 'LN',
    name: 'Liberal / The Nationals',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Liberal-National_Coalition_of_Australia.png/536px-Liberal-National_Coalition_of_Australia.png',
    website: [
      { name: 'Liberal', url: 'https://www.liberal.org.au/our-plan' },
      { name: 'Nationals', url: 'https://nationals.org.au/election-2022/' },
    ],
    priority: 'GOVERNMENT',
  },
  {
    id: 'LNP',
    name: 'Liberal National Party of Queensland',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/LNP_Regular.svg/320px-LNP_Regular.svg.png',
    website: 'https://www.lnp.org.au/',
    priority: 'GOVERNMENT',
  },
  {
    id: 'M',
    name: 'Group M',
    image: null,
    website: null,
    priority: 'UNREGISTERED',
  },
  {
    id: 'MCJ',
    name: 'Morgan C Jonas',
    image: 'https://morgancjonas.com/wp-content/uploads/2022/02/new-website-logo.png',
    website: 'https://morgancjonas.com/positions/',
    priority: 'UNREGISTERED',
  },
  {
    id: 'NAT',
    name: 'National Party',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/The_National_Party_of_Australia_Logo.svg/640px-The_National_Party_of_Australia_Logo.svg.png',
    website: 'https://nationals.org.au/election-2022/',
    priority: 'CROSSBENCH_MANY', // NOTE: this is to prevent LIB vs NAT as first question
  },
  {
    id: 'NMV',
    name: 'No Mandatory Vaccination Party',
    image: 'https://nomandatoryvaccinationparty.com.au/assets/images/web-logo-nmvp-440x169.png',
    website: 'https://nomandatoryvaccinationparty.com.au/',
    priority: 'UNREGISTERED',
  },
  {
    id: 'NX',
    name: 'Nick Xenophon',
    image: 'https://assets.nationbuilder.com/xenophon/sites/1/meta_images/original/Nick_Xenopnon_2022_Orange_-_for_Senate_Bigger_Coloured_Face_Orange_Banner_RGB.png',
    website: 'https://www.xenophon.com.au/',
    priority: 'UNREGISTERED',
  },
  {
    id: 'ON',
    name: 'Pauline Hanson\'s One Nation',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Pauline_Hanson%27s_One_Nation_logo.svg/640px-Pauline_Hanson%27s_One_Nation_logo.svg.png',
    website: 'https://www.onenation.org.au/issues',
    priority: 'CROSSBENCH_TWO',
  },
  {
    id: 'RA',
    name: 'Reason Australia',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Reason_Party_Logo.svg/640px-Reason_Party_Logo.svg.png',
    website: 'https://www.reason.org.au/policy_suite',
    priority: 'STATE',
  },
  {
    id: 'RPT',
    name: 'Rex Patrick Team',
    image: 'https://assets.nationbuilder.com/rexpatrick/sites/2/meta_images/original/logo---200px.png',
    website: 'https://www.rexpatrick.com.au/',
    priority: 'CROSSBENCH_ONE',
  },
  {
    id: 'SA',
    name: 'Socialist Alliance',
    image: 'https://upload.wikimedia.org/wikipedia/en/e/e9/Socialist_Alliance_logo_2022.jpg',
    website: 'https://socialist-alliance.org/policy',
    priority: 'RECONTESTING',
  },
  {
    id: 'SAP',
    name: 'Sustainable Australia Party - Stop Overdevelopment / Corruption',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Sustainable_Australia_logo.png',
    website: 'https://www.sustainableaustralia.org.au/policies',
    priority: 'STATE',
  },
  {
    id: 'SB',
    name: 'Susan Benedyka',
    image: 'https://pbs.twimg.com/profile_banners/423155007/1632791973/1500x500',
    website: 'https://susanbenedyka.com/',
    priority: 'UNREGISTERED',
  },
  {
    id: 'SD',
    name: 'Steve Dickson',
    image: 'http://www.stevedickson.com.au/wp-content/uploads/2020/08/S-D-logo-02.png',
    website: 'http://www.stevedickson.com.au',
    priority: 'UNREGISTERED',
  },
  {
    id: 'SEP',
    name: 'Socialist Equality Party',
    image: 'https://upload.wikimedia.org/wikipedia/en/f/fe/SEP_Australia_logo.png',
    website: 'https://www.wsws.org/en/special/pages/sep/australia/home.html',
    priority: 'UNREGISTERED',
  },
  {
    id: 'SFF',
    name: 'Shooters, Fishers and Farmers',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/13/Shooters%2C_Fishers_and_Farmers_Party_logo.png',
    website: 'https://www.shootersfishersandfarmers.org.au/federal_policies-new',
    priority: 'STATE',
  },
  {
    id: 'SUPA',
    name: 'Seniors United Party of Australia',
    image: 'https://upload.wikimedia.org/wikipedia/en/e/e8/SUPA_logo_final_RGB-crop.jpg',
    website: 'https://www.seniorsunitedparty.com.au/policies-of-the-seniors-party-of-australia/',
    priority: 'RECONTESTING',
  },
  {
    id: 'TLP',
    name: 'The Local Party',
    image: 'https://assets.nationbuilder.com/tlp/sites/2/meta_images/original/the-local-party-logo.png?1624237661',
    website: 'https://www.thelocalparty.net/issues',
    priority: 'NEW',
  },
  {
    id: 'TNL',
    name: 'TNL',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/TNL_Logo.png/640px-TNL_Logo.png',
    website: 'https://tnl.net.au/policies/',
    priority: 'NEW',
  },
  {
    id: 'TSM',
    name: 'The Silent Majority',
    image: 'https://www.thesilentmajority.org.au/wp-content/uploads/2021/05/TSM-Logo-Primary-RGB-2048x1044.png',
    website: 'https://www.thesilentmajority.org.au/',
    priority: 'UNREGISTERED',
  },
  {
    id: 'UAP',
    name: 'United Australia Party',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/08/Logo_of_the_United_Australia_Party.png',
    website: 'https://www.unitedaustraliaparty.org.au/national_policy/',
    priority: 'HOR',
  },
  {
    id: 'VS',
    name: 'Victorian Socialists',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Victorian_Socialists_logo.png/480px-Victorian_Socialists_logo.png',
    website: 'https://www.victoriansocialists.org.au/our_platform',
    priority: 'RECONTESTING',
  },
  {
    id: 'WAP',
    name: 'WESTERN AUSTRALIA PARTY',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/09/Western_Australia_Party_logo.png',
    website: 'https://westernaustraliaparty.org.au/our-policies/',
    priority: 'RECONTESTING',
  },
] as const;

export type CandidateId = (typeof candidates)[number]['id'];

export interface Website {
  name: string
  url: string
}

export interface Candidate {
  id: CandidateId
  name: string
  image: string | null
  website: string | readonly { name: string, url: string }[] | null
  priority: Priority
}

// ad hoc typecheck
const _: readonly Candidate[] = candidates;

export const candidatesById: { [id in CandidateId]: Candidate } =
  Object.fromEntries(candidates.map(c => [c.id, c])) as any;

export const states = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'] as const;

export type AustralianState = (typeof states)[number];

export type Ballot = { [id in CandidateId]?: string };

export const ballots: { [state in AustralianState]: Ballot } = {
  'NSW': {
    'AJP': 'A',
    'TNL': 'B',
    'CEC': 'C',
    'SAP': 'D',
    'GRN': 'E',
    'SEP': 'F',
    'LN': 'G',
    'RA': 'H',
    'SA': 'I',
    'FIN': 'J',
    'AD': 'K',
    'IPA': 'L',
    'SFF': 'M',
    'SUPA': 'N',
    'IMO': 'O',
    'GAP': 'P',
    'LCA': 'Q',
    'FUS': 'R',
    'ON': 'S',
    'LD': 'T',
    'AVP': 'U',
    'ALP': 'V',
    'UAP': 'W',
  },
  'VIC': {
    'RA': 'A',
    'DR': 'B',
    'AD': 'C',
    'LN': 'D',
    'LCA': 'E',
    'SAP': 'F',
    'AVP': 'G',
    'DHJP': 'H',
    'AJP': 'I',
    'AP': 'J',
    'ALP': 'K',
    'UAP': 'L',
    'SA': 'M',
    'AFP': 'N',
    'SFF': 'O',
    'ON': 'P',
    'CEC': 'Q',
    'MCJ': 'R',
    'FUS': 'S',
    'SB': 'T',
    'GRN': 'U',
    'GAP': 'V',
    'LD': 'W',
    'IMO': 'X',
    'SEP': 'Y',
    'VS': 'Z',
  },
  'QLD': {
    'TSM': 'A',
    'SA': 'B',
    'LCA': 'C',
    'SAP': 'D',
    'RA': 'E',
    'TNL': 'F',
    'FIN': 'G',
    'SD': 'H',
    'SEP': 'I',
    'GRN': 'J',
    'IPA': 'K',
    'CEC': 'L',
    'GAP': 'M',
    'AVP': 'N',
    'AFP': 'O',
    'AJP': 'P',
    'AD': 'Q',
    'UAP': 'R',
    'LNP': 'S',
    'IMO': 'T',
    'FUS': 'U',
    'DPDA': 'V',
    'LD': 'W',
    'ON': 'X',
    'ALP': 'Y',
  },
  'WA': {
    'GRN': 'A',
    'AC': 'B',
    'UAP': 'C',
    'ALP': 'D',
    'SEP': 'E',
    'AD': 'F',
    'ON': 'G',
    'SA': 'H',
    'LCA': 'I',
    'GAP': 'J',
    'GGSJ': 'K',
    'LD': 'L',
    'IMO': 'M',
    'AVP': 'N',
    'AJP': 'O',
    'NMV': 'P',
    'AFP': 'Q',
    'LIB': 'R',
    'FUS': 'S',
    'WAP': 'T',
    'CEC': 'U',
    'FIN': 'V',
  },
  'SA': {
    'LD': 'A',
    'AJP': 'B',
    'LIB': 'C',
    'ALP': 'D',
    'FF': 'E',
    'GAP': 'F',
    'NAT': 'G',
    'SAP': 'H',
    'TLP': 'I',
    'AFP': 'J',
    'AD': 'K',
    'DPDA': 'L',
    'M': 'M',
    'FUS': 'N',
    'NX': 'O',
    'GRN': 'P',
    'IMO': 'Q',
    'RPT': 'R',
    'ON': 'S',
    'LCA': 'T',
    'UAP': 'U',
    'CEC': 'V',
  },
  'TAS': {
    'SAP': 'A',
    'ON': 'B',
    'AJP': 'C',
    'ALP': 'D',
    'LCA': 'E',
    'SFF': 'F',
    'AFP': 'G',
    'TLP': 'H',
    'GRN': 'I',
    'LD': 'J',
    'UAP': 'K',
    'LIB': 'L',
    'JLN': 'M',
    'IMO': 'N',
  },
  'ACT': {
    'ALP': 'A',
    'SAP': 'B',
    'UAP': 'C',
    'LIB': 'D',
    'DP': 'E',
    'KC': 'F',
    'AP': 'G',
    'GRN': 'H',
    'LCA': 'I',
    'AJP': 'J',
    'IMO': 'K',
  },
  'NT': {
    'CLP': 'A',
    'LD': 'B',
    'ALP': 'C',
    'LCA': 'D',
    'SAP': 'E',
    'GAP': 'F',
    'CEC': 'G',
    'GRN': 'H',
  },
};

export const getCandidateList = (state: AustralianState): CandidateId[] => {
  const priorityIndices: { [priority in Priority]: number } =
    Object.fromEntries(priorities.map((p, i) => [p, i])) as any;
  const ballot = ballots[state];
  const ids = Object.keys(ballot) as CandidateId[];
  const getPriorityIndex = (id: CandidateId): number =>
    priorityIndices[candidatesById[id].priority];
  ids.sort((a, b) => {
    const byPriority = getPriorityIndex(a) - getPriorityIndex(b);
    if (byPriority !== 0) {
      return byPriority;
    }
    return ballot[a]!.localeCompare(ballot[b]!);
  });
  return ids;
};
