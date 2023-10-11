
module.exports = (req,res)=> {
    console.log(req.query);
    // res.send('Pago realizado')
    res.redirect('https://help-community-theta.vercel.app/')
};