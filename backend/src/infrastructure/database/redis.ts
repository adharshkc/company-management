import { createClient, RedisClientType } from "redis";

let client: RedisClientType;

export async function initializeRedisConnection(): Promise<void> {
    client = createClient();
    client.on('error', err => console.log("Redis client error", err));
    await client.connect();
}

export function getRedisClient(): RedisClientType {
    if (!client) {
        throw new Error("Redis client not initialized. Call initializeRedisConnection first.");
    }
    return client;
}