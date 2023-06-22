const checkPermissions = (requestUser, resourceUserId) =>{
    // console.log(requestUser);
    // console.log(resourceUserId);
    // console.log(typeof resourceUserId);
    if(requestUser.type === 'admin') return;
    if(requestUser._id === resourceUserId.toString()) return;
    throw Error('Not Authorized to Access this route');
}

module.exports = checkPermissions;