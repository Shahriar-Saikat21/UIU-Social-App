import jwt from 'jsonwebtoken';

export function authentication(req,res,next){
    try{
        const token = req.signedCookies[process.env.COOKIE_NAME];

        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        const {userName,id} = decoded;
        //send this data to next middleware to use if needed
        req.userName = userName;
        req.id = id;
        next();
    }catch{
        next({message:"Please Login First"});
    }
}