export const env = {};

export const BASE_URL = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_URL : process.env.NEXT_PUBLIC_DEV_URL;

export const REVALIDATION_TOKEN = process.env.NEXT_PUBLIC_REVALIDATION_TOKEN;
export const WEBHOOK_SECRET = process.env.NEXT_PUBLIC_WEBHOOK_SECRET || "";
