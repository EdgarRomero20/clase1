const express = require("express");
const router = express.Router();


router.post("/", (req, res )=> {
    const {name, age, email} = req.body
    if (typeof age != "number")
    return res.status(400).json({error: "Error"})
    else return res.send("Todo OK")
})

module.exports = router
