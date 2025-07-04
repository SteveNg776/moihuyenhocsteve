export interface SolarTerm {
  id: number;
  name: string;
  chineseName: string;
  description: string;
  season: 'spring' | 'summer' | 'autumn' | 'winter';
  order: number;
}

export const SOLAR_TERMS: SolarTerm[] = [
  { id: 1, name: 'Lập Xuân', chineseName: '立春', description: 'Bắt đầu mùa xuân', season: 'spring', order: 1 },
  { id: 2, name: 'Vũ Thủy', chineseName: '雨水', description: 'Mưa nước', season: 'spring', order: 2 },
  { id: 3, name: 'Kinh Trập', chineseName: '惊蛰', description: 'Côn trùng thức giấc', season: 'spring', order: 3 },
  { id: 4, name: 'Xuân Phân', chineseName: '春分', description: 'Phân xuân', season: 'spring', order: 4 },
  { id: 5, name: 'Thanh Minh', chineseName: '清明', description: 'Trong sáng', season: 'spring', order: 5 },
  { id: 6, name: 'Cốc Vũ', chineseName: '谷雨', description: 'Mưa lúa', season: 'spring', order: 6 },
  { id: 7, name: 'Lập Hạ', chineseName: '立夏', description: 'Bắt đầu mùa hè', season: 'summer', order: 7 },
  { id: 8, name: 'Tiểu Mãn', chineseName: '小满', description: 'Lúa nhỏ đầy', season: 'summer', order: 8 },
  { id: 9, name: 'Mang Chủng', chineseName: '芒种', description: 'Gieo trồng lúa có râu', season: 'summer', order: 9 },
  { id: 10, name: 'Hạ Chí', chineseName: '夏至', description: 'Chí hạ', season: 'summer', order: 10 },
  { id: 11, name: 'Tiểu Thử', chineseName: '小暑', description: 'Nóng nhỏ', season: 'summer', order: 11 },
  { id: 12, name: 'Đại Thử', chineseName: '大暑', description: 'Nóng lớn', season: 'summer', order: 12 },
  { id: 13, name: 'Lập Thu', chineseName: '立秋', description: 'Bắt đầu mùa thu', season: 'autumn', order: 13 },
  { id: 14, name: 'Xử Thử', chineseName: '处暑', description: 'Hết nóng', season: 'autumn', order: 14 },
  { id: 15, name: 'Bạch Lộ', chineseName: '白露', description: 'Sương trắng', season: 'autumn', order: 15 },
  { id: 16, name: 'Thu Phân', chineseName: '秋分', description: 'Phân thu', season: 'autumn', order: 16 },
  { id: 17, name: 'Hàn Lộ', chineseName: '寒露', description: 'Sương lạnh', season: 'autumn', order: 17 },
  { id: 18, name: 'Sương Giáng', chineseName: '霜降', description: 'Sương xuống', season: 'autumn', order: 18 },
  { id: 19, name: 'Lập Đông', chineseName: '立冬', description: 'Bắt đầu mùa đông', season: 'winter', order: 19 },
  { id: 20, name: 'Tiểu Tuyết', chineseName: '小雪', description: 'Tuyết nhỏ', season: 'winter', order: 20 },
  { id: 21, name: 'Đại Tuyết', chineseName: '大雪', description: 'Tuyết lớn', season: 'winter', order: 21 },
  { id: 22, name: 'Đông Chí', chineseName: '冬至', description: 'Chí đông', season: 'winter', order: 22 },
  { id: 23, name: 'Tiểu Hàn', chineseName: '小寒', description: 'Lạnh nhỏ', season: 'winter', order: 23 },
  { id: 24, name: 'Đại Hàn', chineseName: '大寒', description: 'Lạnh lớn', season: 'winter', order: 24 }
];

export interface SolarTermPeriod {
  solarTerm: SolarTerm;
  startDate: Date;
  endDate: Date;
  isCurrentPeriod: boolean;
}

// Approximate dates for solar terms (these are rough estimates and should be calculated more precisely)
const SOLAR_TERM_DATES = [
  { month: 2, day: 4 },   // Lập Xuân
  { month: 2, day: 19 },  // Vũ Thủy
  { month: 3, day: 6 },   // Kinh Trập
  { month: 3, day: 21 },  // Xuân Phân
  { month: 4, day: 5 },   // Thanh Minh
  { month: 4, day: 20 },  // Cốc Vũ
  { month: 5, day: 6 },   // Lập Hạ
  { month: 5, day: 21 },  // Tiểu Mãn
  { month: 6, day: 6 },   // Mang Chủng
  { month: 6, day: 21 },  // Hạ Chí
  { month: 7, day: 7 },   // Tiểu Thử
  { month: 7, day: 23 },  // Đại Thử
  { month: 8, day: 8 },   // Lập Thu
  { month: 8, day: 23 },  // Xử Thử
  { month: 9, day: 8 },   // Bạch Lộ
  { month: 9, day: 23 },  // Thu Phân
  { month: 10, day: 8 },  // Hàn Lộ
  { month: 10, day: 23 }, // Sương Giáng
  { month: 11, day: 8 },  // Lập Đông
  { month: 11, day: 22 }, // Tiểu Tuyết
  { month: 12, day: 7 },  // Đại Tuyết
  { month: 12, day: 22 }, // Đông Chí
  { month: 1, day: 6 },   // Tiểu Hàn
  { month: 1, day: 20 }   // Đại Hàn
];

