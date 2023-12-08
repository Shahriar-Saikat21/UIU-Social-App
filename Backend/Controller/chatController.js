import connection from "../Middleware/dbConnect.js";

export const messageBoxCreate = (req, res) => {
    try{
        const query = `INSERT INTO messagebox (msg_id, userOne_id, userTwo_id) VALUES ('',?,?)`;
        connection.query(query,[req.userId,req.body.userTwo_id],function(err,rows){
            if(err) throw err;
            res.json({success:true,message:"messagebox created Successfully"});
        });
    }catch{
        res.json({message:error.message,success:false});
    }
};

export const getChatList = (req, res) => {
    try{
        const query = `SELECT * FROM messagebox WHERE userOne_id = ? OR userTwo_id = ?`;
        connection.query(query,[req.userId,req.userId],function(err,rows){
            if(err) throw err;
            res.json({success:true,message:"Chat List Fetched Successfully",chatList:rows});
        });
    }catch{
        res.json({message:error.message,success:false});
    }
};

export const getChatListUser = (req, res) => {
    try{
        const query = `SELECT * FROM 
        (SELECT * FROM users 
        JOIN messagebox
        WHERE user_id = userOne_id OR user_id = userTwo_id) AS T
        WHERE T.user_id != ? AND msg_id = ?`;
        connection.query(query,[req.query.id,req.query.msg_id],function(err,rows){
            if(err) throw err;
            res.json({success:true,message:"Chat List Fetched Successfully",chatId:rows});
        });
    }catch{
        res.json({message:error.message,success:false});
    }
}