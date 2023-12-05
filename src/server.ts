import express from 'express'

// import { convertCSV2JSON } from '../src/scripts/convertCSV2JSON.ts'

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

app.get('/', async (req, res) => {
    console.log("hello")
    res.send("I am working") 
})

// app.post('/convert', upload.single('file'), async (req, res) => {
//     const uploadedFile = req.file
    
//     if (uploadedFile) {
//         try {
//             const fileContents = uploadedFile.buffer.toString()
//             await convertCSV2JSON(fileContents)
//             console.log("recieved file:", uploadedFile.originalname) 
//             res.status(200).send("file recieved")
//         } catch (error) {
//             console.log(error)
//             res.status(500).send("conversion failed")
//         }
//     }
//     else {
//         res.status(400).json({ error: 'No file provided.' }) 
//     }
// })

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`)
})   