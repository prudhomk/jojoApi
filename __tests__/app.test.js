import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Character from '../lib/models/Character.js';

describe('character routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

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

  test('creates a character', async () => {
   
    const res = await request(app)
      .post('/api/v1/characters')
      .send(character);
      
    expect(res.body).toEqual({ ...character, id: '1' });
  });

  test('gets all characters', async () => {
    await Character.create(character);

    const secondCharacter = {
      name: 'R.E.O. Speedwagon',
      japaneseName:'ロバート・E・O・スピードワゴン',
      image: 'image.jpg',
      abilities: 'Trick Top Hat, Personality',
      nationality: 'English',
      catchphrase: 'UWHOOAH?!',
      family: 'None',
      chapter: 'Phantom Blood, Battle Tendency, Stardust Crusaders, Diamond Is Unbreakable',
      living: false,
      isHuman: true
    };

    await Character.create(secondCharacter);
    const res = await request(app)
      .get('/api/v1/characters')
      .send(character)
      .send(secondCharacter);

    expect(res.body).toEqual([{ ...character, id: '1' }, { ...secondCharacter, id: '2' }]);
  });

  test('gets a character by id', async() => {
    const newCharacter = await Character.create(character);

    const res = await request(app)
      .get(`/api/v1/characters/${newCharacter.id}`);
    
    expect(res.body).toEqual({ ...character, id:'1' });
  });


  afterAll(() => {
    pool.end();
  });
});
