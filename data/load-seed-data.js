import client from '../lib/client.js';
import characters from './characterData.js';
import stands from './standData.js';
runStands();
// runCharacters();


// async function runCharacters() {
//   try {
//     await Promise.all(
//       characters.map(character => {
//         return client.query(`
//         INSERT INTO characters (name, japanese_name, image, abilities, nationality, catchphrase, family, chapter, living, is_human)
//         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
//         `,
//         [character.name, character.japaneseName, character.image, character.abilities, character.nationality, character.catchphrase, character.family, character.chapter, character.living, character.isHuman]);
//       })
//     );
    
//     console.log('seed data loaded');
//   }
//   catch(err) {
//     console.log(err);
//   }
//   finally {
//     client.end();
//   }
// }


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

