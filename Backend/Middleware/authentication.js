import jwt from 'jsonwebtoken';

export function authentication(req,res,next){
    try{
        const token = req.signedCookies[process.env.COOKIE_NAME];

        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        const {id,role} = decoded;
        //send this data to next middleware to use if needed
        req.userId = id;
        req.userRole = role;
        next();
    }catch{
        next({message:"Please Login First"});
    }
}