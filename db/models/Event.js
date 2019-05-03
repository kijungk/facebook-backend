const bookshelf = require('./bookshelf');

class Event extends bookshelf.Model {
  get tableName() {
    return 'events';
  }

  get hasTimestamps() {
    return true;
  }

  icon() {
    return this.hasOne('Icon', 'icon_id');
  }
}

module.exports = bookshelf.model('Event', Event);