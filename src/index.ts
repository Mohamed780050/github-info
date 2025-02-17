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
// const response = await Axios.get(`/users/${username}/events`);
// const myObject = {
//   PushEvent: 0,
//   CreateEvent: 0,
//   DeleteEvent: 0,
//   ForkEvent: 0,
//   PublicEvent: 0,
//   WatchEvent: 0,
//   PullRequestEvent: 0,
//   PullRequestReviewEvent: 0,
//   PullRequestReviewCommentEvent: 0,
//   IssuesEvent: 0,
//   IssueCommentEvent: 0,
//   MemberEvent: 0,
//   TeamAddEvent: 0,
//   OrgBlockEvent: 0,
//   WorkflowRunEvent: 0,
//   CheckRunEvent: 0,
//   CheckSuiteEvent: 0,
//   GollumEvent: 0,
//   SecurityAdvisoryEvent: 0,
//   DependabotAlertEvent: 0,
//   RepositoryVulnerabilityAlertEvent: 0,
//   MarketplacePurchaseEvent: 0,
//   SponsorshipEvent: 0,
// };
// const data: dataInterface[] = response.data;
// data.forEach((element) => {
//   myObject[element.type] = myObject[element.type] + 1;
// });
// const foundEvent = events.filter((item: types) => myObject[item]);
// const table = new Table({
//   head: [...foundEvent],
// });
// console.log(table.toString());
