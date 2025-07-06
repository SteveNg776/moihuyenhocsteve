export interface MoonPhase {
  name: string;
  illumination: number; // Percentage of moon illuminated (0-100)
  phase: 'new' | 'waxing-crescent' | 'first-quarter' | 'waxing-gibbous' | 'full' | 'waning-gibbous' | 'last-quarter' | 'waning-crescent';
  emoji: string;
}

/**
 * Calculate moon phase for a given date in Vietnam timezone
 * Based on astronomical calculations
 */
export function calculateMoonPhase(date: Date): MoonPhase {
  try {
    // Convert to Vietnam timezone (UTC+7)
    const vietnamDate = new Date(date.getTime() + (7 * 60 * 60 * 1000));
    
    // Known new moon date: January 6, 2000, 18:14 UTC
    const knownNewMoon = new Date(2000, 0, 6, 18, 14, 0);
    
    // Lunar cycle is approximately 29.53059 days
    const lunarCycle = 29.53059;
    
    // Calculate days since known new moon
    const daysSinceNewMoon = (vietnamDate.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24);
    
    // Calculate current position in lunar cycle
    const cyclePosition = ((daysSinceNewMoon % lunarCycle) + lunarCycle) % lunarCycle;
    
    // Calculate illumination percentage
    let illumination: number;
    if (cyclePosition < lunarCycle / 2) {
      // Waxing phase
      illumination = (1 - Math.cos(cyclePosition * Math.PI / (lunarCycle / 2))) * 50;
    } else {
      // Waning phase
      illumination = (1 + Math.cos((cyclePosition - lunarCycle / 2) * Math.PI / (lunarCycle / 2))) * 50;
    }
    
    // Determine phase name and type
    let phase: MoonPhase['phase'];
    let name: string;
    let emoji: string;
    
    if (cyclePosition < 1) {
      phase = 'new';
      name = 'Trăng mới';
      emoji = '🌑';
    } else if (cyclePosition < 7.4) {
      phase = 'waxing-crescent';
      name = 'Trăng non';
      emoji = '🌒';
    } else if (cyclePosition < 8.4) {
      phase = 'first-quarter';
      name = 'Bán nguyệt đầu tháng';
      emoji = '🌓';
    } else if (cyclePosition < 14.8) {
      phase = 'waxing-gibbous';
      name = 'Trăng khuyết đầu tháng';
      emoji = '🌔';
    } else if (cyclePosition < 15.8) {
      phase = 'full';
      name = 'Trăng tròn';
      emoji = '🌕';
    } else if (cyclePosition < 22.1) {
      phase = 'waning-gibbous';
      name = 'Trăng khuyết cuối tháng';
      emoji = '🌖';
    } else if (cyclePosition < 23.1) {
      phase = 'last-quarter';
      name = 'Bán nguyệt cuối tháng';
      emoji = '🌗';
    } else {
      phase = 'waning-crescent';
      name = 'Trăng tàn';
      emoji = '🌘';
    }
    
    return {
      name,
      illumination: Math.round(illumination * 100) / 100,
      phase,
      emoji
    };
  } catch (error) {
    console.error('Error calculating moon phase:', error);
    // Return fallback data
    return {
      name: 'Không xác định',
      illumination: 0,
      phase: 'new',
      emoji: '🌑'
    };
  }
}

/**
 * Get moon phase description with additional details
 */
export function getMoonPhaseDescription(moonPhase: MoonPhase): string {
  const descriptions: Record<MoonPhase['phase'], string> = {
    'new': 'Mặt trăng không nhìn thấy được từ Trái Đất. Thời điểm tốt để bắt đầu những dự án mới.',
    'waxing-crescent': 'Mặt trăng bắt đầu xuất hiện dưới dạng lưỡi liềm mỏng. Thời gian tốt để lên kế hoạch và chuẩn bị.',
    'first-quarter': 'Một nửa mặt trăng được chiếu sáng. Thời điểm tốt để đưa ra quyết định và hành động.',
    'waxing-gibbous': 'Mặt trăng gần tròn nhưng chưa đầy. Thời gian để hoàn thiện và cải tiến các dự án.',
    'full': 'Mặt trăng tròn đầy, sáng nhất. Thời điểm đỉnh cao của năng lượng và cảm xúc.',
    'waning-gibbous': 'Mặt trăng bắt đầu khuyết sau khi tròn. Thời gian để chia sẻ kiến thức và kinh nghiệm.',
    'last-quarter': 'Một nửa mặt trăng được chiếu sáng (phía bên kia so với bán nguyệt đầu). Thời gian để buông bỏ và giải phóng.',
    'waning-crescent': 'Mặt trăng chỉ còn lại một lưỡi liềm mỏng. Thời gian để nghỉ ngơi và tái tạo năng lượng.'
  };
  
  return descriptions[moonPhase.phase] || 'Không có mô tả';
}

/**
 * Get the next moon phase transition
 */
export function getNextMoonPhaseTransition(date: Date): { phase: string; date: Date; daysUntil: number } {
  try {
    const currentPhase = calculateMoonPhase(date);
    const lunarCycle = 29.53059;
    
    // Calculate days until next major phase
    const phases = [
      { name: 'Trăng mới', days: 0 },
      { name: 'Bán nguyệt đầu tháng', days: 7.4 },
      { name: 'Trăng tròn', days: 14.8 },
      { name: 'Bán nguyệt cuối tháng', days: 22.1 }
    ];
    
    // Find current position in cycle
    const knownNewMoon = new Date(2000, 0, 6, 18, 14, 0);
    const daysSinceNewMoon = (date.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24);
    const cyclePosition = ((daysSinceNewMoon % lunarCycle) + lunarCycle) % lunarCycle;
    
    // Find next phase
    let nextPhase = phases[0];
    let daysUntilNext = lunarCycle - cyclePosition;
    
    for (const phase of phases) {
      const daysUntil = phase.days - cyclePosition;
      if (daysUntil > 0 && daysUntil < daysUntilNext) {
        nextPhase = phase;
        daysUntilNext = daysUntil;
      }
    }
    
    const nextDate = new Date(date.getTime() + (daysUntilNext * 24 * 60 * 60 * 1000));
    
    return {
      phase: nextPhase.name,
      date: nextDate,
      daysUntil: Math.ceil(daysUntilNext)
    };
  } catch (error) {
    console.error('Error calculating next moon phase:', error);
    return {
      phase: 'Không xác định',
      date: new Date(),
      daysUntil: 0
    };
  }
}