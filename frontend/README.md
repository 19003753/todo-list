
# 📝 To Do List - Actividad 6

Este proyecto es una aplicación web desarrollada como parte de la Actividad 6 del curso, con el objetivo de llevar el control de Tareas y Metas personales (To Do List).

## 🚀 Funcionalidades

- ✅ Agregar y eliminar tareas.
- 🎯 Agregar y eliminar metas personales utilizando Redux.
- 📆 Asignar fecha límite a las tareas.
- 🔐 Autenticación simple mediante API Key.
- 🌐 Comunicación completa entre backend y frontend.
- 🐳 Preparado para integrarse en una imagen Docker (opcional).

## 🧱 Tecnologías usadas

### Frontend
- React.js
- Redux Toolkit
- Axios
- Bootstrap

### Backend
- Node.js con Express
- MongoDB + Mongoose
- Dotenv para manejo de variables de entorno

## 🗂️ Estructura del proyecto

```
todo-list/
├── backend/
│   ├── app.js
│   ├── models/
│   ├── database.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── redux/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── public/
```

## 📡 Endpoints del Backend

- `POST /addTask`: Agrega una nueva tarea.
- `GET /getTasks`: Obtiene todas las tareas.
- `DELETE /removeTask`: Elimina una tarea.
- `POST /addGoal`: Agrega una nueva meta.
- `GET /getGoals`: Obtiene todas las metas.
- `DELETE /removeGoal`: Elimina una meta.

⚠️ Todos los endpoints requieren el header:
```
Authorization: 123@
```

## 🐳 Docker (opcional)

Puedes crear una imagen Docker del proyecto usando un `Dockerfile` tanto para el frontend como el backend. (Si decides hacerlo, recuerda exponer los puertos correctamente).

## 📥 Instalación y ejecución local

1. Clona el repositorio
2. Instala dependencias en backend y frontend:
   ```bash
   npm install
   ```
3. Ejecuta el backend:
   ```bash
   node app.js
   ```
4. Ejecuta el frontend (dentro de la carpeta `frontend`):
   ```bash
   npm run dev
   ```

---

🎉 Proyecto desarrollado por Juan Vargas 19003753 como entrega de la actividad 6.
