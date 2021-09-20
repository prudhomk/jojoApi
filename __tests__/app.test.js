import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Character from '../lib/models/Character.js';
import Stand from '../lib/models/Stand.js';

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

  const stand = {
    name: 'Star Platinum',
    alternateName: 'none',
    japaneseName: 'スタープラチナ（星の白金)',
    image: 'image.jpg',
    standUser: '1',
    chapter: 'Stardust Crusaders, Diamond Is Unbreakable, Stone Ocean',
    abilities: 'Time Stop, Super Speed, Super Strength, Breath, Star-Finger',
    battlecry: 'ORAORAORAORAORAORA'
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
    
    expect(res.body).toEqual({ ...character, id: '1' });
  });

  test('edit character details by id', async() => {
    const editCharacter = await Character.create(character);
    editCharacter.name = 'Iggy';
    const res = await request(app)
      .put(`/api/v1/characters/${editCharacter.id}`)
      .send(editCharacter);

    expect(res.body).not.toEqual({ ...character, id: '1' });
  });

  test('deletes a character', async() => {
    const newCharacter = await Character.create(character);

    const res = await request(app)
      .delete(`/api/v1/characters/${newCharacter.id}`)
      .send(character);

    expect(res.body).toEqual({ ...character, id:'1' });
  });

  test('create a stand', async() => {
    const standUser = await Character.create(character);

    const res = await request(app)
      .post('/api/v1/stands')
      .send({ ...stand, standUser: standUser.id });

    expect(res.body).toEqual({ ...stand, id: '1' });
  });

  test('get all stands', async() => {
    const character1 = await Character.create(character);
    const character2 = await Character.create({
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
    });

    const stand1 = await Stand.create({ ...stand, standUser: character1.id });
    const stand2 = await Stand.create({
      name: 'The World',
      alternateName: 'none',
      japaneseName: 'ザ・ワールド(世界)',
      image: 'image.jpg',
      standUser: character2.id,
      chapter: 'Stardust Crusaders, Steel Ball Run',
      abilities: 'Time Stop, Super Speed, Super Strength',
      battlecry: 'MUDAMUDAMUDA'
    });
  
    const res = await request(app)
      .get('/api/v1/stands');

    expect(res.body).toEqual([stand1, stand2]);
  });

  afterAll(() => {
    pool.end();
  });
});
