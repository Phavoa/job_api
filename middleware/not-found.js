const notFound = (req, res) => res.status(404).send("Route does not exisr");

module.exports = notFound;