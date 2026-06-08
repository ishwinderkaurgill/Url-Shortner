require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express');
const app = express()
const urlRoute = require("./routes/url-routes")
const PORT = 8001
const URL = require("./models/url-models")

mongoose.connect(process.env.MONGO_URI).then(() => console.log('✅ MongoDB connected')).catch(err => console.log('❌ MongoDB error:', err));

app.use(express.json())

app.use("/url", urlRoute)

app.get('/:shortId', async (req, res)=>{
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate({
        shortId
    },{$push:{
        visitHistory:{ timestamp : Date.now()}
    }})
    res.redirect(entry.redirectUrl)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:/${PORT}`)
})