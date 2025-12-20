/**
 * Get the date for a specific window number
 * Window 1 = Dec 20, 2025
 * Window 25 = Jan 13, 2026
 */
export function getWindowDate(windowNumber: number): Date {
  // Use UTC to avoid timezone issues
  const startDate = new Date(Date.UTC(2025, 11, 20, 0, 0, 0, 0)); // December 20, 2025 00:00 UTC
  const dayOffset = windowNumber - 1;
  const windowDate = new Date(startDate);
  windowDate.setUTCDate(startDate.getUTCDate() + dayOffset);
  return windowDate;
}

/**
 * Check if a window is active (can be opened)
 * A window is active if its date <= current date
 */
export function isWindowActive(
  windowDate: Date,
  currentDate: Date,
): boolean {
  // Normalize both dates to midnight for fair comparison
  const normalizedWindowDate = new Date(windowDate);
  normalizedWindowDate.setHours(0, 0, 0, 0);

  const normalizedCurrentDate = new Date(currentDate);
  normalizedCurrentDate.setHours(0, 0, 0, 0);

  return normalizedCurrentDate >= normalizedWindowDate;
}

/**
 * Check if window date matches exactly with current date
 * Used for intense glow effect
 */
export function isExactDateMatch(
  windowDate: Date,
  currentDate: Date,
): boolean {
  // Convert window date from UTC to Moscow time for comparison
  const moscowWindowDate = new Date(windowDate);
  moscowWindowDate.setHours(moscowWindowDate.getHours() + 3);
  
  const normalizedWindowDate = new Date(moscowWindowDate);
  normalizedWindowDate.setHours(0, 0, 0, 0);

  const normalizedCurrentDate = new Date(currentDate);
  normalizedCurrentDate.setHours(0, 0, 0, 0);

  return (
    normalizedWindowDate.getTime() ===
    normalizedCurrentDate.getTime()
  );
}

/**
 * Format date for display
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}