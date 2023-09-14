/* eslint-disable prettier/prettier */
const K = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 9000,
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_DATABASE,
  connectionLimit: 10,
}

export default K
