import connection from "../Middleware/dbConnect.js";
import bcrypt from "bcrypt";

export const showProfileInfo = (req,res)=>{
    try{
        const query = 'SELECT * FROM users WHERE user_id = ?';
        connection.query(query,[req.userId],(err,result)=>{
            if(err){
                res.json({message:err,success:false});
            }
            else{
                res.json({info:result,success:true});
            }
        });
    }catch(err){
        res.json({message:err,success:false});
    }
}

export const searchPeople = (req,res)=>{
    try{
        const query = 'SELECT * FROM users WHERE user_sid = ? OR user_name=?';
        connection.query(query,[req.query.name,req.query.name],(err,result)=>{
            if(err){
                res.json({message:err,success:false});
            }
            else{
                res.json({info:result,success:true});
            }
        });
    }catch(err){
        res.json({message:err,success:false});
    }
}

export const changeProfilePic = (req,res) =>{
    try{
        const query = `UPDATE users SET u_pic = ? WHERE user_id = ?`;
        connection.query(query,[req.file.filename, req.userId],(err, rows) => {
            if(err) throw err;
            res.json({ success: true, message: "Profile Picture Updated Successfully" });
        });
    }catch(error){
        res.json({success:false,message:error.message});
    }
}

export const profileChangePassword = async (req,res)=>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const query = `UPDATE users SET user_password = ? WHERE user_id = ?`;
        connection.query(query,[hashedPassword, req.userId],(err, rows) => {
            if(err) throw err;
            res.json({ success: true, message: "Password Reset Successfully" });
        });

    }catch(error){
        res.json({ message: error.message, success: false });
    }
}

export const addPost = (req, res) => {
    try{
        const query = `INSERT INTO story (s_id, user_id, s_body, s_time) VALUES ('',?,?,CURRENT_TIMESTAMP())`;
        connection.query(query,[req.userId,req.body.storyBody],function(err,rows){
            if(err) throw err;
            res.json({success:true,message:"Your stroy posted Successfully"});
        });
    }catch(error){
        res.json({message:error.message,success:false})
    }
};

export const addPostWithPic = (req,res)=>{
    try{
        const query = `INSERT INTO story (s_id, user_id, s_body,s_pic, s_time) VALUES ('',?,?,?,CURRENT_TIMESTAMP())`;
        connection.query(query,[req.userId,req.body.storyBody,req.file.filename],function(err,rows){
            if(err) throw err;
            res.json({success:true,message:"Your stroy posted Successfully"});
        });
    }catch{
        res.json({message:error.message,success:false});
    }
}

export const showAllStory = (req,res)=>{
    try{
        const query = `SELECT * FROM story AS S
        JOIN users AS U
        WHERE S.user_id = U.user_id`;
        connection.query(query,function(err,rows){
            if(err) throw err;
            res.json({success:true,message:"Your stroy posted Successfully",story:rows});
        });
    }catch{
        res.json({message:error.message,success:false});
    }
}

export const showMyStory = (req,res)=>{
    try{
        const query = `SELECT * FROM story AS S
        JOIN users AS U
        WHERE S.user_id = U.user_id AND U.user_id = ?`;
        connection.query(query,[req.userId],function(err,rows){
            if(err) throw err;
            res.json({success:true,message:"Your stroy posted Successfully",story:rows});
        });
    }catch{
        res.json({message:error.message,success:false});
    }
}

export const deletePost = (req,res)=>{
    try{
        const query = `DELETE FROM story WHERE s_id = ?`;
        connection.query(query,[req.params.id],function(err,rows){
            if(err) throw err;           
            res.json({success:true,message:"Story deleted successfully"});      
        });
    }catch(error){
        res.json({message:error.message,success:false});
    }
}
