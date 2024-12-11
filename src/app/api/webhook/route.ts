import { Webhook, WebhookRequiredHeaders } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { findOrCreateBy } from "@/lib/db/userModel";
import { WEBHOOK_SECRET } from "@/lib/constants";

async function validateSvixHeaders(req: Request): Promise<WebhookEvent | Error> {
    const bodyJson = await req.json();
    const payloadString = JSON.stringify(bodyJson);

    const svixHeaders: WebhookRequiredHeaders = {
        "svix-id": req.headers.get("svix-id")!,
        "svix-timestamp": req.headers.get("svix-timestamp")!,
        "svix-signature": req.headers.get("svix-signature")!,
    };

    const wh = new Webhook(WEBHOOK_SECRET);
    let payload: WebhookEvent;

    try {
        payload = wh.verify(payloadString, svixHeaders) as WebhookEvent;

        return payload;
    } catch (err) {
        return new Error("Error verifying webhook");
    }
}
// ---------------------------------------------------------------

export async function POST(req: Request) {
    const contentType = req.headers.get("content-type");

    if (!contentType || !contentType.includes("application/json")) {
        return new Response("Error: Invalid content type. Expected JSON.", {
            status: 400,
        });
    }
    const payload = await validateSvixHeaders(req);
    if (payload instanceof Error) {
        return new Response("", { status: 500 });
    }

    if (payload.type === "user.created" || payload.type === "user.updated") {
        const { email_addresses, created_at, primary_email_address_id } = payload.data;

        const emailObject = email_addresses.find((_email) => _email.id === primary_email_address_id);

        if (!emailObject) {
            return new Response("email not found on user created event", { status: 500 });
        }

        await findOrCreateBy(emailObject.email_address, created_at);
    }

    return new Response("", { status: 200 });
}
