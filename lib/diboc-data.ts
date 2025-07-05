import * as data from './data111-888.json';

export interface Diboc {
  id: string;
  name: string;
  description: string;
  meaning: string;
  details: string;
}

// The JSON data is on the 'default' property of the imported module.
const dibocData: Diboc[] = (data as any).default;

export const getDibocById = (id: string): Diboc | undefined => {
  // Ensure dibocData is an array before searching.
  if (!Array.isArray(dibocData)) {
    return undefined;
  }
  return dibocData.find((item) => item.id === id);
};
