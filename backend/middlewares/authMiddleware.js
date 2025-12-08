const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .send({ message: "Authorization header missing", success: false });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error("JWT verify error:", err);
        return res
          .status(401)
          .send({ message: "Token is not valid", success: false });
      }

      // matches jwt.sign({ id: user._id, ... })
      req.body.userId = decoded.id;
      next();
    });
  } catch (error) {
    console.error("authMiddleware error:", error);
    res
      .status(500)
      .send({ message: "Internal server error", success: false });
  }
};
