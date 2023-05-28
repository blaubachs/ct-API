import connection from "../config/connection";
import { User, Character } from "../models";

const seedData = async () => {
  console.log("Deleting all data...");
  await User.deleteMany({});
  await Character.deleteMany({});
  console.log("Data deleted...");
  console.log("===============");
  console.log("Creating users");

  const allUsers = [
    {
      username: "test",
      password: "password",
    },
    {
      username: "test2",
      password: "password",
    },
    {
      username: "test3",
      password: "password",
    },
  ];

  const createUsers = await User.create(allUsers);
  console.log(createUsers);

  console.log("===============");

  console.log("Creating Characters....");

  const allCharacters = [
    {
      name: "Bingus Time",
      description: "This is super bingus man",
      strength: 100,
      intelligence: 100,
      endurance: 100,
      charisma: 2,
      belongsTo: createUsers[0],
    },
    {
      name: "Bingus",
      description: "This is super bingus man",
      strength: 10,
      intelligence: 10,
      endurance: 10,
      charisma: 2,
      belongsTo: createUsers[0],
    },
  ];

  const createCharacters = await Character.create(allCharacters);
  await User.findOneAndUpdate(
    { _id: createUsers[0]._id },
    { $push: { characters: createCharacters[0]._id } }
  );
  await User.findOneAndUpdate(
    { _id: createUsers[0]._id },
    { $push: { characters: createCharacters[1]._id } }
  );
  console.log(createCharacters);
  console.log("===============");
  console.log("Seeds completed.");
  process.exit(0);
};

connection.once("open", () => {
  seedData();
});
