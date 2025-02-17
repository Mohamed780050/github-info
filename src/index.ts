#!/usr/bin/env node
import chalk from "chalk";
import { Axios } from "./lib/axios.js";
import { events } from "./lib/events.js";
import Table from "cli-table3";
import { dataInterface, types } from "interface.js";
import { fetchUserData } from "./lib/fetchUserData.js";
const username = process.argv.slice(2)[0];
if (!username) {
  console.log(chalk.red("Need a username"));
  process.exit(1);
}
await fetchUserData(username)
