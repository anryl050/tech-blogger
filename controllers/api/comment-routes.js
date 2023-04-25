const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const commentData = Comment.findAll({});

    res.json(commentData)
  } catch(err) {
        console.log(err);
        res.status(500).json(err);
      }
});

router.post('/', withAuth, (req, res) => {
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try{
    const commentData = Comment.destroy({
        where: {
          id: req.params.id
        }
      });

          if (!commentData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
          }

          res.status(200).json(commentData);
        } catch (err){
          console.log(err);
          res.status(500).json(err);
        }
});

module.exports = router;