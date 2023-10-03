const express = require("express");
const router = express();
const UserRoutes = require("./UserRouter");
const PhotoRouter = require("./PhotoRouter");

router.use("/api/users", UserRoutes);
router.use("/api/photos", PhotoRouter);

//test route
router.get("/", (req, res) => {
  res.send("API Working");
});

module.exports = router;
