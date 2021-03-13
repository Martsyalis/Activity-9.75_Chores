const Chores = require("../db/Chores");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const allChores = await Chores.find();
  res.json(allChores);
});

router.post("/", async (req, res) => {
    try{
  const newChore = await Chores.create(req.body);
  res.status(201);
  res.send(`Chore with id: ${newChore.id} was created!`);
    }catch(err) {
        res.status('403')
        res.send(`Failed with: ${err}`)
    }

});

module.exports = router;
