/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const priorityData = [
  {
    sectorId: 1,
    jobId: 2,
    group: "A",
    rank: 1,
  },
  {
    sectorId: 2,
    jobId: 1,
    group: "B",
    rank: 2,
  },
  {
    sectorId: 3,
    jobId: 3,
    group: "C",
    rank: 3,
  },
];

exports.priorityData = priorityData;

exports.seed = async function (knex) {
  return await knex("priorities").insert(priorityData);
};
