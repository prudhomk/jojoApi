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

  static async getStand(id){
    const { rows } = await pool.query(`
    SELECT *
    FROM stands
    WHERE id = $1
    `, [id])

    return new Stand(rows[0]);
  }

  static async update(stand, id) {
    const { rows } = await pool.query(`
      UPDATE FROM stands
      SET name = $1,
          alternate_name = $2,
          japanese_name = $3,
          image = $4,
          stand_user = $5,
          chapter = $6,
          abilities = $7,
          battlecry = $8
      WHERE id = $9
      RETURNING *
    `, [ stand.name, stand.alternateName, stand.japaneseName, stand.image, stand.standUser, stand.chapter, stand.abilities, stand.battlecry, id ])
    
    return new Stand(rows[0]);
  }
  
  static async delete(id) {
    const { rows } = await pool.query(`
      DELETE FROM stands
      WHERE id = $1
      RETURNING *
    `, [id])

    return new Stand(rows[0]);
  }
}
