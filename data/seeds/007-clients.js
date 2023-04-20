/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const clientData = [
  {
    name: "Şabaniye",
    surname: "Taş",
    citizenshipNo: "412345678912",
    priorityId: 2,
    workStartYear: 2017,
    graduate: "Lise",
  },
  {
    name: "Ziya",
    surname: "Dam",
    citizenshipNo: "258699412211",
    priorityId: 2,
    workStartYear: 1995,
    graduate: "Üniversite",
  },
  {
    name: "Abdurrahman",
    surname: "Başgezen",
    citizenshipNo: "4545221554451",
    priorityId: 1,
    workStartYear: 1997,
    graduate: "Üniversite",
  },
];

exports.clientData = clientData;

exports.seed = async function (knex) {
  return await knex("clients").insert(clientData);
};
