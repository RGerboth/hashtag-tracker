import express from 'express';
import passport from 'passport';
const userController = require('../controllers/userController')

const router = express.Router();

router.post('/login',
  passport.authenticate('local', { session: false }),
  (req, res) => {
    // This section would usually include creating a session token and passing that back to the user
    // along with endpoints for password reset, etc. 
    res.json({ message: 'Logged in successfully' });
  }
);

router.get('/users',
  async (req, res) => {
    const result = await userController.getAllUsers(req)
    res.json({ users: result });
  }
);

module.exports = router;
