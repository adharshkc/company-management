"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeRedisConnection = initializeRedisConnection;
exports.getRedisClient = getRedisClient;
const redis_1 = require("redis");
let client;
async function initializeRedisConnection() {
    client = (0, redis_1.createClient)();
    client.on('error', err => console.log("Redis client error", err));
    await client.connect();
}
function getRedisClient() {
    if (!client) {
        throw new Error("Redis client not initialized. Call initializeRedisConnection first.");
    }
    return client;
}
