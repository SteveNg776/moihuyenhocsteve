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

/**
 * Retrieves a prediction by its ID. Renamed from getDibocById to match component usage.
 * @param id The ID of the prediction to retrieve.
 * @returns A Diboc object or undefined if not found.
 */
export const getPredictionById = (id: string): Diboc | undefined => {
  if (!Array.isArray(dibocData)) {
    return undefined;
  }
  return dibocData.find((item) => item.id === id);
};

/**
 * Calculates prediction statistics.
 * @returns An object containing the total number of predictions.
 */
export const getPredictionStats = () => {
  if (!Array.isArray(dibocData)) {
    return { total: 0 };
  }
  return {
    total: dibocData.length,
  };
};
