const verifyAdmin = (req, res, next) => {
  const adminSecret = req.headers["admin-secret"];

  if (adminSecret === process.env.ADMIN_SECRET) {
    next(); // authorized
  } else {
    res.status(403).json({ message: "Forbidden: Invalid admin secret" });
  }
};

module.exports = verifyAdmin;