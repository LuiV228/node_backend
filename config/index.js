import { createPool } from "mysql";
import { config } from "dotenv";
config();
let connection = createPool({
  host: process.env.MYSQL_ADDON_HOST,
  database: process.env.MYSQL_ADDON_DB,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  multipleStatements: true,
  connectionLimit: 30,
});
export { connection };
