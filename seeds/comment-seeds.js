const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 3,
        comment_text: "This seems to be like an intersting topic. Can you please elaborate on this more?"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Computers really seem to be catching on."
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "I am not sure how i feel about this."
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: "I just learned about this in my class!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "These are some interesting concepts. What is your opinion on implementing one vs. the other? "
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;