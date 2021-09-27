import Router from 'express';
import Character from '../models/Character.js';

export default Router()
  .post('/', (req, res, next) => {
    console.log('post route', req);
    Character.create(req.body)
      .then(character => res.send(character))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Character.findAllCharacters()
      .then(character => res.send(character))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Character.findCharacterById(req.params.id)
      .then(character => res.send(character))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    Character.put(req.body, req.params.id)
      .then(character => res.send(character))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Character.delete(req.params.id)
      .then(character => res.send(character))
      .catch(next);
  })
;
