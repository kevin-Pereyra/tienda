# 🛍️ StyleShop - Landing Page para Tienda de Ropa

Una landing page moderna y completamente funcional para tiendas de ropa con integración directa a WhatsApp para las compras.

## 🌟 Características

- ✨ Diseño moderno y responsive
- 📱 Totalmente optimizado para móviles
- 🛒 Integración completa con WhatsApp para compras
- 🎨 Filtros por categorías de productos
- 📧 Formulario de contacto que redirige a WhatsApp
- 🚀 Botón flotante de WhatsApp con animaciones
- 💫 Efectos de scroll y animaciones suaves
- 🎯 SEO optimizado

## 🚀 Instalación

1. Descarga todos los archivos en una carpeta
2. Abre `index.html` en tu navegador
3. ¡Listo! Tu tienda está funcionando

## ⚙️ Configuración

### 📞 Configurar tu número de WhatsApp

1. Abre el archivo `script.js`
2. En la línea 2, cambia el número de WhatsApp:

```javascript
const WHATSAPP_NUMBER = '962273066'; // Cambia por tu número real
```

**Formato correcto del número:**
- Sin el símbolo +
- Sin espacios ni guiones
- Incluye el código de país
- Ejemplo: `573001234567` (Colombia)
- Ejemplo: `5491123456789` (Argentina)
- Ejemplo: `521234567890` (México)

### 🏪 Personalizar información de la tienda

#### Cambiar nombre y logo
En `index.html`, línea ~15:
```html
<div class="logo">
    <h2><i class="fas fa-tshirt"></i> TU_NOMBRE_TIENDA</h2>
</div>
```

#### Actualizar información de contacto
En `index.html`, sección contacto (~180):
```html
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <div>
        <h3>Dirección</h3>
        <p>Tu dirección aquí</p>
    </div>
</div>
```

### 👕 Agregar/Modificar Productos

Para agregar un nuevo producto, copia este código en la sección productos:

```html
<div class="producto-card" data-category="CATEGORIA">
    <div class="producto-image">
        <img src="URL_DE_LA_IMAGEN" alt="NOMBRE_PRODUCTO">
        <div class="producto-overlay">
            <button class="btn-comprar" onclick="comprarProducto('NOMBRE_PRODUCTO', 'PRECIO')">
                <i class="fab fa-whatsapp"></i> Comprar
            </button>
        </div>
    </div>
    <div class="producto-info">
        <h3>NOMBRE_PRODUCTO</h3>
        <p class="precio">$PRECIO</p>
    </div>
</div>
```

**Categorías disponibles:**
- `mujer` - Ropa de mujer
- `hombre` - Ropa de hombre  
- `accesorios` - Accesorios

### 🎨 Personalizar Colores

En `styles.css`, puedes cambiar los colores principales:

```css
/* Color principal - Busca #e74c3c y reemplaza por tu color */
.cta-button { background: #TU_COLOR; }
.section-title::after { background: #TU_COLOR; }
.category-item.active { background: #TU_COLOR; }
```

### 🖼️ Cambiar Imágenes

#### Imágenes recomendadas:
- **Hero**: 1200x800px
- **Productos**: 500x500px (cuadradas)
- **Sobre nosotros**: 800x600px

#### Fuentes de imágenes gratuitas:
- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)

## 📱 Uso de la Tienda

### Para los clientes:
1. Navegan por los productos
2. Hacen clic en "Comprar"
3. Se abre WhatsApp con un mensaje pre-escrito
4. Pueden completar la compra por WhatsApp

### Para ti como vendedor:
1. Recibes mensajes automáticos en WhatsApp
2. Cada mensaje incluye el producto y precio
3. Puedes responder directamente para cerrar la venta

## 🔧 Funciones Avanzadas

### Agregar productos via JavaScript
```javascript
StyleShop.agregarProducto(
    'Nombre del Producto',
    '99.99',
    'url-de-imagen.jpg',
    'categoria'
);
```

### Cambiar número de WhatsApp dinámicamente
```javascript
StyleShop.actualizarNumeroWhatsApp('573001234567');
```

### Mostrar notificaciones personalizadas
```javascript
StyleShop.showNotification('Mensaje personalizado', 'success');
```

## 📊 Métricas y Analytics

Para agregar Google Analytics:
1. Crea una cuenta en Google Analytics
2. Agrega el código de seguimiento antes de `</head>` en `index.html`

## 🌐 Subir a Internet

### Opciones gratuitas:
1. **Netlify**: Arrastra la carpeta completa
2. **Vercel**: Conecta tu repositorio de GitHub
3. **GitHub Pages**: Sube a un repositorio público

### Dominio personalizado:
1. Compra un dominio (GoDaddy, Namecheap, etc.)
2. Configura DNS para apuntar a tu hosting
3. ¡Tu tienda tendrá su propia dirección web!

## 📞 Soporte

Si necesitas ayuda:
1. Revisa este README completo
2. Verifica que el número de WhatsApp esté correcto
3. Asegúrate de que todas las imágenes carguen correctamente

## 🎯 Tips para Ventas

1. **Usa imágenes de alta calidad** - Los clientes compran con los ojos
2. **Actualiza productos regularmente** - Mantén el catálogo fresco
3. **Responde rápido en WhatsApp** - La velocidad genera confianza
4. **Ofrece promociones** - Agrega badges de "Oferta" o "Nuevo"
5. **Comparte el enlace** - En redes sociales, tarjetas de presentación, etc.

## ✨ Próximas Mejoras

- [ ] Sistema de carrito de compras
- [ ] Integración con pasarelas de pago
- [ ] Panel de administración
- [ ] Sistema de inventario
- [ ] Múltiples idiomas

---

## 📝 Estructura de Archivos

```
TIENDA/
├── index.html          # Página principal
├── styles.css          # Estilos y diseño
├── script.js           # Funcionalidad JavaScript
└── README.md           # Este archivo
```

¡Tu tienda online está lista! 🎉

**Desarrollado con ❤️ para emprendedores que quieren vender online**