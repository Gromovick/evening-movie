import { CacheController } from "../config/cache.js";

export function cacheMiddleware(req, res, next, ttl) {

    const key = req.url;

    if (CacheController.hasKey(key)) {
        const data = CacheController.getCache(key);
        console.log("======FROM CACHE========");
        return res.json(data);
    }
    const originalSend = res.json;
    res.json = (body) => {
        CacheController.cache(key, body, ttl);
        console.log(`[CACHE SET] ${key} (TTL: ${ttl}s)`);
        return originalSend.call(res, body);
    };
    next();
}