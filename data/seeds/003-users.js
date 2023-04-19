/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const userData = [
  {
    userId: 1977,
    username: "Oyku",
    email: "oyku@gmail.com",
    password: "$2y$08$zajLopJqyZht7HWUwekXnu1srZqRkfYWE9FCQXJE00llb9YFazBSu", //1977
    roleId: 1,
  },
  {
    userId: 1987,
    username: "Cihat",
    email: "cihat@gmail.com",
    password: "$2y$08$fiIGKXDDLheePNNaU0z26eo.QwJSAD60ras6Ix3gqhBfCTsC00U1W", //1987
    roleId: 1,
  },
  {
    userId: 1997,
    username: "Hakan",
    email: "hakan@gmail.com",
    password: "$2y$08$fiIGKXDDLheePNNaU0z26eo.QwJSAD60ras6Ix3gqhBfCTsC00U1W", //1987
    roleId: 2,
  },
];

exports.userData = userData;

exports.seed = async function (knex) {
  return await knex("users").insert(userData);
};
