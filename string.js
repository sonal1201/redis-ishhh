const client = require("./client");


// async function init() {
//     const res = await client.get("name:1");
//     console.log("result->", res);
// }

async function init() {
    await client.set("name:4", "Hskkd")
    const res = await client.get("name:4");
    console.log("result->", res);

}


init();