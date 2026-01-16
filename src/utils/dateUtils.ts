/**
 * Get the date for a specific window number
 * Window 1 = Dec 20, 2025 (Moscow time)
 * Window 25 = Jan 13, 2026 (Moscow time)
 */
export function getWindowDate(windowNumber: number): Date {
  // Moscow is UTC+3, so Dec 20 00:00 MSK = Dec 19 21:00 UTC
  const startDate = new Date(Date.UTC(2025, 11, 19, 21, 0, 0, 0)); // Dec 19, 21:00 UTC = Dec 20, 00:00 MSK
  const dayOffset = windowNumber;
  const windowDate = new Date(startDate.getTime() + dayOffset * 24 * 60 * 60 * 1000);
  return windowDate;
}

/**
 * Check if a window is active (can be opened)
 * A window is active if its date <= current date
 */
export function isWindowActive(windowDate: Date, currentDate: Date): boolean {
  // Compare timestamps directly - both should be in the same timezone
  return currentDate.getTime() >= windowDate.getTime();
}

/**
 * Check if window date matches exactly with current date
 * Used for intense glow effect
 */
export function isExactDateMatch(windowDate: Date, currentDate: Date): boolean {
  // Normalize both to UTC midnight
  const normalizedWindowDate = new Date(windowDate);
  normalizedWindowDate.setUTCHours(0, 0, 0, 0);

  const normalizedCurrentDate = new Date(currentDate);
  normalizedCurrentDate.setUTCHours(0, 0, 0, 0);

  return normalizedWindowDate.getTime() === normalizedCurrentDate.getTime();
}

/**
 * Format date for display
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
