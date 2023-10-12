// * La información que envía mercado pago, la envía por query
module.exports = (req,res)=> {
    console.log(req.query);
    // res.send('Pago realizado')
    window.alert("Pago Pendiente")
    res.redirect('http://localhost:3000/products')
};