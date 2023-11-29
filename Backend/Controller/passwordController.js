import connection from "../Middleware/dbConnect.js";
import mailSent from "../Middleware/mailSent.js";

import bcrypt from "bcrypt";

export const forgotPassword = (req, res) => {
    try{
        const query = `SELECT * FROM users WHERE user_email =?`;
        connection.query(query,[req.query.email],(err, rows) => {
            if(err) throw err;
            if(rows.length > 0){
                mailSent(req.query.email, "Your Reset Password Link", "http://localhost:5173/resetPassword");
                res.json({ success: true, message: "Reset Password Link Sent Successfully" });
            }else{
                res.json({ success: false, message: "This email is not associate with your account" });
            }               
        });
    }catch(error){
        res.json({ message: error.message, success: false });
    }
    
};

export const resetPassword = async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const query = `UPDATE users SET user_password = ? WHERE user_email = ?`;
        connection.query(query,[hashedPassword, req.body.email],(err, rows) => {
            if(err) throw err;
            res.json({ success: true, message: "Password Reset Successfully" });
        });

    }catch(error){
        res.json({ message: error.message, success: false });
    }
};