import connection from "../Middleware/dbConnect.js";
import mailSent from "../Middleware/mailSent.js";

import bcrypt from "bcrypt";

export const signupOtp = (req, res) => {
  try {
    const otpSent = Math.floor(100000 + Math.random() * 900000);
    mailSent(req.body.userEmail, "OTP for signup your new account", otpSent);
    res.json({ success: true, otp: otpSent, data: req.body });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const signupValidation = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.userPassword, 10);

  try {
    const query = `INSERT INTO users(user_id,user_sid,user_name,user_designation,user_email,u_pic,user_password,user_role,user_status) VALUES ('',?,?,?,?,'Default.svg.png',?,'profile','Unblock')`;
    connection.query(query, [req.body.userSID,req.body.userName,req.body.accountType,req.body.userEmail,hashedPassword], function (err, rows) {
      if (err) throw err;
      res.json({ success: true, message: "Signup Successfully" });
    });
  } catch (err) {
    res.status(200).json({ message: err.message, success: false });
  }
};
