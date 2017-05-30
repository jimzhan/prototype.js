
export default {
  db: {
    engine: process.env.DB_ENGINE,
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
  },
};
