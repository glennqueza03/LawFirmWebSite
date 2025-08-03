interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

export function rateLimit(identifier: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const windowStart = now - windowMs;

  if (!store[identifier]) {
    store[identifier] = { count: 0, resetTime: now + windowMs };
  }

  // Reset if window has passed
  if (now > store[identifier].resetTime) {
    store[identifier] = { count: 0, resetTime: now + windowMs };
  }

  // Check if limit exceeded
  if (store[identifier].count >= limit) {
    return false; // Rate limit exceeded
  }

  // Increment count
  store[identifier].count++;
  return true; // Request allowed
}

export function getClientIP(req: any): string {
  return req.headers['x-forwarded-for'] || 
         req.headers['x-real-ip'] || 
         req.connection?.remoteAddress || 
         req.socket?.remoteAddress || 
         'unknown';
}

// Daily rate limit: 1 consultation per IP per day
export function dailyRateLimit(identifier: string): boolean {
  const oneDayMs = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  return rateLimit(identifier, 1, oneDayMs);
} 