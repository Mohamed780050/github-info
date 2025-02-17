import { Axios } from "./axios.js";
import { AxiosError } from "axios";
import { processEvent } from "./processEvent.js";
import chalk from "chalk";
export async function fetchUserData(username: string) {
  try {
    const response = await Axios.get(`/users/${username}/events`);
    processEvent(response.data);
  } catch (err: any) {
    const error: AxiosError = err;
    switch (error.status) {
      case 404:
        console.log(chalk.red("User not found"));
        break;
      default:
        console.log(chalk.red("There is a problem"));
    }
  }
}
