import { pool } from "../../../config/datab"


export default async function handler(req,res){

  const [rows] = await pool.query('SELECT * FROM testimonios');
  return res.status(200).json(rows)

// res.status(200).json({name:"Joe Doe", street:"Springfield 2333"})
}