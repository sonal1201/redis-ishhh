const { default: axios } = require('axios');
const express = require('express');
const client = require('./client')


const app = express();

app.get('/', async (req, res) => {
    const cached = await client.get("post");

    if (cached) return res.json(JSON.parse(cached));
    await client.expire("post", 10);

    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");

    await client.set("post", JSON.stringify(data));

    return res.json(data);
})

app.listen(4000);