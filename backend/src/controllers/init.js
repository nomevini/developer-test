const hello = (req, res) => {
  res.status(200).json({message: "Ola, mundo!"})
}

module.exports = {
  hello
}