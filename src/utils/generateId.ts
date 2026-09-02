let counter = 0;

/**
 * Generates a stable-enough unique id for client-side-only list items
 * (chat messages, toasts) created during a session.
 */
export function generateId(prefix: string): string {
  counter += 1;
  return `${prefix}-${Date.now()}-${counter}`;
}
