/**
 * Get the set of opened window numbers from localStorage
 */
export function getOpenedWindows(): Set<number> {
  const stored = localStorage.getItem('openedWindows');
  if (!stored) return new Set();

  try {
    const array = JSON.parse(stored);
    return new Set(array);
  } catch (e) {
    console.error('Failed to parse opened windows:', e);
    return new Set();
  }
}

/**
 * Mark a window as opened and save to localStorage
 * Returns the updated set of opened windows
 */
export function markWindowAsOpened(windowNumber: number): Set<number> {
  const opened = getOpenedWindows();
  opened.add(windowNumber);

  localStorage.setItem('openedWindows', JSON.stringify([...opened]));
  return opened;
}

/**
 * Clear all opened windows (for testing/reset)
 */
export function clearOpenedWindows(): void {
  localStorage.removeItem('openedWindows');
}

/**
 * Get user name from localStorage
 */
export function getUserName(): string | null {
  return localStorage.getItem('adventCalendarUser');
}

/**
 * Set user name in localStorage
 */
export function setUserName(name: string): void {
  localStorage.setItem('adventCalendarUser', name);
}

export function clearUserName(): void {
  localStorage.removeItem('adventCalendarUser');
}
