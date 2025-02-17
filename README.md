# 🚀 GitHub Info CLI

A simple command-line tool that fetches and displays GitHub user events in a table format.

## 📦 Installation

You can install the CLI tool globally using npm:

```sh
npm install -g github-info-cli
```

## 🛠️ Usage

Run the command with a GitHub username:

```sh
githubInfo <username>
```

### 📌 Example

```sh
githubInfo octocat
```

If the user exists, their GitHub events will be displayed in a table format using `cli-table3`.

## ⚠️ Error Handling

- If no username is provided, the tool will display an error message in red using `chalk`.
- If the specified username does not exist, an error message will also be shown in red.

## 📚 Dependencies

- [🎨 chalk](https://www.npmjs.com/package/chalk) - Used to display colored messages.
- [📊 cli-table3](https://www.npmjs.com/package/cli-table3) - Used to format the output in a table.
- [🔗 axios](https://www.npmjs.com/package/axios) - Used to fetch data from GitHub API.

## 📖 Resources

Made from [roadmap](https://roadmap.sh/projects/github-user-activity).

## 🤝 Contributing

Feel free to fork the repository and submit a pull request with improvements.

## 📝 License

This project is licensed under the ISC License.

