const bookshelf = require('./bookshelf');

class Icon extends bookshelf.Model {
  get tableName() {
    return 'icons';
  }

  get hasTimestamps() {
    return true;
  }

  event() {
    return this.belongsToMany('Event', 'icon_id');
  }
}

module.exports = bookshelf.model('Icon', Icon);