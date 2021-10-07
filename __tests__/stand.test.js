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
    japaneseName:'nihongo name',
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

  test('find stand by id', async() => {
    const character1 = await Character.create({ ...character });
    const stand1 = await Stand.create({ ...stand, standUser: character1.id });

    const res = await request(app)
      .get(`/api/v1/stands/${character1.id}`);

    expect(res.body).toEqual({ ...stand1, id: '1' });
  });

  test('update a stand by id', async() => {
    const newCharacter = await Character.create(character);
    const newStand = await Stand.create({ ...stand, standUser: newCharacter.id });

    newStand.name = 'Bart';
    
    const res = await request(app)
      .put(`/api/v1/stands/${newStand.id}`)
      .send(newStand);

    expect(res.body).not.toEqual({ ...stand, standUser: newCharacter.id });
  });

  test('delete a stand', async() => {
    const newCharacter = await Character.create(character);
    const badStand = await Stand.create({ ...stand, standUser: newCharacter.id });

    const res = await request(app)
      .delete(`/api/v1/stands/${badStand.id}`)
      .send(badStand);
    
    expect(res.body).toEqual({ ...badStand, standUser: newCharacter.id });
  });

 

  test('query test - one parameter', async() => {
    const newCharacter = await Character.create(character);
    const  secondCharacter = await Character.create({
      name: 'Big Chungus',
      japaneseName:'ジョセフ・ジョースター',
      image: 'image.jpg',
      abilities: 'Eating carrots',
      nationality: 'British',
      catchphrase: 'I\'m a chunky boy',
      family: 'Bunnies',
      chapter: 'Phantom Blood',
      living: true,
      isHuman: false
    });

    const newStand = await Stand.create(stand);
    const secondStand = await Stand.create({
      name: 'Dingus',
      alternateName: 'Deengus',
      japaneseName: 'bingus',
      image: 'emperor.webp',
      standUser: '2',
      chapter: 'Stardust Crusaders',
      abilities: 'i dunno',
      battlecry: 'look out'
    });


    const res = await request(app)
      .get('/api/v1/stands/query/query?name=star');    
    expect(res.body).toEqual([newStand]);

    const res2 = await request(app)
      .get('/api/v1/stands/query/query?alternateName=deengus');    
    expect(res2.body).toEqual([secondStand]);

    const res3 = await request(app)
      .get('/api/v1/stands/query/query?standUser=1');    
    expect(res3.body).toEqual([newStand]);
  });


  test('query test - 2+ parameters', async() => {
    const newCharacter = await Character.create(character);
    const secondCharacter = await Character.create({
      name: 'Big Chungus',
      japaneseName:'japanese name',
      image: 'image.jpg',
      abilities: 'Eating carrots',
      nationality: 'British',
      catchphrase: 'I\'m a chunky boy',
      family: 'Bunnies',
      chapter: 'Phantom Blood',
      living: true,
      isHuman: true
    });

    const newStand = await Stand.create(stand);
    const secondStand = await Stand.create({
      name: 'Dingus',
      alternateName: 'Pingus',
      japaneseName: 'bingus',
      image: 'emperor.webp',
      standUser: '2',
      chapter: 'Stardust Crusaders',
      abilities: 'i dunno',
      battlecry: 'look out'
    });

    const res = await request(app)
      .get('/api/v1/stands/query/query?chapter=stardust&abilities=strength');    
    expect(res.body).toEqual([newStand]);

    const res2 = await request(app)
      .get('/api/v1/stands/query/query?chapter=stardust&alternateName=pingus&japaneseName=bingus');    
    expect(res2.body).toEqual([secondStand]);

  });

  afterAll(() => {
    pool.end();
  });
});
