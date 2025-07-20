import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // Download
    await step.sleep("wait-a-moment", "30s");

    // Transcript
    await step.sleep("wait-a-moment", "10s");

    // Summary
    await step.sleep("wait-a-moment", "5s");
    return { message: `Hello ${event.data.email}!` };
  }
);
