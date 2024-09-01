
const { db } = require('@vercel/postgres')

async function deleteUser (client){ 

  const id = '410544b2-4001-4271-9855-fec4b6a6442a' 
  try{
      await client.sql`DELETE FROM users WHERE id = ${id}`
  revalidatePath('/dashboard/invoices')
  revalidatePath('/dashboard')
  revalidatePath('/')
  }catch(error){
      return {message: 'Error DB: No se pudo eliminar la factura'}
  }
}

async function main(){
  const client = await db.connect()
  await deleteUser(client)
  await client.end()
}

main().catch((err) => {
  console.error(
    'ocurrio un error al eliminar el suario:',
    err,
  );
});
/* async function regUsers(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
      // Create the "users" table if it doesn't exist
      const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          username VARCHAR(255) NOT NULL,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
        );
      `;
  
      console.log(`Created "users" table`);
  
      return {
        createTable,
      };
    } catch (error) {
      console.error('Error seeding users:', error);
      throw error;
    }
  }

  async function main(){
    const client = await db.connect();
    await regUsers(client);
    await client.end()
  }

  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });*/


