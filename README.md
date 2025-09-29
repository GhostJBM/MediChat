# MediChat

Aplicación web enfocada en la salud, donde el usuario tiene la posibilidad de encontrar la unidad de salud más cercana mediante geolocalización, obtener información adecuada, acceder a un calendario, en donde se vean reflejados los días en los cuales habrán unidades móviles. Además de esto, también tiene la disponibilidad de un asistente virtual al cual se le puede presentar dudas y acceder todo el tiempo mediante una burbuja flotante.

## Estado del proyecto
✅ Funcional – frontend y backend conectados a base de datos real  

## Tecnologías utilizadas

- **Frontend:** React (JavaScript)
- **Backend:** Express (Node.js + JavaScript)
- **Base de datos:** Microsoft SQL Server (MSSQL) – conexión activa y consultas reales
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
npm run dev
```
### 4. Correr la Página Web
```
npm start
```
## Endpoints disponibles
```markdown
- `GET /api/calendario` → Devuelve lista de eventos móviles
- `POST /api/pregunta` → Envía consulta al asistente virtual
```

## Base de Datos

Este proyecto utiliza **Microsoft SQL Server** como motor de base de datos.

### Nombre de la base: `MediChat`

Para que el backend funcione correctamente, es necesario tener una instancia local de SQL Server con la base `MediChat` creada y poblada con los datos correspondientes.

> ⚠️ La base no está incluida en el repositorio. Se debe crear manualmente o importar desde un archivo `.sql` si se proporciona por separado.

#### 🔐 Conexión

La conexión se configura en el archivo `db.js` ubicado en `./modulos/src/db.js`:

```js
import mssql from 'mssql';

const connectionSettings = {
  server: 'localhost',
  database: 'MediChat',
  user: 'Josiel',
  password: '1234',
  options: {
    encrypt: true,
    trustServerCertificate: true,
    port: 1433
  }
};
