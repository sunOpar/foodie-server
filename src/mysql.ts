import mysql from 'mysql'

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'foodie'
})

const query = (command:string) =>{
  return new Promise((resolve, reject)=>{
    pool.query(command,(error,results,field)=>{
      if(error) {
        reject(error)
      }
      resolve(results)
    })
  })
}

const sql = {
  query
}
export default sql