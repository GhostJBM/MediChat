# 🧭 Guía de Usuario – MediChat

## 🏁 Introducción

**MediChat** es una aplicación web enfocada en la salud. Permite a los usuarios:

- Ver un calendario con jornadas médicas móviles.
- Encontrar la unidad de salud más cercana mediante geolocalización.
- Consultar dudas con un asistente virtual disponible 24/7.
- Acceder a información de salud necesaria.

---

## 📲 Compatibilidad

- Optimizada para pantallas medianas y grandes.
- Requiere navegador con soporte para JavaScript y geolocalización.
  
---

## 🖥️ Requisitos para usar la app

- Navegador moderno (Chrome, Firefox, Edge).
- Conexión a internet.
- Permitir acceso a la ubicación para funciones de geolocalización.

---

## 🧭 Navegación general

- Al ingresar, se carga la página de inicio.
- El header está disponible para la navegación cómoda entre los distintos componentes.
- El inicio muestra un carrusel de consejos destacados y un carrusel de próximos eventos o jornadas de salud.
  - El carrusel de consejos tiene un botón que direcciona a la página de consejos o información de salud.
  - El carrusel de próximos eventos tiene también un botón que direcciona a la página del calendario.
- La burbuja flotante del asistente virtual está disponible en todo momento.

---

## 📅 Uso del calendario

- Los días con eventos médicos aparecen resaltados.
  - Al hacer click en un día, se muestra:
    - Descripción de la jornada.
    - Tipo de jornada (vacunación, feria médica, etc.)
- Al hacer click en el botón de "Hoy" se ubica en el mes actual.

---

## 📍Uso del mapa de unidades de salud cercanas.

- Al permitir geolocalización, se muestra la unidad más cercana.
- Se puede navegar dentro del mapa.
  - Muestra las unidades de salud cercanas con pines.
- Se pueden filtrar las unidades de salud cercanas por tipos de unidades.
- Al hacer click en el botón "Ubicarme", se centra el mapa en la ubicación del usuario.
  
---

## 💬 Asistente virtual

- Accesible desde la burbuja flotante en la esquina inferior derecha
- Podés preguntar sobre:
  - Ubicación de unidades
  - Horarios de jornadas
  - Temas generales de salud
- Disponible 24/7

---

## ❕Uso de la página de consejos

- Se muestra la información de salud mediante tarjetitas, las cuales se ordenan una vista de grid.
  - Los consejos se pueden filtrar según el tipo.

---

## ✅ Funcionalidades disponibles

| Función                        | Estado     |
|-------------------------------|------------|
| Calendario de jornadas        | ✅ Activo   |
| Mapa con unidades cercanas    | ✅ Activo   |
| Asistente virtual             | ✅ Activo   |
| Página de consejos            | ✅ Activo   |


---

## 📚 Glosario

- **Jornada médica:** Evento temporal donde se ofrecen servicios de salud.
- **Unidad móvil:** Vehículo equipado para atención médica en zonas específicas.
- **Geolocalización:** Función que permite ubicar al usuario en el mapa.

---

## 🛠️ Problemas comunes

| Problema                          | Solución                                      |
|----------------------------------|-----------------------------------------------|
| No se carga el calendario        | Verificá conexión al backend (`localhost:5500`) |
| No carga la página del mapa      | Revisá permisos del navegador                 |
| El asistente no responde         | Verificá conexión a la API                     |

---

## 📞 Soporte

Para dudas técnicas o sugerencias, contactá a:  
📧 **josielbenavidez@gmail.com**


