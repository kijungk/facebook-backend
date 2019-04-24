const bookshelf = require('./bookshelf');

class Event extends bookshelf.Model {
  get tableName() {
    return 'events';
  }

  get hasTimestamps() {
    return true;
  }

  icon() {
    return this.belongsTo('Icon', 'icon_id');
  }
}

module.exports = bookshelf.Model('Event', Event);