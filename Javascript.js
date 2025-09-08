// =======================
// Variables y elementos DOM
// =======================

// Elementos del DOM
const container = document.querySelector('.tickets-container');
const infoDiv = document.getElementById('selection-info');
const selectedTicketsField = document.getElementById('selectedTickets');

// Listas de tickets
const reservedTickets = []; // Tickets ya reservados (simulados)
const purchasedTickets = []; // Tickets ya comprados (simulados)

const selectedTickets = []; // Tickets seleccionados por usuario

// Constantes de precios
const PRICE_USD = 1;
const PRICE_VES = 160;

// =======================
// Funciones de utilidad
// =======================

/**
 * Actualiza la vista con la información de los tickets seleccionados y totales.
 */
function updateSelectionDisplay() {
  const formSection = document.getElementById('form');

  if (selectedTickets.length === 0) {
    infoDiv.innerHTML = `
      <p>Tickets seleccionados: 0</p>
      <p>Valor de ticket $1</p>
      <p>Total en USD: $0</p>
      <p>Total en VES: 0 Bs.</p>
      <button disabled>COMPRAR</button>
    `;
    selectedTicketsField.value = '';
    formSection.style.display = 'none'; // Asegura que esté oculto si no hay selección
    return;
  }

  const selectedList = document.createElement('p');
  selectedList.textContent = 'Tickets seleccionados: ' + selectedTickets.join(', ');

  const totalUSD = selectedTickets.length * PRICE_USD;
  const totalVES = selectedTickets.length * PRICE_VES;

  const priceInfo = document.createElement('p');
  priceInfo.innerHTML = `
    Valor de ticket $${PRICE_USD} <br>
    Total en USD: $${totalUSD} <br>
    Total en VES: ${totalVES} Bs.
  `;

  const buyButton = document.createElement('button');
  buyButton.textContent = 'COMPRAR';
  buyButton.onclick = () => {
    formSection.style.display = 'block'; // Mostrar el formulario
    selectedTicketsField.value = selectedTickets.join(', ');
    window.scrollTo({ top: formSection.offsetTop, behavior: 'smooth' });
  };

  infoDiv.innerHTML = '';
  infoDiv.appendChild(selectedList);
  infoDiv.appendChild(priceInfo);
  infoDiv.appendChild(buyButton);

  selectedTicketsField.value = selectedTickets.join(', ');
}

/**
 * Función para manejar el botón "Hacer Pedido" y enviar los datos
 */
function placeOrder() {
  const nombre = document.getElementById('name').value.trim();
  const cedula = document.getElementById('cedula').value.trim();
  const telefono = document.getElementById('phone').value.trim();
  const metodoPago = document.getElementById('paymentMethod').value;
  const ticketsSeleccionados = document.getElementById('selectedTickets').value;
  const referencia = document.getElementById('paymentReference').value.trim();

  if (!nombre || !cedula || !telefono || !metodoPago || !referencia) {
    alert('Por favor complete todos los datos requeridos.');
    return;
  }

  if (!ticketsSeleccionados) {
    alert('Por favor seleccione al menos un ticket.');
    return;
  }

  // Crear el cuerpo del mensaje
  const mensaje = `
Pedido nuevo - Rifa Iphone 12 Pro Max

Nombre y apellido: ${nombre}
Cédula: ${cedula}
Número de teléfono: ${telefono}
Método de pago: ${metodoPago}
Tickets seleccionados: ${ticketsSeleccionados}
Referencia: ${referencia}
Por favor, confirme la compra.
`;

  // Codificar el mensaje para URL
  const mensajeCodificado = encodeURIComponent(mensaje);

  // Número de WhatsApp (incluyendo código de país sin el signo +)
  const numeroWhatsApp = '584124303809';

  // Crear la URL para WhatsApp
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

  // Abrir en una nueva pestaña
  window.open(urlWhatsApp, '_blank');
}

// =======================
// Funciones de control y eventos
// =======================

/**
 * Inicia la orden, cierra el modal de bienvenida y muestra el contenido principal.
 */
function startOrder() {
  document.getElementById('welcomeModal').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';
}

/**
 * Crea los tickets y asigna eventos de selección
 */
function createTickets() {
  for (let i = 0; i < 1000; i++) {
    const ticket = document.createElement('div');
    ticket.className = 'ticket';
    ticket.textContent = i.toString().padStart(3, '0');

    // Marcar como reservados o comprados
    if (reservedTickets.includes(i) || purchasedTickets.includes(i)) {
      ticket.classList.add('reserved');
    }

    // Evento click para seleccionar/deseleccionar
    ticket.addEventListener('click', () => {
      if (reservedTickets.includes(i) || purchasedTickets.includes(i)) return; // No permitir selección

      const ticketNumber = i;

      if (selectedTickets.includes(ticketNumber)) {
        // Deseleccionar
        selectedTickets.splice(selectedTickets.indexOf(ticketNumber), 1);
        ticket.classList.remove('selected');
      } else {
        // Seleccionar
        selectedTickets.push(ticketNumber);
        ticket.classList.add('selected');
      }

      // Actualizar vista
      updateSelectionDisplay();
    });

    container.appendChild(ticket);
  }
}

// =======================
// Inicialización
// =======================

// Cuando la página cargue, crear tickets y establecer estado inicial
document.addEventListener('DOMContentLoaded', () => {
  createTickets();
  updateSelectionDisplay();

  // Asignar evento al botón "Hacer Pedido"
  const btnPlaceOrder = document.querySelector('.btn-order');
  btnPlaceOrder.onclick = placeOrder;

  // Asignar evento al botón "Comenzar" en el modal
  const btnStart = document.querySelector('.btn-start');
  btnStart.onclick = startOrder;
});










// Función para manejar la visualización de detalles bancarios
function handlePaymentMethodChange() {
  const method = document.getElementById('paymentMethod').value;
  const container = document.getElementById('bankDetailsContainer');

  // Ocultar todos los detalles primero
  document.querySelectorAll('.bank-details').forEach(div => {
    div.style.display = 'none';
  });

  // Mostrar solo el correspondiente
  if (method === 'Pago Movil') {
    document.getElementById('pagoMovilDetails').style.display = 'block';
    container.style.display = 'block';
  } else if (method === 'Calzado') {
    document.getElementById('calzadoDetails').style.display = 'block';
    container.style.display = 'block';
  } else if (method === 'Efectivo') {
    document.getElementById('efectivoDetails').style.display = 'block';
    container.style.display = 'block';
  } else if (method === 'Binance') {
    document.getElementById('binanceDetails').style.display = 'block';
    container.style.display = 'block';
  } else if (method === 'Paypal') {
    document.getElementById('paypalDetails').style.display = 'block';
    container.style.display = 'block';
  } else if (method === 'Zelle') {
    document.getElementById('zelleDetails').style.display = 'block';
    container.style.display = 'block';
  } else {
    // Si no selecciona nada, ocultar
    container.style.display = 'none';
  }
}

// Asignar evento al cambiar método de pago
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('paymentMethod').addEventListener('change', handlePaymentMethodChange);

});







