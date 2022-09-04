require('dotenv').config()
const path = require('path')
const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")


const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, function(err) {
    if(!err) {
        console.log("Database connected...")
    } else {
        console.log(err)
    }
})

 const skillSchema = new mongoose.Schema({
    name: String,
    url: String,
    
 })

 const Skill = mongoose.model("Skill", skillSchema)


 app.get("/skills", (req, res) => {
    Skill.find().then(
        items => res.json(items)
    ).catch(err => console.log(err))
 })

  const projectSchema = new mongoose.Schema({
     name: String,
     description: String,
     techStack: String,
     githubRepo: String,
     liveLink: String,
     imgLink: String,
    })

  const Project = mongoose.model("Project", projectSchema)


  app.get("/projects", (req, res) => {
       Project.find().then(
         items => res.json(items)
     ).catch(err => console.log(err))
  })

 app.use("/", require("./routes/contactRoute"));

 if(process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
  }

  const port = process.env.PORT || 3001
 app.listen(process.env.PORT || 3001, function () {
    console.log("Server running....", port)
 })