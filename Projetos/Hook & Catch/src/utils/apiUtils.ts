
/**
 * API and caching utilities
 */

// Cache configuration
type CacheConfig = {
  maxAge: number; // In milliseconds
  staleWhileRevalidate: number; // In milliseconds
};

const defaultCacheConfig: CacheConfig = {
  maxAge: 5 * 60 * 1000, // 5 minutes
  staleWhileRevalidate: 60 * 60 * 1000, // 1 hour
};

// Cache storage in memory
const memoryCache: Map<string, { data: any; timestamp: number }> = new Map();

/**
 * Fetch with cache implementation
 */
export const fetchWithCache = async <T>(
  url: string,
  options: RequestInit = {},
  cacheConfig: CacheConfig = defaultCacheConfig
): Promise<T> => {
  const cacheKey = `${url}-${JSON.stringify(options)}`;
  const cachedData = memoryCache.get(cacheKey);
  const now = Date.now();

  // If we have fresh cached data, return it immediately
  if (cachedData && now - cachedData.timestamp < cacheConfig.maxAge) {
    return cachedData.data as T;
  }

  // If we have stale data, use it but refresh in background
  if (cachedData && now - cachedData.timestamp < cacheConfig.staleWhileRevalidate) {
    // Refresh the cache in the background
    fetchAndUpdateCache<T>(url, options, cacheKey).catch(console.error);
    return cachedData.data as T;
  }

  // No cache or cache too old, fetch fresh data
  return fetchAndUpdateCache<T>(url, options, cacheKey);
};

/**
 * Internal helper to fetch and update cache
 */
const fetchAndUpdateCache = async <T>(
  url: string,
  options: RequestInit,
  cacheKey: string
): Promise<T> => {
  const response = await fetch(url, options);
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }
  
  const data = await response.json();
  memoryCache.set(cacheKey, { data, timestamp: Date.now() });
  return data as T;
};

/**
 * Clear all cached data
 */
export const clearCache = (): void => {
  memoryCache.clear();
};

/**
 * Clear specific cached item
 */
export const clearCacheItem = (url: string, options: RequestInit = {}): void => {
  const cacheKey = `${url}-${JSON.stringify(options)}`;
  memoryCache.delete(cacheKey);
};
