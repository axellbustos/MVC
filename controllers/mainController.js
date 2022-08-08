module.exports={
    home:(req,res)=>{
        return res.render('home.ejs')
    },
    about:(req,res)=>{
        return res.render('about.ejs')
    }
}