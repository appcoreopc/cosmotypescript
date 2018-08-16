import { CosmosClient } from "@azure/cosmos";
 
const endpoint = "https://localhost:8081";                     // Add your endpoint
const masterKey = "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==";  // Add the masterkey of the endpoint
const client = new CosmosClient({endpoint, auth: { masterKey }});

const databaseDefinition = { id: "sampledatabase" };
const collectionDefinition = { id: "samplecollection" };
const itemDefinition = { id: "hello world doc", content: "Hello World!" };

async function helloCosmos() {
      
    const database = await client.database("databaseDefinition");
    console.log(database);
 
    //console.log('created db');
   

   // const { database: db } = await client.database.(databaseDefinition);
   // console.log('created db');
 
  //  const { container } = await db.container.create(collectionDefinition);
  //  console.log('created collection');
 
   // const { body } = await container.items.create(documentDefinition);
   // console.log('Created item with content: ', body.content);
 
   // await db.delete();
   // console.log("Deleted database");
}


helloCosmos().catch((err)=>{console.error(err)});