// Configuración del número de WhatsApp (CAMBIAR POR TU NÚMERO)
const WHATSAPP_NUMBER = '962273066'; // Reemplaza con tu número de WhatsApp (sin +, espacios o guiones)

// Variables globales
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const categoryItems = document.querySelectorAll('.category-item');
const productCards = document.querySelectorAll('.producto-card');

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeScrollEffects();
    initializeSmoothScrolling();
});

// Configurar todos los event listeners
function initializeEventListeners() {
    // Hamburger menu toggle
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Category filter
    categoryItems.forEach(item => {
        item.addEventListener('click', () => filterProducts(item.dataset.category));
    });
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

// Toggle mobile menu
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Animate hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    if (hamburger.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
}

// Close mobile menu
function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    
    // Reset hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    bars[0].style.transform = 'none';
    bars[1].style.opacity = '1';
    bars[2].style.transform = 'none';
}

// Filter products by category
function filterProducts(category) {
    // Update active category
    categoryItems.forEach(item => {
        item.classList.remove('active');
    });
    
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // Filter products with animation
    productCards.forEach(card => {
        if (category === 'todos' || card.dataset.category === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Función para solicitar servicios
function solicitarServicio(nombreServicio, precio) {
    // Crear mensaje personalizado para WhatsApp
    const mensaje = `¡Hola! Me interesa el siguiente servicio:

🎨 *${nombreServicio}*
💰 Precio: ${precio}

Me gustaría obtener más información sobre:
- Tiempo de entrega
- Proceso de trabajo
- Requisitos del diseño
- Formas de pago
- Ver ejemplos de trabajos anteriores

¡Gracias!`;
    
    // Crear URL de WhatsApp
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    
    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappURL, '_blank');
    
    // Mostrar mensaje de confirmación
    showNotification('Redirigiendo a WhatsApp para consultar servicio...', 'success');
}

// Función principal para comprar producto
function comprarProducto(nombreProducto, precio) {
    // Crear mensaje personalizado para WhatsApp
    const mensaje = `¡Hola! Me interesa comprar el siguiente producto:

🛍️ *${nombreProducto}*
💰 Precio: ${precio}

¿Podrías darme más información sobre:
- Disponibilidad
- Tallas disponibles
- Tiempo de entrega
- Métodos de pago

¡Gracias!`;
    
    // Crear URL de WhatsApp
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    
    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappURL, '_blank');
    
    // Opcional: Mostrar mensaje de confirmación
    showNotification('Redirigiendo a WhatsApp...', 'success');
}

// Mostrar notificaciones
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Estilos para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Manejar envío del formulario de contacto
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const nombre = formData.get('nombre') || e.target.querySelector('input[type="text"]').value;
    const email = formData.get('email') || e.target.querySelector('input[type="email"]').value;
    const mensaje = formData.get('mensaje') || e.target.querySelector('textarea').value;
    
    // Crear mensaje para WhatsApp
    const whatsappMessage = `*Nuevo mensaje de contacto*

👤 *Nombre:* ${nombre}
📧 *Email:* ${email}
💬 *Mensaje:* ${mensaje}

Enviado desde el sitio web de Luzmar`;
    
    // Crear URL de WhatsApp
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Limpiar formulario
    e.target.reset();
    
    // Mostrar mensaje de confirmación
    showNotification('¡Mensaje enviado! Te contactaremos pronto.', 'success');
}

// Efectos de scroll
function initializeScrollEffects() {
    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Animación de elementos al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos que necesitan animación
    document.querySelectorAll('.producto-card, .feature, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Smooth scrolling para los enlaces de navegación
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Función para actualizar el número de WhatsApp
function actualizarNumeroWhatsApp(nuevoNumero) {
    WHATSAPP_NUMBER = nuevoNumero;
    
    // Actualizar también el botón flotante
    const whatsappFloat = document.querySelector('.whatsapp-float a');
    if (whatsappFloat) {
        whatsappFloat.href = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola! Me interesa conocer más sobre sus productos`;
    }
    
    console.log(`Número de WhatsApp actualizado a: ${nuevoNumero}`);
}

// Función para agregar productos dinámicamente
function agregarProducto(nombre, precio, imagen, categoria) {
    const productosGrid = document.querySelector('.productos-grid');
    
    const productoHTML = `
        <div class="producto-card" data-category="${categoria}">
            <div class="producto-image">
                <img src="${imagen}" alt="${nombre}">
                <div class="producto-overlay">
                    <button class="btn-comprar" onclick="comprarProducto('${nombre}', '${precio}')">
                        <i class="fab fa-whatsapp"></i> Comprar
                    </button>
                </div>
            </div>
            <div class="producto-info">
                <h3>${nombre}</h3>
                <p class="precio">$${precio}</p>
            </div>
        </div>
    `;
    
    productosGrid.insertAdjacentHTML('beforeend', productoHTML);
}

// Detectar dispositivos móviles
function esMobile() {
    return window.innerWidth <= 768;
}

// Optimización para móviles
if (esMobile()) {
    // Reducir animaciones en móviles para mejor rendimiento
    document.documentElement.style.setProperty('--animation-duration', '0.2s');
}

// Lazy loading para imágenes
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Inicializar lazy loading si hay imágenes con data-src
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelectorAll('img[data-src]').length > 0) {
        initializeLazyLoading();
    }
});

// Export para uso global
window.StyleShop = {
    comprarProducto,
    actualizarNumeroWhatsApp,
    agregarProducto,
    showNotification
};