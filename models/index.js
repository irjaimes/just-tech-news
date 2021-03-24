const User = require('./User');
const Post = require('./Post');

// create associations (one to many)
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// 1 to 1 association
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };