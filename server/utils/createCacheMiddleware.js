
import { cacheMiddleware } from "../middleware/cacheMiddleware.js";


export function createCacheMiddleware(ttl = 3600) {
    return (req, res, next) => {
        cacheMiddleware(req, res, next, ttl);
    }
}