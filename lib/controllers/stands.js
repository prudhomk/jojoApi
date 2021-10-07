import Router from 'express';
import Stand from '../models/Stand.js';

export default Router()
  .post('/', (req, res, next) => {
    Stand.create(req.body)
      .then(stand => res.send(stand))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Stand.getAllStands()
      .then(stands => res.send(stands))
      .catch(next);
  })

  .get('/query/:query', (req, res, next) => {
    console.log(req.query);
    Stand.querySomething(req.query)
      .then(stands => res.send(stands))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Stand.getStand(req.params.id)
      .then(stands => res.send(stands))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    Stand.update(req.body, req.params.id)
      .then(stand => res.send(stand))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Stand.delete(req.params.id)
      .then(stand => res.send(stand))
      .catch(next);
  })
;

