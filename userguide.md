# 🧭 Guía de Usuario – MediChat

## 🏁 Introducción

**MediChat** es una aplicación web enfocada en la salud. Permite a los usuarios:

- Ver un calendario con jornadas médicas móviles.
- Encontrar la unidad de salud más cercana mediante geolocalización.
- Consultar dudas con un asistente virtual disponible 24/7.
- Acceder a información de salud necesaria.

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
  - El c
- El mapa muestra unidades de salud cercanas si se permite la ubicación
- La burbuja flotante del asistente virtual está disponible en todo momento

---

## 📅 Uso del calendario

- Los días con eventos médicos aparecen resaltados
- Al hacer clic en un día, se muestra:
  - Tipo de jornada (vacunación, feria médica, etc.)
  - Horario
  - Ubicación

---

## 📍 Buscar unidad de salud cercana

- Al permitir geolocalización, se muestra la unidad más cercana
- Si no se permite, se puede buscar manualmente por zona

---

## 💬 Asistente virtual

- Accesible desde la burbuja flotante en la esquina inferior derecha
- Podés preguntar sobre:
  - Ubicación de unidades
  - Horarios de jornadas
  - Temas generales de salud
- Disponible 24/7

---

## 🛠️ Problemas comunes

| Problema                          | Solución                                      |
|----------------------------------|-----------------------------------------------|
| No se carga el calendario        | Verificá conexión al backend (`localhost:5500`) |
| No aparece la ubicación          | Revisá permisos del navegador                 |
| El asistente no responde         | Verificá conexión a la API de OpenAI          |

---

## 📞 Soporte

Para dudas técnicas o sugerencias, contactá a:  
📧 **josielbenavidez@gmail.com**


