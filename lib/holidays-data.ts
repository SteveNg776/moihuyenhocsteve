export interface Holiday {
  id: string;
  name: string;
  date?: { month: number; day: number }; // Solar calendar date
  lunarDate?: { month: number; day: number; isLeap?: boolean }; // Lunar calendar date
  type: 'official' | 'traditional' | 'international' | 'cultural' | 'religious' | 'memorial';
  description: string;
  isRecurring: boolean;
  country?: string;
  significance?: 'high' | 'medium' | 'low';
  activities?: string[];
}

// Comprehensive holidays data for Vietnam and USA
export const HOLIDAYS_DATA: Holiday[] = [
  // Vietnamese Traditional Holidays (Lunar Calendar)
  {
    id: 'tet-nguyen-dan',
    name: 'Tết Nguyên Đán',
    lunarDate: { month: 1, day: 1 },
    type: 'traditional',
    description: 'Tết cổ truyền Việt Nam, ngày quan trọng nhất trong năm',
    isRecurring: true,
    country: 'VN',
    significance: 'high',
    activities: ['Thờ cúng tổ tiên', 'Đoàn viên gia đình', 'Lì xì', 'Chúc Tết']
  },
  {
    id: 'tet-nguyen-tieu',
    name: 'Tết Nguyên Tiêu',
    lunarDate: { month: 1, day: 15 },
    type: 'traditional',
    description: 'Rằm tháng Giêng, kết thúc Tết Nguyên Đán',
    isRecurring: true,
    country: 'VN',
    significance: 'medium'
  },
  {
    id: 'tet-han-thuc',
    name: 'Tết Hàn Thực',
    lunarDate: { month: 3, day: 3 },
    type: 'traditional',
    description: 'Tết cúng tổ tiên, ăn bánh trôi bánh chay',
    isRecurring: true,
    country: 'VN',
    significance: 'medium'
  },
  {
    id: 'tet-doan-ngo',
    name: 'Tết Đoan Ngọ',
    lunarDate: { month: 5, day: 5 },
    type: 'traditional',
    description: 'Tết diệt sâu bọ, ăn rượu nếp, trái cây',
    isRecurring: true,
    country: 'VN',
    significance: 'medium'
  },
  {
    id: 'tet-trung-nguyen',
    name: 'Tết Trung Nguyên',
    lunarDate: { month: 7, day: 15 },
    type: 'traditional',
    description: 'Lễ Vu Lan báo hiếu, cúng cô hồn',
    isRecurring: true,
    country: 'VN',
    significance: 'high'
  },
  {
    id: 'tet-trung-thu',
    name: 'Tết Trung Thu',
    lunarDate: { month: 8, day: 15 },
    type: 'traditional',
    description: 'Tết thiếu nhi, ngắm trăng, ăn bánh trung thu',
    isRecurring: true,
    country: 'VN',
    significance: 'high',
    activities: ['Ngắm trăng', 'Ăn bánh trung thu', 'Múa lân', 'Đèn lồng']
  },

  // Vietnamese Official Holidays (Solar Calendar)
  {
    id: 'new-year-day',
    name: 'Tết Dương Lịch',
    date: { month: 1, day: 1 },
    type: 'official',
    description: 'Ngày đầu năm mới dương lịch',
    isRecurring: true,
    country: 'VN',
    significance: 'medium'
  },
  {
    id: 'vietnam-liberation-day',
    name: 'Ngày Giải Phóng Miền Nam',
    date: { month: 4, day: 30 },
    type: 'official',
    description: 'Ngày thống nhất đất nước (30/4/1975)',
    isRecurring: true,
    country: 'VN',
    significance: 'high'
  },
  {
    id: 'international-labor-day',
    name: 'Ngày Quốc Tế Lao Động',
    date: { month: 5, day: 1 },
    type: 'official',
    description: 'Ngày Quốc tế Lao động',
    isRecurring: true,
    country: 'VN',
    significance: 'medium'
  },
  {
    id: 'vietnam-independence-day',
    name: 'Ngày Quốc Khánh',
    date: { month: 9, day: 2 },
    type: 'official',
    description: 'Ngày Độc lập của Việt Nam (2/9/1945)',
    isRecurring: true,
    country: 'VN',
    significance: 'high'
  },
  {
    id: 'hung-kings-day',
    name: 'Giỗ Tổ Hùng Vương',
    lunarDate: { month: 3, day: 10 },
    type: 'official',
    description: 'Ngày giỗ Tổ Hùng Vương',
    isRecurring: true,
    country: 'VN',
    significance: 'high'
  },

  // USA Major Holidays
  {
    id: 'usa-new-year',
    name: 'New Year\'s Day (USA)',
    date: { month: 1, day: 1 },
    type: 'official',
    description: 'Ngày đầu năm mới tại Hoa Kỳ',
    isRecurring: true,
    country: 'US',
    significance: 'high'
  },
  {
    id: 'usa-independence-day',
    name: 'Independence Day (USA)',
    date: { month: 7, day: 4 },
    type: 'official',
    description: 'Ngày Độc lập Hoa Kỳ (4/7/1776)',
    isRecurring: true,
    country: 'US',
    significance: 'high'
  },
  {
    id: 'usa-thanksgiving',
    name: 'Thanksgiving (USA)',
    date: { month: 11, day: 28 }, // Approximate - 4th Thursday of November
    type: 'official',
    description: 'Lễ Tạ ơn Hoa Kỳ',
    isRecurring: true,
    country: 'US',
    significance: 'high'
  },
  {
    id: 'usa-christmas',
    name: 'Christmas (USA)',
    date: { month: 12, day: 25 },
    type: 'religious',
    description: 'Lễ Giáng Sinh',
    isRecurring: true,
    country: 'US',
    significance: 'high'
  },
  {
    id: 'usa-memorial-day',
    name: 'Memorial Day (USA)',
    date: { month: 5, day: 27 }, // Approximate - last Monday of May
    type: 'memorial',
    description: 'Ngày tưởng niệm các anh hùng liệt sĩ Hoa Kỳ',
    isRecurring: true,
    country: 'US',
    significance: 'high'
  },
  {
    id: 'usa-labor-day',
    name: 'Labor Day (USA)',
    date: { month: 9, day: 2 }, // Approximate - first Monday of September
    type: 'official',
    description: 'Ngày Lao động Hoa Kỳ',
    isRecurring: true,
    country: 'US',
    significance: 'medium'
  },

  // International Holidays
  {
    id: 'international-womens-day',
    name: 'Ngày Quốc Tế Phụ Nữ',
    date: { month: 3, day: 8 },
    type: 'international',
    description: 'Ngày Quốc tế Phụ nữ 8/3',
    isRecurring: true,
    significance: 'medium'
  },
  {
    id: 'valentines-day',
    name: 'Ngày Lễ Tình Nhân',
    date: { month: 2, day: 14 },
    type: 'cultural',
    description: 'Ngày Valentine',
    isRecurring: true,
    significance: 'medium'
  },
  {
    id: 'international-childrens-day',
    name: 'Ngày Quốc Tế Thiếu Nhi',
    date: { month: 6, day: 1 },
    type: 'international',
    description: 'Ngày Quốc tế Thiếu nhi 1/6',
    isRecurring: true,
    country: 'VN',
    significance: 'medium'
  }
];

