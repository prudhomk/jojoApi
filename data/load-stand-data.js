import client from '../lib/client.js';
import stands from './standData.js';

runStands();


async function runStands() {
  try {
    await Promise.all(
      stands.map(stand => {
        return client.query(`
        INSERT INTO stands (name, japanese_name, alternate_name, image, stand_user, chapter, abilities, battlecry)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `,
        [stand.name, stand.japaneseName, stand.alternateName, stand.image, stand.standUser, stand.chapter, stand.abilities, stand.battlecry]);
      })
    );
    
    console.log('seed data loaded');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
}

