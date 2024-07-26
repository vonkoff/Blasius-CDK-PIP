import { CronJob } from "cron";
import { Mutex } from "async-mutex";
import "dotenv/config";
const mutex = new Mutex();

const PORT = process.env.PORT;

// URLs for the 5-minute cron job
const urlsForFiveMinutes: string[] = [
  `http://localhost:${PORT}/cdk/dealers-vehicles`,
  `http://localhost:${PORT}/cdk/dealers-vehicles`,
];

// URLs for the 9 PM cron job
const urlsForNinePM: string[] = [
  `http://localhost:${PORT}/cdk/dealers-vehicles`,
  `http://localhost:${PORT}/cdk/dealers-vehicles`,
];

// Function to send requests sequentially
async function sendRequestsSequentially(urls: string[]) {
  await mutex.runExclusive(async () => {
    console.log("Acquired mutex lock, starting requests...");
    try {
      for (const url of urls) {
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "Hello from Bun!" }),
          });
          if (response.ok) {
            const body = await response.json();
            console.log(`Request to ${url} succeeded with response:`, body);
          } else {
            console.error(
              `Request to ${url} failed with status: ${response.status}`,
            );
          }
        } catch (error) {
          console.error(
            `Request to ${url} failed with error: ${error.message}`,
          );
        }
      }
    } finally {
      console.log("Releasing mutex lock, requests completed.");
    }
  });
}

// Cron job to run every 5 minutes from 5 AM to 8 PM
const jobEveryFiveMinutes = new CronJob("*/5 5-20 * * *", async () => {
  console.log("Running 5-minute cron job");
  await sendRequestsSequentially(urlsForFiveMinutes);
});

// Cron job to run once at 9 PM
const jobAtNinePM = new CronJob("0 21 * * *", async () => {
  console.log("Running 9 PM cron job");
  await sendRequestsSequentially(urlsForNinePM);
});

// Start the cron jobs
jobEveryFiveMinutes.start();
jobAtNinePM.start();

console.log("Cron jobs started");
