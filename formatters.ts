// Format number with commas
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num);
};

// Format currency with 2 decimal places for smaller numbers, and 0 for larger
export const formatCurrency = (num: number): string => {
  if (num >= 1000) {
    return new Intl.NumberFormat('en-US', { 
      minimumFractionDigits: 0,
      maximumFractionDigits: 0 
    }).format(num);
  } else if (num >= 1) {
    return new Intl.NumberFormat('en-US', { 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    }).format(num);
  } else {
    return new Intl.NumberFormat('en-US', { 
      minimumFractionDigits: 4,
      maximumFractionDigits: 6 
    }).format(num);
  }
};

// Format percentage with 2 decimal places
export const formatPercentage = (num: number): string => {
  return new Intl.NumberFormat('en-US', { 
    minimumFractionDigits: 2,
    maximumFractionDigits: 2 
  }).format(num);
};