import { createConnection } from 'mysql2/promise';

async function main() {
  const connection = await createConnection({
    host: 'aws.connect.psdb.cloud',
    user: 'ms6ocd3uadmmkjca5wno',
    password: 'pscale_pw_OW0qIyBZtWGHnvlv70nk9SR4rfbuDbu98GwuQDfr4dY',
    database: 'burbujasalgodon',
    ssl: {
      rejectUnauthorized: false,
    },
  });
     return connection;
 
}

const poolObject = { pool: main() };

export default poolObject;