export function getCurrentSolarTerm(date: Date): SolarTermPeriod | null {
  try {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    // Find current solar term
    for (let i = 0; i < SOLAR_TERMS.length; i++) {
      const termDate = SOLAR_TERM_DATES[i];
      const nextTermDate = SOLAR_TERM_DATES[(i + 1) % SOLAR_TERMS.length];
      
      // Create dates for current and next solar terms
      let startDate = new Date(year, termDate.month - 1, termDate.day);
      let endDate = new Date(year, nextTermDate.month - 1, nextTermDate.day);
      
      // Handle year boundary (Đại Hàn to Lập Xuân)
      if (i === SOLAR_TERMS.length - 1) {
        endDate = new Date(year + 1, nextTermDate.month - 1, nextTermDate.day);
      }
      
      // Handle Tiểu Hàn and Đại Hàn (they belong to the previous year's cycle)
      if (termDate.month === 1) {
        startDate = new Date(year, termDate.month - 1, termDate.day);
        if (i === SOLAR_TERMS.length - 2) { // Tiểu Hàn
          endDate = new Date(year, nextTermDate.month - 1, nextTermDate.day);
        } else if (i === SOLAR_TERMS.length - 1) { // Đại Hàn
          endDate = new Date(year, SOLAR_TERM_DATES[0].month - 1, SOLAR_TERM_DATES[0].day);
        }
      }
      
      // Check if current date falls within this solar term period
      if (date >= startDate && date < endDate) {
        return {
          solarTerm: SOLAR_TERMS[i],
          startDate,
          endDate,
          isCurrentPeriod: true
        };
      }
    }
    
    return null;
  } catch (error) {
    console.error('Error calculating current solar term:', error);
    return null;
  }
}

export function getAllSolarTermsForYear(year: number): SolarTermPeriod[] {
  try {
    const solarTermPeriods: SolarTermPeriod[] = [];
    
    for (let i = 0; i < SOLAR_TERMS.length; i++) {
      const termDate = SOLAR_TERM_DATES[i];
      const nextTermDate = SOLAR_TERM_DATES[(i + 1) % SOLAR_TERMS.length];
      
      let startDate = new Date(year, termDate.month - 1, termDate.day);
      let endDate = new Date(year, nextTermDate.month - 1, nextTermDate.day);
      
      // Handle year boundary
      if (i === SOLAR_TERMS.length - 1) {
        endDate = new Date(year + 1, nextTermDate.month - 1, nextTermDate.day);
      }
      
      // Handle Tiểu Hàn and Đại Hàn
      if (termDate.month === 1) {
        startDate = new Date(year, termDate.month - 1, termDate.day);
        if (i === SOLAR_TERMS.length - 2) {
          endDate = new Date(year, nextTermDate.month - 1, nextTermDate.day);
        } else if (i === SOLAR_TERMS.length - 1) {
          endDate = new Date(year, SOLAR_TERM_DATES[0].month - 1, SOLAR_TERM_DATES[0].day);
        }
      }
      
      solarTermPeriods.push({
        solarTerm: SOLAR_TERMS[i],
        startDate,
        endDate,
        isCurrentPeriod: false
      });
    }
    
    return solarTermPeriods;
  } catch (error) {
    console.error('Error getting solar terms for year:', error);
    return [];
  }
}

export function getSolarTermByName(name: string): SolarTerm | undefined {
  return SOLAR_TERMS.find(term => term.name === name || term.chineseName === name);
}

export function getSolarTermsBySeasonName(season: 'spring' | 'summer' | 'autumn' | 'winter'): SolarTerm[] {
  return SOLAR_TERMS.filter(term => term.season === season);
}

export function formatSolarTermPeriod(period: SolarTermPeriod): string {
  const startStr = period.startDate.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  
  const endStr = period.endDate.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  
  return `${startStr} - ${endStr}`;
}

export const SEASON_COLORS = {
  spring: 'bg-green-100 text-green-800 border-green-300',
  summer: 'bg-red-100 text-red-800 border-red-300',
  autumn: 'bg-orange-100 text-orange-800 border-orange-300',
  winter: 'bg-blue-100 text-blue-800 border-blue-300'
};

export const SEASON_NAMES = {
  spring: 'Mùa Xuân',
  summer: 'Mùa Hè',
  autumn: 'Mùa Thu',
  winter: 'Mùa Đông'
};