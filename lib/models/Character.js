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
      INSERT INTO characters(
        NAME, 
        JAPANESE_NAME, 
        IMAGE, 
        ABILITIES, 
        NATIONALITY, 
        CATCHPHRASE, 
        FAMILY, 
        CHAPTER, 
        LIVING, 
        IS_HUMAN
        )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *
    `, [name, japaneseName, image, abilities, nationality, catchphrase, family ,chapter, living, isHuman]);

      return new Character(rows[0]);
  }
}



