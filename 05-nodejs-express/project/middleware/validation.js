export default function validateUser(req, res, next) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "name, email, and password are required" });
  }
  next();
}
