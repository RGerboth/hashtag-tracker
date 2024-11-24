import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { sequelize } from './models'; // Import Sequelize instance
import { localStrategy } from './middleware/passportConfig';

const app = express();

// Middleware
app.use(express.json());
app.use(passport.initialize());
passport.use(localStrategy);

// Routes
app.use('/api', 
  require('./routes/userRoutes'), 
  require('./routes/tweetRoutes'),
  require('./routes/hashtagRoutes')
);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Internal server error.');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

export default app