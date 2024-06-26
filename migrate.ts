import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import "dotenv/config";

const databaseUrl = drizzle(
  postgres(
    `${process.env.NEON_DATABASE_URL}`,

    { ssl: "require", max: 1 },
  ),
);

const main = async () => {
  try {
    await migrate(databaseUrl, { migrationsFolder: "drizzle" });

    console.log("Migration complete");
  } catch (error) {
    console.log(error);
  }

  process.exit(0);
};

main();
