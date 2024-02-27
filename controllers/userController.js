const sendEmailCreationEmail = require("../mail/sendAccountCreationEmail");

exports.create = async (req, res) => {
  const { name, email } = req.body;

  try {
    await sendEmailCreationEmail({ name, email });
    res.status(201).json(`User '${name}' Created`);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
