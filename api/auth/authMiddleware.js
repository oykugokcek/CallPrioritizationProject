const db = require("../../data/dbconfig");

function loginCheckPayload(req, res, next) {
  const keyArray = ["userId", "password"];
  keyArray.forEach((key) => {
    !req.body[key] &&
      next({ status: 404, message: `${key} property is missing` });
  });
  next();
}

function loginCheckPayloadRegist(req, res, next) {
  const keyArray = ["userId", "username", "password", "roleId"];
  keyArray.forEach((key) => {
    !req.body[key] &&
      next({ status: 404, message: `${key} property is missing` });
  });
  next();
}

async function checkExistingUserId(req, res, next) { // UserId yerine email gelecek 
  const searchedUser = await db("users as u")
    .leftJoin("roles as r", "u.roleId", "r.roleId")
    .select("u.*", "r.*")
    .where("userId", req.body.userId)
    .first();

  searchedUser
    ? next()
    : next({ status: 404, message: `ID No:${req.body.userId} is not found` });
}

async function checkExistingNewUser(req, res, next) {
  const searchedUser = await db("users as u")
    .leftJoin("roles as r", "u.roleId", "r.roleId")
    .select("u.*", "r.*")
    .where("userId", req.body.userId)
    .first();

  searchedUser &&
    next({
      status: 402,
      message: `ID No:${req.body.userId} is already existed`,
    });

  const searchedUser2 = await db("users as u")
    .leftJoin("roles as r", "u.roleId", "r.roleId")
    .select("u.*", "r.*")
    .where("username", req.body.username)
    .first();

  searchedUser2
    ? next({
        status: 402,
        message: `Username:${req.body.username} is already existed`,
      })
    : next();
}

module.exports = {
  loginCheckPayload,
  checkExistingUserId,
  loginCheckPayloadRegist,
  checkExistingNewUser,
};
