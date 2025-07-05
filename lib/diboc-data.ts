import dibocDataRaw from './data111-888.json';

export interface DibocPrediction {
  id: string;
  name: string;
  description: string;
  meaning: string;
  details: string;
}

// Cast the imported data to the correct type
const dibocData: DibocPrediction[] = dibocDataRaw as DibocPrediction[];

/**
 * Retrieves a prediction by its ID.
 * @param id The ID of the prediction to retrieve.
 * @returns A DibocPrediction object or null if not found.
 */
export const getPredictionById = (id: string): DibocPrediction | null => {
  if (!Array.isArray(dibocData)) {
    console.error('Diboc data is not an array:', dibocData);
    return null;
  }
  
  const prediction = dibocData.find((item) => item.id === id);
  return prediction || null;
};

/**
 * Checks if a prediction exists for the given ID.
 * @param id The ID to check.
 * @returns True if prediction exists, false otherwise.
 */
export const hasPrediction = (id: string): boolean => {
  return getPredictionById(id) !== null;
};

/**
 * Calculates prediction statistics.
 * @returns An object containing statistics about the predictions.
 */
export const getPredictionStats = () => {
  if (!Array.isArray(dibocData)) {
    return { 
      total: 0, 
      totalInFile: 0, 
      validPercentage: 0 
    };
  }
  
  const total = dibocData.length;
  const validPredictions = dibocData.filter(item => 
    item && 
    typeof item.id === 'string' && 
    typeof item.name === 'string' && 
    typeof item.details === 'string'
  ).length;
  
  return {
    total: validPredictions,
    totalInFile: total,
    validPercentage: total > 0 ? Math.round((validPredictions / total) * 100) : 0
  };
};

/**
 * Gets all predictions.
 * @returns Array of all DibocPrediction objects.
 */
export const getAllPredictions = (): DibocPrediction[] => {
  if (!Array.isArray(dibocData)) {
    return [];
  }
  return dibocData;
};