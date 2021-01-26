const User = require("./users");
const utils = require("./utils");

const [runtime, fileNane, option, argument, ...restArguments] = process.argv;

function printHelp() {
  console.log(`
  Usage:
    node index.js [options] [arguments]
  
  Options:
    -h, --help              Help
    -c, --create            Create a new user
    -u, --update            Update a user [pass userId as argument]
    -d, --delete            Delete a user [pass userId as argument]
    -l, --list              List all users
    -f, --find              Find a user [pass userId as argument]
  `);

  process.exit(0);
}

async function getUserData() {
  const name = await utils.getInput("Name: ");
  const age = await utils.getInput("Age: ");

  return {
    name,
    age,
  };
}

if (option === "-h" || option === "--help") {
  printHelp();
}

if (option === "-c" || option === "--create") {
  getUserData().then((user) => {
    const users = User.create(user);

    console.log(users);
  });
}

if (option === "-u" || option === "--update") {
  getUserData().then((user) => {
    const users = User.update({
      id: argument,
      ...user,
    });

    console.log(users);
  });
}

if (option === "-l" || option === "--list") {
  const users = User.all();

  console.log(users);
}

if (option === "-d" || option === "--delete") {
  const users = User.delete(argument);

  console.log(users);
}

if (option === "-f" || option === "--find") {
  const user = User.find(argument);

  console.log(user || "User not found");
}
