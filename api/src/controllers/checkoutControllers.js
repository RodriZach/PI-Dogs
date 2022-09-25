//mercado pago
// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "TEST-4244633596829734-092014-6ba221809cba6b90a563f64fd0e65d84-176832394",
});

const checkoutControllers = {};

checkoutControllers.pago = (req, res) => {

  //let id = req.params;
  let itemsCheckout = req.body
  console.log(itemsCheckout)
  let items2 = itemsCheckout.map( a => {
    return {
        title: a.title,
        unit_price: a.unit_price,
        quantity: a.quantity,
    }
  })
  console.log(items2)
  let preference = {
    items:items2
  };
  
    // back_urls: {
    //   success: "http://localhost:3000/home",
    //   failure: "http://localhost:3000/home",
    //   pending: "http://localhost:3000/home",
    // },
    // auto_return: "approved",
    // external_reference: idOrden.toString(),
  
  mercadopago.preferences
    .create(preference)
    .then(function (respuesta) {
      const redireccion = respuesta.body.init_point;
      res.send(redireccion);
    })
    .catch(function (error) {
      error;
    });

  }
module.exports = checkoutControllers