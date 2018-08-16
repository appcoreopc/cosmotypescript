import { CosmosClient } from "@azure/cosmos";
 
const endpoint = "https://localhost:8081";   // Add your endpoint
const masterKey = "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==";  // Add the masterkey of the endpoint

const client = new CosmosClient({endpoint, auth: { masterKey }});
// Notice database variables are called one after another //
async function helloCosmos() {
         
    const dbResponse = await client.databases.createIfNotExists({
       id : "TestDemo"
    });

    let database = dbResponse.database;
   
    const coResponse = await database.containers.createIfNotExists({
      id: "DummyTestCollection"
    });

    let container = coResponse.container;
    console.log("Setting up the container...done!");
    
    // add item to it // 

    const { body : doc } = await container.items.create({
        'name' : 'jeremy', 
        'password' : 'uGuessedit'
    })    
}

helloCosmos().catch((err)=>{console.error(err)});