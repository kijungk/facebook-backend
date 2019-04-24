exports.up = function (knex, Promise) {
  return knex.schema.createTable('icons', (table) => {
    table.increments();
    table.string('path', 256).notNullable().unique();
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('icons');
};