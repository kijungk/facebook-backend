exports.up = function (knex, Promise) {
  return knex.schema.createTable('events', (table) => {
    table.increments();
    table.string('description', 256).notNullable().unique();
    table.foreign('icon').references('id').inTable('icons');
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('events');
};