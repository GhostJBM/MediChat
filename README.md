# MediChat

Aplicación web enfocada en la salud, donde el usuario tiene la posibilidad de encontrar la unidad de salud más cercana mediante geolocalización, obtener información adecuada, acceder a un calendario, en donde se vean reflejados los días en los cuales habrán unidades móviles. Además de esto, también tiene la disponibilidad de un asistente virtual al cual se le puede presentar dudas y acceder todo el tiempo mediante una burbuja flotante.

## Estructura del proyecto
-Backend/modulos/src
    |-models
        Enfermedades_model.js
        Evento.js
        informacionSalud.js
        UnidadDeSalud.js
        UnidadUsuario.js
        Usuario_Enfermedades.js
        Usuario.js
    |red
        respuestas.js
    |routes
        calendario.js
        chat.js
        infoSalud.js
        login.js
        mapsRoutes.js
        precalificaciones.js
    |services
        chatbot.js
        maps.js
    app.js
    index.js
    config.js
    db.js
    dbMongo.js
-Front-End
    |-public
        index.html
        LOGO-MEDICHAT.ico
        robots.txt
    |-src
        |-assets
            logo.png
            logo1.png
            logo2.png
            logo3.png
            mascota.png
        |-components
            |-CarruselEventos
                CarruselEventos.css
                CarruselEventos.js
            |-CarruselTips
                CarruselTips.css
                CarruselTips.js
            |-FloatingChat
                FloatingChat.css
                FloatingChat.js
            |-Footer
                Footer.css
                Footer.js
            |-Header
                Hearder.css
                Hearder.js
            |-Map
                MapGoogle.js
                MapLeaflet.js
            |-Tip
                Tip.css
                Tip.js
            |-TipFilter
                TipFilter.css
                TipFilter.js
        |-context
            ChatContext.js
        |-layouts
            MainLayout.css
            MainLayout.js
        |-pages
            |-Calendar
                Calendar.css
                Calendar.js
            |-Home
                Home.css
                Home.js
            |-Map
                Map.css
                Map.js
            |-SplashScreen
                SlapshScreen.css
                SplashScreen.js
            |-TipList
                TipList.css
                TipList.js
        App.css
        App.js
        index.css
        index.js
    

## Tecnologías utilizadas

- **Frontend:** React (JavaScript)
- **Backend:** Express (Node.js + JavaScript)
- **Base de datos:** Microsoft SQL Server (MSSQL) y MongoDB (Mongoose) – conexión activa y consultas reales
- **Estilos:** CSS personalizado
- **Gestión de estado:** `useState`, `useEffect`
- **Consumo de API:** `fetch`
- **Control de versiones:** Git + GitHub
- **Herramientas de desarrollo:** VS Code, Postman
  
## Instalación

### 1️. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
```

### 2. Instalar dependencias
```
# Frontend
cd Front-End
npm install
```
### 3. Correr el Servidor
```
En Backend
npm run dev
```
### 4. Correr la Página Web
```
En el Front-End
npm start
```
## Endpoints disponibles
```markdown
- `GET /API/calendario` → Devuelve lista de eventos y ferias
- `GET /API/informacionSalud` → devuelve una lista de recomendaciones basicas de salud
- `POST /API/MapHospitales` → devuelve una lista de hospitales cercanos en un radio de 5000 en base a la ubicación del individuo
- `POST /API/Enfermedades` → devuelve una lista de posibles enfermedades en base a un sintoma
- `POST /API/chatBot` → permite mantener una conversación con el chat bot de la aplicación en base a contextos, etc
```

## Services
- `DialogFlow`: plataforma creada por google con la facilidad de crear un chatbot
- `GoogleMaps`: API de servicio de google que permite Jalar el mapa global
- `nota obligatoria`: la key api de google deben ser colocadas por usted manualmente en:
   Ubicación: .\Backend\modulos\src\services\maps.js\BuscarHospitales

   export async function BuscarHospitales(lat, lng, radius = 5000) {
    try{
        const apiKey = "ingrese su key API DE GOOGLE MAPS AQUÍ"/*
        obligatorio tener las api de Maps JavaScript API
        Places API
        Geocoding API
        */

        const Url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&keyword=hospital&key=${apiKey}`;


        const response = await fetch( Url)
        const data = await response.json();

        if(data.status === "OK"){
            return data.results.map(place =>({
            name: place.name,
            address: place.vicinity,
            location: place.geometry.location,
            place_id: place.place_id
            }))
        }else {
            throw new Error("Error en el lugar de origen: " + data.status);
        }
    }
    catch(err){
        console.error(err.message);
        throw err;
    }
}
-`Front-End map`:
Ubicación: .\Front-End\src\components\Map\MapGoogle.js\MapaGoogle
const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'Ingrese su Key de google Maps Aquí',
    });

-`para el chatbot igual`: 
 ubicación: .\Backend\modulos\src\config.js\config
import dotenv from 'dotenv'
import app from './app.js';

 export const config = {
    //Google Credenciales
    GOOGLE_PROJECT_ID:'apimedichat',
    DF_LANGUAGE_CODE: 'es',
    GOOGLE_CLIENT_EMAIL:"josiel@apimedichat.iam.gserviceaccount.com",
    GOOGLE_PRIVATE_KEY:"Ingrese su key de dialogFlow justo aquí",
    app:{
        port: process.env.port || 3000,
    }
};


## Base de Datos

Este proyecto utiliza **Microsoft SQL Server** y **MongoDB** como motor de base de datos.


### Nombre de la base: `MediChat`

Para que el backend funcione correctamente, es necesario tener una instancia local de SQL Server con la base `MediChat` creada y poblada con los datos correspondientes.

> ⚠️ La base de datos no está incluida en el repositorio. Se debe crear manualmente o importar desde un archivo `.sql` si se proporciona por separado.

#### 🔐 Conexión

La conexión se configura en el archivo `db.js` ubicado en `./Backend/modulos/src/db.js`:
La conexión de MoongoDB se configura en `dbMongo.js` en `./Backend/modulos/src/dbMongo.js`:
```js
import mssql from 'mssql';

const connectionSettings = {
  server: 'localhost',
  database: 'MediChat',
  user: '***',
  password: '1234',
  options: {
    encrypt: true,
    trustServerCertificate: true,
    port: 1433
  }
};
```
```js
import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/Medichat', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then().catch(err => console.error('Error al conectar MongoDB', err));

export default mongoose;
```

## 🧭 Guía Rápida de Usuario

Una guía completa de uso está disponible en [`userguide.md`](./userguide.md).

A continuación, un resumen rápido:

- 📅 Calendario de unidades de salud móviles.
- 📍 Geolocalización para encontrar unidades cercanas.
- 💬 Asistente virtual disponible 24/7.
- ❕ Información de salud necesaria.
- 🖥️ Interfaz responsiva y fácil de usar.

# Proyecto Desarrollado con fines de resolver una problematica para Hackathon Nicaragua 2025/ Categoria aficionado
Nombres: Adrian Medina  amedinapya18@gmail.com
         Josiel Morales JosielBenavidez@gmail.com

GitHub: @AdrianMedina2
        @GhostJBM
