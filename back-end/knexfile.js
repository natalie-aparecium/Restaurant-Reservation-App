/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://buxrinqh:Ik4zfg8hXivpNUdkjUcbTD8t2X0yxqkG@heffalump.db.elephantsql.com/buxrinqh",
  DATABASE_URL_DEVELOPMENT = "postgres://slqbinet:XPi6eyxN4wDr_YFXqqHH-AO_RdQY5Uip@heffalump.db.elephantsql.com/slqbinet",
  DATABASE_URL_TEST = "postgres://nojcxuuw:sG2_NELMBQqhmZqoaA_epOb5mbNuwE7S@heffalump.db.elephantsql.com/nojcxuuw",
  DATABASE_URL_PREVIEW = "postgres://sxuofgvp:8qMIrQm8RdiQWvCQevm6ZqOdHmf4KFkX@heffalump.db.elephantsql.com/sxuofgvp",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
