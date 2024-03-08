import express from "express";
import json from 'body-parser';
import { render } from 'ejs';

const router = express.Router();

// Configurar primer ruta
router.get("/", (req, res) => {
  res.render("index", { titulo: "Pre Examen Carol Vazquez" });
});

router.get("/PagoDeRecibo", (req, res) => {
  const params = {
    titulo: "PreExamen Carol Vazquez",
    numero: req.query.numero,
    nombre: req.query.nombre,
    domicilio: req.query.domicilio,
    servicio: req.query.servicio,
    kwConsumidos: req.query.kwConsumidos,
    isPost: false,
  };
  res.render("PagoDeRecibo", params);
});

router.post("/PagoDeRecibo", (req, res) => {
  const precios = [1.08, 2.5, 3.0];

  const { numero, nombre, domicilio, servicio, kwConsumidos } = req.body;
  const precioKw = precios[servicio * 1];
  const tipoDeServicio = servicio == 0 ? 'Domestico' :  servicio == 1 ? 'Comercial' : 'Industrial'
  const subtotal = precioKw * kwConsumidos;

  // Calcular el descuento
  let descuento = 0;
  if (kwConsumidos <= 1000) {
    descuento = 0.1;
  } else if (kwConsumidos > 1000 && kwConsumidos <= 10000) {
    descuento = 0.2;
  } else {
    descuento = 0.5;
  }

  // Aplicar el descuento al subtotal
  const descuentoAplicado = subtotal * descuento;
  const subtotalConDescuento = subtotal - descuentoAplicado;

  // Calcular el impuesto
  const impuesto = 0.16 * subtotalConDescuento;

  // Calcular el total a pagar
  const total = subtotalConDescuento + impuesto;

  // Actualizar el objeto 'resultado'
  const params = {
    titulo: "Pre Examen Carol Vazquez",
    numero,
    nombre,
    domicilio,
    servicio: tipoDeServicio,
    kwConsumidos,
    precioKw,
    subtotal,
    descuento: descuentoAplicado, // Actualizado para reflejar el descuento aplicado
    subtotalConDescuento,
    impuesto,
    total,
    isPost: true,
  };
  res.render("PagoDeRecibo", params);
});


export default router;