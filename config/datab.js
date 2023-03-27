import { createPool } from "mysql2/promise";

const pool = createPool ({
    host:'localhost',
    user:'root',
    password:'martinsetaro',
    port:3306,
    database:"testimoniales"
})

export { pool };