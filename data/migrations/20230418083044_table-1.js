/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("roles", (role) => {
      role.increments("roleId");
      role.string("role").notNullable().unique();
    })
    .createTable("users", (user) => {
      user.integer("userId").notNullable().unique();
      user.string("username").notNullable().unique();
      user.string("email");
      user.string("password").notNullable();
      user
        .integer("roleId")
        .unsigned()
        .references("roleId")
        .inTable("roles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("roles");
};
