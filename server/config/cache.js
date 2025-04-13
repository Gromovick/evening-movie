// import Redis from "ioredis";
// class RedisCacheClass {
//     connect() {
//         this.redis = new Redis();
//     }
//     async cache() {
//         const cached = await this.redis.set("mykey", "value");
//         console.log(cached);

//     }
// }

// export const RedisCache = new RedisCacheClass();


import NodeCache from "node-cache";

class NodeCacheClass {
    connect() {
        this.node = new NodeCache();
    }
    cache(key, obj, ttl) {
        return this.node.set(key, obj, ttl); // ttl in seconds
    }
    getCache(key) {
        return this.node.get(key)
    }
    getAndRemove(key) {
        return this.node.take(key)
    }
    deleteKey(key) {
        return this.node.delete(key)
    }
    hasKey(key) {
        return this.node.has(key)
    }
}

export const CacheController = new NodeCacheClass();