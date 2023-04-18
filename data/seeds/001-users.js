/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, colName: 'baris'},
    {id: 2, colName: 'cihat'},
    {id: 3, colName: 'hakan'},
    {id: 4, colName: 'oyku'},
    {id: 5, colName: 'yaren'}
  ]);
};
