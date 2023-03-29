import poolObject from "../../../../config/datab";


export default async function handler(req,res){

  switch(req.method){
    case "GET":
      return await getTestimonios(req,res);
    case 'POST':
      return await saveNota(req,res);
    
  }
}

const getTestimonios = async (req,res)=>{
  const pool = await poolObject.pool;
const [result] = await pool.query('SELECT * FROM formulario');
console.log(result);
return res.status(200).json(result)


}

const saveNota = async ( req,res) => {
  const pool = await poolObject.pool;
const { id, nombre , apellido , telefono , email, nota } = req.body
const [result] = await pool.query('INSERT INTO formulario SET ?',{
  id,
  nombre,
  apellido,
  telefono,
  email,
  nota
});
return res.status(200).json({nombre,apellido,telefono,email,nota , id : result.insertId})

}