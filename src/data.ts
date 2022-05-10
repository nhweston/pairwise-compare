import { Candidate } from "./lib";

export const candidates: Candidate[] = [
  {
    name: 'Liberal / The Nationals',
  },
  {
    name: 'Labor',
  },
  {
    name: 'The Greens',
  },
  {
    name: 'Pauline Hanson\'s One Nation',
  },
  {
    name: 'United Australia Party',
  },
  {
    name: 'Liberal Democrats',
  },
  {
    name: 'Australian Democrats',
  },
  {
    name: 'Shooters, Fishers and Farmers'
  },
  {
    name: 'Animal Justice Party',
  },
  {
    name: 'Reason Australia',
  },
  {
    name: 'Sustainable Australia Party - Stop Overdevelopment / Corruption',
  },
  {
    name: 'The Great Australian Party',
  },
  {
    name: 'Seniors United Party of Australia',
  },
  {
    name: 'Legalise Cannabis Australia',
  },
  {
    name: 'FUSION: Science, Pirate, Secular, Climate Emergency',
  },
  {
    name: 'Informed Medical Options Party',
  },
  {
    name: 'The New Liberals',
  },
  {
    name: 'Citizens Party',
  },
  {
    name: 'Socialist Alliance',
  },
  {
    name: 'Federal ICAC Now',
  },
  {
    name: 'Indigenous - Aboriginal Party of Australia',
  },
  {
    name: 'Australian Values Party',
  },
  {
    name: 'Socialist Equality Party',
  },
];

export const candidateIds =
  candidates.map(c => c.name);

export const candidatesById =
  Object.fromEntries(candidates.map(c => [c.name, c]));