export function getHolidaysForDate(date: Date): Holiday[] {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  // Get solar calendar holidays
  const solarHolidays = HOLIDAYS_DATA.filter(holiday => {
    if (!holiday.date) return false;
    return holiday.date.month === month && holiday.date.day === day;
  });
  
  return solarHolidays;
}

export function getHolidaysByType(type: Holiday['type']): Holiday[] {
  return HOLIDAYS_DATA.filter(holiday => holiday.type === type);
}

export function getHolidaysByMonth(month: number): Holiday[] {
  return HOLIDAYS_DATA.filter(holiday => {
    if (holiday.date) {
      return holiday.date.month === month;
    }
    if (holiday.lunarDate) {
      return holiday.lunarDate.month === month;
    }
    return false;
  });
}

export function getHolidaysBySignificance(significance: Holiday['significance']): Holiday[] {
  return HOLIDAYS_DATA.filter(holiday => holiday.significance === significance);
}

export function getHolidaysByCountry(country: string): Holiday[] {
  return HOLIDAYS_DATA.filter(holiday => holiday.country === country);
}

export function searchHolidays(query: string): Holiday[] {
  const lowercaseQuery = query.toLowerCase();
  return HOLIDAYS_DATA.filter(holiday => 
    holiday.name.toLowerCase().includes(lowercaseQuery) ||
    holiday.description.toLowerCase().includes(lowercaseQuery)
  );
}

