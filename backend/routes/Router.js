const express = require("express");
const router = express();
const UserRoutes = require("./UserRouter");

router.use("/api/users", UserRoutes);

//test route
router.get("/", (req, res) => {
  res.send("API Working");
});

module.exports = router;
