import Router from 'express';
import Stand from '../models/Stand.js';

export default Router()
  .post('/', (req, res, next) => {
    Stand.create(req.body)
      .then(stand => res.send(stand))
      .catch(next);
  })
;
