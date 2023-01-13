const express = require("express");
const router = express.Router();
const getPeople = require("../functions/getpeople");
const putPerson = require("../functions/putPerson");
const deletePerson = require("../functions/deletePerson");
const { postPerson, postToPostman } = require("../functions/postPeople");

router.get("/", getPeople);

router.post("/", postPerson);

router.put("/:id", putPerson);

router.delete("/:id", deletePerson);

router.post("/postman", postToPostman);

module.exports = router;
