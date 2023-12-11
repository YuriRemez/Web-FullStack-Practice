import express from "express"

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get('/contact', (req, res) => {
    res.send("Tel: 0529501781")
});

app.get('/about', (req, res) => {
    res.send("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});