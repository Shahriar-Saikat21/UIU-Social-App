import connection from "../Middleware/dbConnect.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
  try {
    const query = `SELECT * FROM users WHERE user_email = ?`;
    connection.query(query, [req.query.email], function (err, rows) {
      if (err) throw err;
      if (rows.length > 0) {
        const isValidPass =  bcrypt.compareSync(req.query.password, rows[0].user_password);
        if (isValidPass) {
          const userObject = {
            id: rows[0].user_id,
            role: rows[0].user_role,
          };

          //token generate
          const token = jwt.sign(userObject, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
          });

          //cookie set
          res.cookie(process.env.COOKIE_NAME, token, {
            maxAge: process.env.JWT_EXPIRES_IN,
            httpOnly: true,
            signed: true,
          });

          res.json({
              message: "User Logged In Successfully",
              success: true,
              role: rows[0].user_role,
            });
        } else {
          res.json({ message: "Invalid email or password", success: false });
        }
      } else {
        res.json({ success: false, message: "Account not found" });
      }
    });
  } catch (err) {
    res.status(200).json({ message: err.message, success: false });
  }
};

export const logout = (req, res) => {
  res.clearCookie(process.env.COOKIE_NAME);
  res.json({ message: "User Logged Out Successfully", success: true });
};
