import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'Public/Image');
    },
    filename : (req,file,cb)=>{
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname+"-"+Date.now()+ Math.round(Math.random() * 1E9);
        cb(null,fileName+fileExt);
    }
});

const upload = multer({
    storage : storage,
    limits : {
        fileSize : 9000000 //9MB
    },
    fileFilter : (req,file,cb)=>{
        if(file.mimetype==='image/png'||file.mimetype==='image/jpg'||file.mimetype==='image/jpeg'){
            cb(null,true);
        }else{
            //cb(null,false);
            cb(new Error('File type not supported...')); //this error will be handle in common error handle
        }
    }
})

export default upload;