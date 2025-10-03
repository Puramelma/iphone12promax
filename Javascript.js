// =======================
// Variables y elementos DOM
// =======================

// Elementos del DOM
const container = document.querySelector('.tickets-container');
const infoDiv = document.getElementById('selection-info');
const selectedTicketsField = document.getElementById('selectedTickets');

// Listas de tickets
const reservedTickets = []; // Tickets ya reservados (simulados)
const purchasedTickets = [123, 135, 200, 199, 305, 492, 789, 660, 631, 624, 629,
 634, 643, 653, 650, 656, 655, 664, 669, 85, 86, 93, 
 372, 362, 161, 159, 152, 145, 141, 139, 163, 164, 167, 198, 181, 45, 51, 49, 53, 73, 72, 63, 202, 197, 187, 66, 65, 59,
 	62, 153, 157, 872, 868, 839, 477, 825, 800, 925, 918, 207, 468, 263, 260, 278, 416, 463, 657, 666, 693, 91, 92, 94, 89, 131, 137, 138, 143,
  68, 60, 961, 805, 996, 34, 208, 534, 708, 12, 96, 512, 596, 613, 113, 320, 820, 603, 103,
  212, 987, 991, 130, 311, 811, 517, 117, 115, 615, 626, 126,
  81, 69, 569, 737, 237, 299, 799, 850, 350, 99, 599, 691, 191, 445, 945,
  35, 675, 175, 50, 550, 52, 989, 391, 105, 605, 578, 78, 
  61, 136, 316, 216, 465, 536, 736, 816, 38, 39, 951,
  300, 616, 778, 916, 998, 76, 116, 168, 222, 54, 999,
  33, 533, 862, 82, 582, 597, 97, 18, 26, 75, 518, 526, 576,
  48, 56, 548, 556, 101, 601, 42, 542, 574, 74, 269, 769,
  993, 493, 177, 225, 677, 725, 670, 170, 211, 277, 711, 777,
  0, 9, 58, 500, 509, 558, 25, 525, 528, 28, 349, 435, 849, 935,
  590, 90,  2, 502, 37, 98, 608, 108, 255, 755, 986, 486, 
  455, 955, 209, 709, 36, 55, 67, 623, 969, 469, 467, 967,
  610, 110, 252, 752, 690, 190, 203, 703, 516, 16, 983, 483,
  331, 831, 121, 621, 543, 43, 247, 747, 771, 271, 272, 772,
   612, 112, 328, 828, 100, 600, 710, 210, 3, 503, 246, 746,
   609, 109, 221, 721, 860, 360, 125, 128, 625, 628, 8, 508,
  622, 122, 647, 147, 70, 570, 473, 973, 188, 189, 688, 689,
  47, 547, 571, 71, 821, 321, 29, 529, 501, 1, 611, 111,
  376, 876, 882, 382, 30, 530, 564, 64, 14, 514, 807, 808, 307, 308,
  248, 748, 510, 10, 23, 127, 523, 627, 133, 22, 522, 633,
  414, 914, 648, 148, 5, 505, 333, 833, 620, 120, 205, 705,
  750, 250, 132, 632, 87, 587, 595, 95, 745, 245, 388, 348, 848, 888,
  527, 27, 119, 619, 813, 313, 649, 149, 24, 524, 17, 617,
  784, 284, 448, 948, 444, 944, 984, 484, 544, 44, 480, 980, 940, 440, 144, 644, 404, 904, 900, 400, 441, 941, 988, 488, 504, 4, 244, 744, 724, 224, 84, 584, 604, 104, 901, 401, 408, 908, 924, 424, 482, 982, 40, 88, 180, 540, 588, 680,
  541, 41, 192, 692, 720, 220, 431, 931, 83, 583, 804, 304, 
  817, 317, 238, 738, 684, 184, 442, 942, 815, 315, 507, 7, 6, 506, 521, 21, 31, 531, 694, 194,
  283, 783, 928, 428, 228, 728, 
  20, 80, 520, 580, 281, 781, 875, 375, 415, 915, 830, 330, 13, 513, 899, 399, 406, 906, 264, 764, 883, 383, 384, 884, 885, 886, 887, 385, 386, 387,
  11, 511, 19, 32, 519, 532, 15, 515, 810, 310, 423, 429, 923, 929,
  77, 577, 757, 257, 254, 298, 754, 798,
  557, 57, 79, 118, 297, 411, 579, 797, 911, 618, 343, 843, 478, 978, 377, 877, 46, 546, 142, 215, 642, 715, 369, 869,
  357, 474, 687, 857, 102, 107, 106, 114, 124, 129, 134, 140, 146, 151, 150, 154, 158, 155, 266, 390, 952,
  186, 182, 183, 178, 176, 280, 452, 425, 995, 992, 990, 334, 433, 733, 734, 896, 892, 958, 235, 195, 322, 239, 240,
  213, 223, 196, 172, 226, 201, 231, 270, 282, 290, 262, 267, 303, 174, 204, 214, 217, 218, 219, 227, 234, 236, 241, 242, 243, 268, 
  156, 273, 274, 275, 292, 293, 294, 295, 296, 312, 314, 318, 326, 325, 327, 319, 880, 
  160, 162, 165, 166, 169, 193, 185, 179, 173, 171, 206, 229, 230, 232, 233, 258, 256, 253, 251, 249, 259, 261, 265, 276, 279, 289, 288, 287, 286, 285,
  367, 337, 291, 363, 538, 770, 840, 946, 819, 997, 332, 459, 723, 402, 352, 652, 731, 555, 910
                          

]; // Tickets ya comprados (simulados)

const selectedTickets = []; // Tickets seleccionados por usuario

// Constantes de precios
const PRICE_USD = 1;
const PRICE_VES = 200;

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
/**
 * Crea los tickets y asigna eventos de selección
 */
function createTickets() {
  container.innerHTML = ""; // limpiar antes de generar

  for (let i = 0; i < 1000; i++) {
    // ❌ Si el ticket está comprado → no se muestra
    if (purchasedTickets.includes(i)) {
      continue;
    }

    const ticket = document.createElement('div');
    ticket.className = 'ticket';
    ticket.textContent = i.toString().padStart(3, '0');

    // Marcar como reservado
    if (reservedTickets.includes(i)) {
      ticket.classList.add('reserved');
    } else {
      // 🎟️ Evento click SOLO si está libre
      ticket.addEventListener('click', () => {
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
    }

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






























