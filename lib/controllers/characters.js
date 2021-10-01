import Router from 'express';
import Character from '../models/Character.js';

export default Router()
  .post('/', (req, res, next) => {
    Character.create(req.body)
      .then(character => res.send(character))
      .catch(next);
  })

  .get('/family', (req, res, next) => {
    Character.findFamily(req.query)
      .then(characters => res.send(characters))
      .catch(next);
  })

  .get('/nationality', (req, res, next) => {
    Character.findNationality(req.query)
      .then(characters => res.send(characters))
      .catch(next);
  })

  .get('/characters', (req, res, next) => {
    Character.findLivingHumans(req.query)
      .then(characters => res.send(characters))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Character.findAllCharacters()
      .then(character => res.send(character))
      .catch(next);
  })

  .get('/chapter', (req, res, next) => {
    Character.findByChapter(req.query)
      .then(character => res.send(character))
      .catch(next);
  })

  .get('/human', (req, res, next) => {
    Character.findHumans(req.query)
      .then(characters => res.send(characters))
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
