import cron from "cron";
import https from "https";
const job = new cron.CronJob("*/14 * * * *", function () {
  https
    .get("https://genvision-26.onrender.com", (res) => {
      if (res.statusCode === 200) {
        console.log("✅ Ping successful at", new Date().toLocaleTimeString());
      } else {
        console.log("⚠️ Ping failed:", res.statusCode);
      }
    })
    .on("error", (e) => {
      console.error("❌ Ping error:", e.message);
    });
});
job.start();