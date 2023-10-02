import Redis from 'ioredis';

export default async function handler(req, res) {
  const redis = new Redis(process.env.REDIS_URL);
  const count = await redis.incr('pageViews');
  res.status(200).json({ count });
}
