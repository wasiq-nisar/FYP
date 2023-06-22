const jwt = require('jsonwebtoken')

const authenticateUser = async(req, res, next) =>{
    const token = req.cookies.token;
    if(!token){
        console.log('Error!! No token Present');
        return res.status(401).json({msg: 'Authentication Invalid'})
    }

    try {
        const { _id, email, type} = jwt.verify(token, process.env.SECRET);
        req.user = { _id, email, type}
    } catch (error) {
        return res.status(401).json({msg: 'Authentication Invalid-2'})
    }
    next();
}

const authorizePermissions = (...type) =>{
    return(req, res, next) =>{
        if(!type.includes(req.user.type)){
            return res.status(403).json({msg: 'Unauthorized Route'})
        }
        next();
    }
}

// const authorizePermissions = (req, res, next) =>{
//     console.log('admin route');
//     if(req.user.type !== 'admin'){
//         return res.status(403).json({msg: 'Unauthorized Route'})
//     }
//     next();
// }

module.exports = {
    authenticateUser,
    authorizePermissions
}