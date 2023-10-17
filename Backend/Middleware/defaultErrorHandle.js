export function pageNotFound(req, res, next) {
    next({message :'Page is not found'});
}

export function defaultErrorHandle(err, req, res, next) {
    if (err.message) {
        res.render('notFoundPage',{
            status : 404,
            message : err.message
        });
    } else {
        res.render('notFoundPage',{
            status : 500,
            message : "An ERROR has been occured"
        });
    }
}