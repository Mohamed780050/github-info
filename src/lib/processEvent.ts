import { dataInterface, types } from "interface";
import { events } from "./events.js";
import chalk from "chalk";
import Table from "cli-table3";

export function processEvent(data: dataInterface[]) {
  const myObject: Record<types | string, number> = Object.fromEntries(
    events.map((event) => [event, 0])
  );
  data.forEach(({ type }) => {
    if (type in myObject) {
      myObject[type] += 1;
    }
  });
  const foundEvent = events.filter((item: types | string) => myObject[item]);
  if (foundEvent.length === 0) {
    console.log(chalk.yellow("No events found."));
    return;
  }
  const table = new Table({ head: ["Event", "Count"] });
  foundEvent.forEach(event => table.push([event, myObject[event]]));
  console.log(table.toString());
}
