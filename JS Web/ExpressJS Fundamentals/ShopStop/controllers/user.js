const User=require('../models/User');
const encryption=require('../utilities/encryption');

module.exports.registerGet=(req,res)=>{
    res.render('user/register')
};

module.exports.registerPost=(req,res)=>{
    let user=req.body;

    if(user.password && user.password!==user.confirmedPassword){
        user.error="Passwords don't match";
        res.render('user/register',user);
        return;
    }

    let salt=encryption.generateSalt();
    user.salt=salt;

    if(user.password){
        let hashedPassword=encryption.generateHashedPassword(salt,user.password);
        user.password=hashedPassword;
    }

        User.create(user).then(user=>{
            req.login(user, (error,user)=>{
                if(error){
                    res.render('user/register',{error:'Authentication not working'})
                    return;
                }

                res.redirect('/');
            })     
    })
    .catch(error=>{
        //If User.create fails this method will be invoked

        user.error=error;
        res.render('user/register',user)
    })
}

module.exports.loginGet=(req,res)=>{
    res.render('user/login')
}

module.exports.loginPost=(req,res)=>{
    let userToLogin=req.body;

    User.findOne({username:userToLogin.username}).then(user=>{
        if(!user || !user.authenticate(userToLogin.password)){
            res.render('user/login',{error:'invalid credentials'})
        } else{
            req.logIn(user,(error,user)=>{
                if(error){
                    res.render('user/login',{error:'authentication not working'})
                    return;
                }

                res.redirect('/');
            })
        }
    })
}

module.exports.logout=(req,res)=>{
    req.logout();
    res.redirect('/');
}