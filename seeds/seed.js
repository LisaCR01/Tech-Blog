const sequelize = require('../config/connection');
const { User, Blogpost,Comment } = require('../models');

const userData = require('./userData.json');
const blogpostData = require('./blogpostData.json');
const commentData = require('./commentData.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blogPost of blogpostData) {
    await Blogpost.create({
      ...blogPost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const comment of commentData) {
    await Comment.create({
      ...Comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      blogpost_id: 2,
      comment_text:"here is hoping it works"
    });
  }

  process.exit(0);
};

seedDatabase();
