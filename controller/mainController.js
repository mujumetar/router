const index = (req, res) => {
  console.log("index.run");
  res.render("index")
};



module.exports = { index };
