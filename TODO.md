# TODO - Juego Memorice App

## Plan de Implementación

### ✅ Información Recopilada:
- Aplicación web móvil (HTML, CSS, JS)
- Juego de memoria con dos niveles: 16 cartas (4x4) y 12 cartas (3x4)
- Cronómetro para medir tiempo de juego
- Formulario de registro: Nombre, Apellido, RUT, Edad, Curso, Teléfono
- Colores específicos: #F96B01, #7FB827, #115D92
- Imágenes: ic_card_back.png, ic_pair_1.png hasta ic_pair_8.png

### 📋 Tareas Completadas:

#### Archivos Creados:
- [x] index.html - Estructura principal con selector de nivel y grid de cartas
- [x] styles.css - Diseño responsive con colores específicos y animaciones
- [x] script.js - Lógica del juego con dos niveles, cronómetro y formulario
- [x] images/ - Carpeta con README para las imágenes

#### Funcionalidades Implementadas:
- [x] Selector de nivel de dificultad (12 vs 16 cartas)
- [x] Grid adaptable (3x4 para 12 cartas, 4x4 para 16 cartas)
- [x] Cronómetro que inicia al primer clic
- [x] Animación de volteo de cartas
- [x] Detección automática de pares
- [x] Formulario de registro al completar
- [x] Diseño responsive para móviles
- [x] Integración de colores corporativos (#F96B01, #7FB827, #115D92)
- [x] Validación de RUT chileno
- [x] Almacenamiento local de participantes
- [x] Manejo de visibilidad de página (pausa cronómetro)

#### Características Adicionales Implementadas:
- [x] Modales para victoria y registro exitoso
- [x] Botones de control (Nuevo Juego, Cambiar Nivel)
- [x] Animaciones CSS avanzadas
- [x] Responsive design para múltiples tamaños de pantalla
- [x] Funciones de debugging disponibles en consola
- [x] **NUEVO:** Preview de cartas por 3 segundos al iniciar juego
- [x] **NUEVO:** Mensaje "Memoriza!" durante el preview
- [x] **NUEVO:** Mensaje "¡Comienza!" después del preview
- [x] **NUEVO:** Bloqueo de clics durante el preview

### 📋 Tareas Pendientes:

#### Imágenes Requeridas:
- [ ] ic_card_back.png - Imagen de reverso de cartas
- [ ] ic_pair_1.png hasta ic_pair_8.png - Imágenes de los 8 pares

#### Pasos de Seguimiento:
- [x] Probar funcionalidad en navegador
- [x] Verificar responsive design
- [x] Probar ambos niveles de dificultad
- [x] Validar cronómetro y formulario
- [x] Implementar y probar preview de 3 segundos
- [ ] Agregar las imágenes proporcionadas por el usuario
- [ ] Prueba final con imágenes reales

### 🎯 Estado Actual:
**✅ APLICACIÓN COMPLETAMENTE FUNCIONAL**

La aplicación está 100% funcional y lista para usar. Solo falta agregar las imágenes personalizadas que proporcionará el usuario:
- ic_card_back.png (reverso de cartas)
- ic_pair_1.png hasta ic_pair_8.png (imágenes de los pares)

### 🚀 Funcionalidades Implementadas y Probadas:
1. **Selección de Niveles:** Fácil (12 cartas) y Difícil (16 cartas) ✅
2. **Preview de Memorización:** 3 segundos mostrando todas las cartas ✅
3. **Cronómetro:** Inicia al primer clic, pausa/reanuda correctamente ✅
4. **Lógica de Juego:** Volteo, emparejamiento, detección de victoria ✅
5. **Formulario de Registro:** Con validación de RUT chileno ✅
6. **Diseño Responsive:** Optimizado para móviles ✅
7. **Colores Corporativos:** #F96B01, #7FB827, #115D92 ✅
8. **Almacenamiento:** Datos guardados en localStorage ✅
