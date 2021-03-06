import pool from '../utils/pool.js';

export default class Character {
  id;
  name;
  japaneseName;
  image;
  abilities;
  nationality;
  catchphrase;
  family;
  chapter;
  living;
  isHuman;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.japaneseName = row.japanese_name;
    this.image = row.image;
    this.abilities = row.abilities;
    this.nationality = row.nationality;
    this.catchphrase = row.catchphrase;
    this.family = row.family;
    this.chapter = row.chapter;
    this.living = row.living;
    this.isHuman = row.is_human;
  }

  static async create({ name, japaneseName, image, abilities, nationality, catchphrase, family, chapter, living, isHuman }) {
    const { rows } = await pool.query(`
      INSERT INTO characters (name, japanese_name, image, abilities, nationality, catchphrase, family, chapter, living, is_human)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *
    `, [name, japaneseName, image, abilities, nationality, catchphrase, family,chapter, living, isHuman])

      return new Character(rows[0])
  }

  static async findAllCharacters() {
    const { rows } = await pool.query(`
      SELECT * FROM characters
    `)

    return rows.map(row => new Character(row));
  }

  static async findByChapter({ chapter }) {
    const { rows } = await pool.query(`
      SELECT *
      FROM characters
      WHERE chapter ~* $1
    `, [chapter])

    return rows.map(row => new Character(row));
  }

  static async findHumans({ isHuman }) {
    const {rows} = await pool.query(`
      SELECT *
      FROM characters
      WHERE is_human = $1
    `, [isHuman])

    return rows.map(row => new Character(row));
  }

  static async findLiving({ living }) {
    const {rows} = await pool.query(`
      SELECT *
      FROM characters
      WHERE living = $1
    `, [living])

    return rows.map(row => new Character(row));
  }
  
  static async findNationality({ nationality }) {
    const {rows} = await pool.query(`
      SELECT *
      FROM characters
      WHERE nationality ~* $1
    `, [nationality])

    return rows.map(row => new Character(row));
  }

  static async findFamily({ family }) {
    const {rows} = await pool.query(`
      SELECT *
      FROM characters
      WHERE family ~* $1
    `, [family])

    return rows.map(row => new Character(row));
  }

  static async querySomething(query) {

    const category = Object.keys(query)
    const value = Object.values(query)

    //check for boolean
    const categoryCheck = () => {
      if(category[0] === 'isHuman' || category[0] === 'living' ) {
      
        const regex = category[0].split(/(?=[A-Z])/).join('_');
        return `${regex} ` + '= $1 '

      } else {

        const regex = category[0].split(/(?=[A-Z])/).join('_');
        return `${regex} ` + '~* $1 '
      }  
    }

    //add x number of AND clauses
    const addCategory = () => {
      let generalCat = '';

      for (let i = 1; i < category.length; i++ ){
        
        if(category[i] === 'living' ) {
           generalCat += `AND living = $${i+1}` 

        } else if (category[i] === 'isHuman') {
          
          generalCat += `AND is_human = $${i+1}`
        } else {
  
          const regex = category[i].split(/(?=[A-Z])/).join('_');
          generalCat += 'AND ' + `${regex} ` + `~* $${i+1} `
       }
      }

      return generalCat;
    }

    //return SQL query based on number of query values
    if (category.length === 1) {

      const { rows } = await pool.query(`
        SELECT *
        FROM characters
        WHERE ` + categoryCheck(), [value[0]])

      return rows.map(row => new Character(row));

    } else {

      const {rows} = await pool.query(`
        SELECT *
        FROM characters
        WHERE ` + categoryCheck() +
        addCategory(), value)

      return rows.map(row => new Character(row));

    }
  }

  static async findCharacterById(id){
    const {rows} = await pool.query(`
      SELECT *
      FROM characters
      WHERE id = $1
    `, [id])

    return new Character(rows[0]);
  }

  static async put(character, id) {
    const {rows} = await pool.query(`
    UPDATE characters
    SET name = $1, 
        japanese_name = $2, 
        image = $3, 
        abilities = $4, 
        nationality = $5, 
        catchphrase = $6, 
        family = $7, 
        chapter = $8, 
        living = $9, 
        is_human = $10
    WHERE id = $11
    RETURNING *`, [character.name, character.japaneseName, character.image, character.abilities, character.nationality, character.catchphrase, character.family, character.chapter, character.living, character.isHuman, id])
  
    return new Character(rows[0]);
  }

  static async delete (id) {
    const{rows} = await pool.query(`
      DELETE FROM characters
      WHERE id = $1
      RETURNING *
    `, [id])

    return new Character(rows[0])
  }
}



