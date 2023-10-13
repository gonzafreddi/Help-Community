// * La información que envía mercado pago, la envía por query
module.exports = (req,res)=> {
    console.log(req.query);
    // res.send('Pago rechazado')
    window.alert("no se pudo concretar su compra")
    res.redirect('http://localhost:3000/products')
};