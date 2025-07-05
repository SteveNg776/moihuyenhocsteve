import * as data from './data111-888.json';

export interface Hexagram {
  id: string;
  name: string;
  description: string;
  meaning: string;
  details: string;
}

// The JSON data is on the 'default' property of the imported module.
const hexagramsData: Hexagram[] = (data as any).default;

export const getHexagramById = (id: string): Hexagram | undefined => {
  if (!Array.isArray(hexagramsData)) {
    return undefined;
  }
  return hexagramsData.find(hexagram => hexagram.id === id);
};

export const hexagrams: Hexagram[] = Array.isArray(hexagramsData) ? hexagramsData : [];
