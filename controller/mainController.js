const adminTbl = require("../models/adminTbl");

const index = (req, res) => {
  console.log("index.run");
  res.render("index");
};

const footer = (req, res) => {
  console.log("footer.run");
  res.render("footer");
};

const insertData = async (req, res) => {
  console.log(req.body)
  try {
    const { name, email, phone, message } = req.body;
    await adminTbl.create({
      name,
      email,
      phone,
      message,
    });
    // console.log(req.body);
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.redirect("404");
  }
};

const error = (req, res) => {
  return res.render("404");
};

module.exports = { index, insertData, error, footer };
