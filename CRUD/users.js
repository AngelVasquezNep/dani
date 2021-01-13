const fs = require("fs");
const utils = require("./utils.js");

const data = require("./data.json");

function save(users) {
  fs.writeFile(
    "./data.json",
    JSON.stringify({
      lastUpdate: new Date().toString(),
      users,
    }),
    (err) => (err ? console.error(err) : console.log("Users saved"))
  );
}

const create = (user) => {
  const users = [
    ...data.users,
    {
      ...user,
      id: utils.uuid(),
    },
  ];

  save(users);

  return users;
};

const update = (user) => {
  const users = data.users.map(({ id, ...rest }) =>
    id === user.id ? user : { id, ...rest }
  );

  save(users);

  return users;
};

const deleteUser = (userId) => {
  const users = data.users.filter(({ id }) => id !== userId);
  save(users);

  return users;
};

const all = () => {
  return data.users;
};

module.exports = {
  create,
  update,
  all,
  delete: deleteUser,
};
