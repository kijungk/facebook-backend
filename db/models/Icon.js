const bookshelf = require('./bookshelf');

class Icon extends bookshelf.Model {
  get tableName() {
    return 'icons';
  }

  get hasTimestamps() {
    return true;
  }

  event() {
    return this.hasMany('Event', 'icon_id');
  }
}

module.exports = bookshelf.Model('Icon', Icon);