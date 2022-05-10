import { Candidate } from "./lib";

export const candidates: Candidate[] = [
  {
    name: 'Liberal / The Nationals',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Liberal-National_Coalition_of_Australia.png/536px-Liberal-National_Coalition_of_Australia.png',
  },
  {
    name: 'Labor',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/ALP_logo_2017.svg/640px-ALP_logo_2017.svg.png',
  },
  {
    name: 'The Greens',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/AustralianGreensLogo_official.svg/554px-AustralianGreensLogo_official.svg.png',
  },
  {
    name: 'Pauline Hanson\'s One Nation',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Pauline_Hanson%27s_One_Nation_logo.svg/640px-Pauline_Hanson%27s_One_Nation_logo.svg.png',
  },
  {
    name: 'United Australia Party',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/08/Logo_of_the_United_Australia_Party.png',
  },
  {
    name: 'Liberal Democrats',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Liberal_Democratic_Party_Australia_2021_Logo.png',
  },
  {
    name: 'Australian Democrats',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Australian_Democrats_Logo.svg/482px-Australian_Democrats_Logo.svg.png',
  },
  {
    name: 'Shooters, Fishers and Farmers',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/13/Shooters%2C_Fishers_and_Farmers_Party_logo.png',
  },
  {
    name: 'Animal Justice Party',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Animal_Justice_Party_logo.png',
  },
  {
    name: 'Reason Australia',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Reason_Party_Logo.svg/640px-Reason_Party_Logo.svg.png',
  },
  {
    name: 'Sustainable Australia Party - Stop Overdevelopment / Corruption',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Sustainable_Australia_logo.png',
  },
  {
    name: 'The Great Australian Party',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Great_Australian_Party.png',
  },
  {
    name: 'Seniors United Party of Australia',
    image: 'https://upload.wikimedia.org/wikipedia/en/e/e8/SUPA_logo_final_RGB-crop.jpg',
  },
  {
    name: 'Legalise Cannabis Australia',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/10/Legalise_Party_logo.png',
  },
  {
    name: 'FUSION: Science, Pirate, Secular, Climate Emergency',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Fusion-logo-full-colour.png',
  },
  {
    name: 'Informed Medical Options Party',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/be/IMOP_logo.png',
  },
  {
    name: 'The New Liberals',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/TNL_Logo.png/640px-TNL_Logo.png',
  },
  {
    name: 'Citizens Party',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Australian_Citizens_Party_Logo.svg/480px-Australian_Citizens_Party_Logo.svg.png',
  },
  {
    name: 'Socialist Alliance',
    image: 'https://upload.wikimedia.org/wikipedia/en/e/e9/Socialist_Alliance_logo_2022.jpg',
  },
  {
    name: 'Federal ICAC Now',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/FIN_Logo.jpg',
  },
  {
    name: 'Indigenous - Aboriginal Party of Australia',
    image: 'https://images.squarespace-cdn.com/content/v1/5fae11579965d7640e10746b/21e5ca11-1dac-4479-a109-9df2759b3125/at493f0vtdqjdrrzqffwfm9mj0_image.jpg',
  },
  {
    name: 'Australian Values Party',
    image: 'https://cdn.australianvalues.org.au/wp-content/uploads/media/2021/10/Australian_Values_Logo-05.png',
  },
  {
    name: 'Socialist Equality Party',
    image: 'https://upload.wikimedia.org/wikipedia/en/f/fe/SEP_Australia_logo.png',
  },
];

export const candidateIds =
  candidates.map(c => c.name);

export const candidatesById =
  Object.fromEntries(candidates.map(c => [c.name, c]));
