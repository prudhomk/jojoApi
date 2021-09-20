import Router from 'express';
import Character from '../models/Character.js';

export default Router()
  .post('/', (req, res, next) => {
    Character.create(req.body)
      .then(character => res.send(character))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Character.findAllCharacters()
      .then(character => res.send(character))
      .catch(next);
  })
;
