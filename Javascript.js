// =======================
// Variables y elementos DOM
// =======================

// Elementos del DOM
const container = document.querySelector('.tickets-container');
const infoDiv = document.getElementById('selection-info');
const selectedTicketsField = document.getElementById('selectedTickets');

// Listas de tickets
const reservedTickets = []; // Tickets ya reservados (simulados)
const purchasedTickets = [254, 754, 298, 798, 57, 557, 79, 579, 297, 797,  
118, 618, 411, 911, 343, 843, 478, 978, 377, 877, 46, 546, 142, 642, 215,
715, 20, 520, 80, 580, 281, 781, 375, 875, 415, 915, 330, 830, 13, 513, 399,
899, 406, 906, 264, 764, 383, 883, 384, 884, 385, 885, 386, 886, 387, 887,
77, 257, 577, 757, 423, 923, 429, 929, 310, 810, 15, 515, 208, 708, 34, 534,
12, 512, 96, 596, 113, 613, 320, 820, 19, 519, 32, 532, 283, 783, 428, 928,
228, 728, 7, 507, 107, 607, 506, 21, 521, 31, 531, 194, 694, 11, 511, 315,
815, 238, 738, 184, 684, 442, 942, 317, 817, 83, 583, 304, 804, 41, 541, 192,
692, 220, 720, 431, 931, 284, 784, 448, 948, 444, 944, 484, 984, 44, 544, 480,
980, 440, 940, 144, 644, 404, 904, 400, 900, 441, 941, 488, 988, 4, 504, 244,
744, 224, 724, 84, 584, 104, 604, 401, 901, 408, 908, 424, 924, 482, 982, 40,
540, 88, 588, 180, 680, 17, 617, 24, 524, 149, 649, 119, 619, 313, 813, 27,
527, 348, 848, 388, 888, 245, 745, 87, 587, 95, 595, 132, 632, 250, 750, 
205, 705, 120, 620, 5, 505, 333, 833, 414, 914, 148, 648, 133, 633, 22, 522,
23, 523, 127, 627, 10, 510, 248, 748, 307, 807, 308, 808, 311, 811, 117, 517,
115, 615, 126, 626, 14, 514, 64, 564, 30, 530, 382, 882, 376, 876, 111, 611,
29, 529, 1, 501, 69, 569, 237, 737, 299, 799, 350, 850, 321, 821, 71, 571, 
47, 547, 188, 688, 189, 689, 473, 973, 147, 647, 70, 570, 122, 622, 8, 508,
125, 625, 128, 628, 360, 860, 221, 721, 109, 609, 105, 605, 78, 578, 246, 746,
3, 503, 210, 710, 100, 600, 328, 828, 112, 612, 272, 772, 271, 771, 247,
747, 175, 675, 50, 550, 43, 543, 121, 621, 331, 831, 483, 983, 16, 516, 
203, 703, 190, 690, 252, 752, 110, 610, 467, 967, 469, 969, 209, 709, 455, 955,
486, 986, 255, 755, 108, 608, 2, 502, 90, 590, 349, 849, 435, 935, 28, 528, 
25, 525, 0, 500, 9, 509, 58, 558, 211, 711, 130, 630, 170, 670, 225, 725,
177, 677, 493, 993, 269, 769, 74, 574, 42, 542, 101, 601, 048, 548, 056,
556, 018, 518, 026, 526, 099, 599, 191, 691, 445, 945
]; // Tickets ya comprados (simulados)

const selectedTickets = []; // Tickets seleccionados por usuario

// Constantes de precios
const PRICE_USD = 2;
const PRICE_VES = 280;

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
      <p>Valor de ticket $2</p>
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
  for (let i = 0; i < 500; i++) {
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



