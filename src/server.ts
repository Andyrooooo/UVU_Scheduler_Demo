import express from 'express'

import { convertCSV2JSON, simulateMain } from '../src/scripts/convertCSV2JSON.ts'

import bodyParser from 'body-parser'
const app = express()
const port = 5174
import cors from 'cors'
import multer from 'multer' 

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) 

const storage = multer.memoryStorage()
const upload = multer({ storage: storage})
let fileContents

app.get('/', async (req, res) => {
    console.log("hello")
    res.send("I am working") 
})

app.post('/convert', upload.single('file'), async (req, res) => {
    const uploadedFile = req.file
    
    
    if (uploadedFile) {
        fileContents = uploadedFile.buffer
        await convertCSV2JSON(fileContents)
        await simulateMain()
    }
    
   console.log("processing done")
})

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`)
})   