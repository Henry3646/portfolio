const mongoose = require("mongoose")

const contactSchema = {
    name: String,
    email: String,
    content: String,
 }

 const Contact = mongoose.model("Contact", contactSchema)

 module.exports = Contact