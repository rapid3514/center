

import { db } from "@/lib/db";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    const { id } = evt.data;
    const eventType = evt.type;
    console.log(
     ` Received webhook with ID ${id} and event type of ${eventType}`
    );
    console.log("Webhook payload:", evt.data);
    if (eventType === "user.created") {
      if (!evt.data.username || evt.data.username.trim() === "") {
        return new Response("Username is required", { status: 400 });
      }
      await db.user.create({
  data: {
          clerkId:evt.data.id,
          userName:evt.data.username,
          avatar: evt.data.image_url,
          fullName:` ${evt.data.first_name} ${evt.data.last_name}`,
          bio: "Bio is not provided!!!",
        },
      });
    }
    if (eventType === "user.updated") {
      await db.user.update({
        where: { clerkId: evt.data.id },
        data: {
          userName:evt.data.username || undefined,
          avatar: evt.data.image_url,
          fullName:` ${evt.data.first_name} ${evt.data.last_name}`,
          bio: "Bio is not provided!!!",
        },
      });
    }
    if (eventType === "user.deleted") {
      await db.user.delete({
        where: { clerkId: evt.data.id },
      });
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}

