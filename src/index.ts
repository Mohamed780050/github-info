#!/usr/bin/env node
import chalk from "chalk";
import { Axios } from "./lib/axios.js";
import { events } from "./lib/events.js";
import { dataInterface } from "interface.js";
const username = process.argv.slice(2);
if (!username.length) {
  console.log(chalk.red("Need a username"));
} else {
  const response = await Axios.get(`/users/${username}/events`);
  const myObject = {
    PushEvent: 0,
    CreateEvent: 0,
    DeleteEvent: 0,
    ForkEvent: 0,
    PublicEvent: 0,
    WatchEvent: 0,
  };
  const data: dataInterface[] = response.data;
  data.forEach((element) => {
    myObject[element.type] = myObject[element.type] + 1;
  });
  console.log(myObject)
}
