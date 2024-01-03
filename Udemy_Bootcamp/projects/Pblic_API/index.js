import express from "express"
import axios from "axios"
import bodyParser from "body-parser"

const app = express()
const port = 3000
const PICTURE_API_URL = "https://api.thecatapi.com/v1/images/search"
const FACT_API_URL = "https://cat-fact.herokuapp.com/facts/random"

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/get-fact', async (req, res) => {
    try {
        const pictureData = await axios.get(PICTURE_API_URL)
        const factData = await axios.get(FACT_API_URL)
        console.log(pictureData.data[0].url)
        console.log(factData.data.text)
        res.render('index.ejs', {
            catPicture: pictureData.data[0].url,
            catFact: factData.data.text
        })
    } catch (error) {
        console.log(error.message)
        res.render("index.ejs");
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
