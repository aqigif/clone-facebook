'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define('posts', {
    usersId: DataTypes.INTEGER,
    feed: DataTypes.TEXT,
    imgPost: DataTypes.TEXT,
    react: DataTypes.INTEGER,
    comment: DataTypes.INTEGER,
    share: DataTypes.INTEGER
  }, {});
  posts.associate = function(models) {
    posts.belongsTo(models.users, {foreignKey: 'usersId', as: 'users'})
  };
  return posts;
};