const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');
const Comment = require('./Comment');

// User associateiong to Post (1:many)
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// Post association to User (1:1)
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// vote through associations
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

// vote direct associations
Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

// user can have many votes
User.hasMany(Vote, {
    foreignKey: 'user_id'
});
// post can have many votes
Post.hasMany(Vote, {
    foreignKey: 'post_id'
});


// comment associations
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});


module.exports = { User, Post, Vote, Comment };