export function getUpcomingHolidays(fromDate: Date, limit: number = 10): Holiday[] {
  const upcoming: Array<Holiday & { nextDate: Date; daysUntil: number }> = [];
  
  HOLIDAYS_DATA.forEach(holiday => {
    if (holiday.date) {
      const daysUntil = calculateDaysUntil(fromDate, holiday.date);
      if (daysUntil >= 0) {
        const currentYear = fromDate.getFullYear();
        const nextDate = new Date(currentYear, holiday.date.month - 1, holiday.date.day);
        if (nextDate < fromDate) {
          nextDate.setFullYear(currentYear + 1);
        }
        upcoming.push({ ...holiday, nextDate, daysUntil });
      }
    }
  });
  
  return upcoming
    .sort((a, b) => a.daysUntil - b.daysUntil)
    .slice(0, limit);
}

function calculateDaysUntil(fromDate: Date, holidayDate: { month: number; day: number }): number {
  const currentYear = fromDate.getFullYear();
  let targetDate = new Date(currentYear, holidayDate.month - 1, holidayDate.day);
  
  // If the holiday has passed this year, check next year
  if (targetDate < fromDate) {
    targetDate = new Date(currentYear + 1, holidayDate.month - 1, holidayDate.day);
  }
  
  const diffTime = targetDate.getTime() - fromDate.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export const HOLIDAY_TYPE_COLORS = {
  official: 'bg-red-100 text-red-800 border-red-300',
  traditional: 'bg-green-100 text-green-800 border-green-300',
  international: 'bg-blue-100 text-blue-800 border-blue-300',
  cultural: 'bg-purple-100 text-purple-800 border-purple-300',
  religious: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  memorial: 'bg-gray-100 text-gray-800 border-gray-300'
};

export const HOLIDAY_TYPE_NAMES = {
  official: 'Lễ chính thức',
  traditional: 'Lễ truyền thống',
  international: 'Lễ quốc tế',
  cultural: 'Sự kiện văn hóa',
  religious: 'Lễ tôn giáo',
  memorial: 'Ngày kỷ niệm'
};

export const HOLIDAY_SIGNIFICANCE_COLORS = {
  high: 'bg-red-500',
  medium: 'bg-yellow-500',
  low: 'bg-green-500'
};

export const HOLIDAY_SIGNIFICANCE_NAMES = {
  high: 'Quan trọng cao',
  medium: 'Quan trọng trung bình',
  low: 'Quan trọng thấp'
};

// Helper function to get holiday statistics
export function getHolidayStats() {
  const total = HOLIDAYS_DATA.length;
  const byType = HOLIDAYS_DATA.reduce((acc, holiday) => {
    acc[holiday.type] = (acc[holiday.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const bySignificance = HOLIDAYS_DATA.reduce((acc, holiday) => {
    if (holiday.significance) {
      acc[holiday.significance] = (acc[holiday.significance] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);
  
  const vietnameseHolidays = HOLIDAYS_DATA.filter(h => h.country === 'VN').length;
  const usHolidays = HOLIDAYS_DATA.filter(h => h.country === 'US').length;
  
  return {
    total,
    byType,
    bySignificance,
    vietnameseHolidays,
    usHolidays,
    internationalHolidays: total - vietnameseHolidays - usHolidays
  };
}