import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('character routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('creates a character', async () => {
    const character = {
      name: 'Joeseph Joestar',
      japaneseName:'ジョセフ・ジョースター',
      image: 'image.jpg',
      abilities: 'Hamon, Clacker Balls, Clairvoyence, Strength, Intelligence',
      nationality: 'British',
      catchphrase: 'You\'re next line is...',
      family: 'Jonathan Joestar, Jotaro Joestar, Lisa Lisa',
      chapter: 'Battle Tendency, Stardust Crusaders, Diamond Is Unbreakable',
      living: false,
      isHuman: true
    };

    const res = await request(app).post('/api/v1/characters');
    expect(res.body).toEqual({ ...character, id: '1' });
  });



  afterAll(() => {
    pool.end();
  });
});
