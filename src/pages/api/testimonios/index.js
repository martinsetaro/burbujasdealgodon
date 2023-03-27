import { pool } from "../../../../config/datab";


export default async function handler(req,res){

  switch(req.method){
    case "GET":
      return await getTestimonios(req,res);
    case 'POST':
      return await saveNota(req,res);
    
  }
}

const getTestimonios = async (req,res)=>{
const [result] = await pool.query('SELECT * FROM testimonios');
console.log(result);
return res.status(200).json(result)


}

const saveNota = async ( req,res) => {

const { id, nombre , nota } = req.body
const [result] = await pool.query('INSERT INTO testimonios SET ?',{
  id,
  nombre,
  nota
});
return res.status(200).json({nombre,nota , id : result.insertId})

}