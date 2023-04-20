const db = require("../../data/dbconfig");

async function getAll() {
  const allData = await db("clients as c")
    .leftJoin("priorities as p", "p.priorityId", "c.priorityId")
    .leftJoin("jobs as j", "p.jobId", "j.jobId")
    .leftJoin("sectors as s", "p.sectorId", "s.sectorId")
    .select(
      "c.name",
      "c.surname",
      "c.citizenshipNo",
      "c.workStartYear",
      "c.graduate",
      "j.jobName",
      "s.sectorName"
    )
    .orderBy("p.rank", "asc");

  return allData;
}

async function getByYear(workStartYear) {
  const filterData = await db("clients as c")
    .leftJoin("priorities as p", "p.priorityId", "c.priorityId")
    .leftJoin("jobs as j", "p.jobId", "j.jobId")
    .leftJoin("sectors as s", "p.sectorId", "s.sectorId")
    .select(
      "c.name",
      "c.surname",
      "c.citizenshipNo",
      "c.workStartYear",
      "c.graduate",
      "j.jobName",
      "s.sectorName"
    )
    .where("workStartYear", "<", workStartYear)
    .orderBy("p.rank", "asc");

  return filterData;
}

async function getByFixYear() {
  const filterData = await db("clients as c")
    .leftJoin("priorities as p", "p.priorityId", "c.priorityId")
    .leftJoin("jobs as j", "p.jobId", "j.jobId")
    .leftJoin("sectors as s", "p.sectorId", "s.sectorId")
    .select(
      "c.name",
      "c.surname",
      "c.citizenshipNo",
      "c.workStartYear",
      "c.graduate",
      "j.jobName",
      "s.sectorName"
    )
    .where("workStartYear", "<", 2015)
    .orderBy("p.rank", "asc");

  return filterData;
}

async function getByGraduate(graduate) {
  const filterData = await db("clients as c")
    .leftJoin("priorities as p", "p.priorityId", "c.priorityId")
    .leftJoin("jobs as j", "p.jobId", "j.jobId")
    .leftJoin("sectors as s", "p.sectorId", "s.sectorId")
    .select(
      "c.name",
      "c.surname",
      "c.citizenshipNo",
      "c.workStartYear",
      "c.graduate",
      "j.jobName",
      "s.sectorName"
    )
    .where({ graduate })
    .orderBy("p.rank", "asc");

  return filterData;
}

async function getByFixGraduate() {
  const filterData = await db("clients as c")
    .leftJoin("priorities as p", "p.priorityId", "c.priorityId")
    .leftJoin("jobs as j", "p.jobId", "j.jobId")
    .leftJoin("sectors as s", "p.sectorId", "s.sectorId")
    .select(
      "c.name",
      "c.surname",
      "c.citizenshipNo",
      "c.workStartYear",
      "c.graduate",
      "j.jobName",
      "s.sectorName"
    )
    .where({ graduate: ["Üniversite"] })
    .orderBy("p.rank", "asc");

  return filterData;
}

async function getTwoCheck(workStartYear, graduate) {
  const filterData = await db("clients as c")
    .leftJoin("priorities as p", "p.priorityId", "c.priorityId")
    .leftJoin("jobs as j", "p.jobId", "j.jobId")
    .leftJoin("sectors as s", "p.sectorId", "s.sectorId")
    .select(
      "c.name",
      "c.surname",
      "c.citizenshipNo",
      "c.workStartYear",
      "c.graduate",
      "j.jobName",
      "s.sectorName"
    )
    .where("workStartYear", "<", workStartYear)
    .where({ graduate })
    .orderBy("p.rank", "asc");
}

async function getSuitable() {
  const filterData = await db("clients as c")
    .leftJoin("priorities as p", "p.priorityId", "c.priorityId")
    .leftJoin("jobs as j", "p.jobId", "j.jobId")
    .leftJoin("sectors as s", "p.sectorId", "s.sectorId")
    .select(
      "c.name",
      "c.surname",
      "c.citizenshipNo",
      "c.workStartYear",
      "c.graduate",
      "j.jobName",
      "s.sectorName"
    )
    .where("workStartYear", "<", 2015)
    .where({ graduate: "Üniversite" })
    .orderBy("p.rank", "asc");

  return filterData;
}

module.exports = {
  getAll,
  getByFixGraduate,
  getByFixYear,
  getByGraduate,
  getByYear,
  getSuitable,
  getTwoCheck,
};
