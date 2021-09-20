import pool from '../utils/pool.js';

export default class Stand {
  id;
  name;
  alternateName;
  japaneseName;
  image;
  standUser;
  chapter;
  abilities;
  battlecry;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.alternateName = row.alternate_name;
    this.japaneseName = row.japanese_name;
    this.image = row.image;
    this.standUser = row.stand_user;
    this.chapter = row.chapter;
    this.abilities = row.abilities;
    this.battlecry = row.battlecry;
  }

  static async create({ name, alternateName, japaneseName, image, abilities, standUser, chapter, battlecry }) {
    const { rows } = await pool.query(`
      INSERT INTO stands (name, alternate_name, japanese_name, image, abilities, stand_user, chapter, battlecry)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
      `, [name, alternateName, japaneseName, image, abilities, standUser, chapter, battlecry])

    return new Stand(rows[0]);
  }

  static async getAllStands(){
    const { rows } = await pool.query(`
      SELECT *
      FROM stands
    `)

    return rows.map(row => new Stand(row))
  }
    
}
