# To-Do List Backend

Proyecto backend desarrollado en Node.js + Express para gestionar tareas (Tasks) y metas personales (Goals) como una lista de pendientes (To-Do List).

## 🚀 Tecnologías utilizadas

- Node.js (versión LTS)
- Express.js
- dotenv
- MongoDB (con Mongoose)

## ⚙️ Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Crear un archivo `.env` con el siguiente contenido:
   ```
   API_KEY=midemokey123
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/todolist
   ```

4. Iniciar el servidor:
   ```bash
   npm start
   ```

## 🛡️ Autenticación

Todas las peticiones deben incluir en los headers el parámetro:

| Key           | Value         |
|---------------|---------------|
| Authorization | midemokey123  |

Si el `Authorization` es incorrecto o falta, el servidor responde con error 401 Unauthorized.

## 📚 Endpoints disponibles

| Método | Endpoint       | Descripción                            |
|--------|----------------|-----------------------------------------|
| GET    | /getTasks       | Obtiene la lista de tareas desde MongoDB |
| POST   | /addTask        | Agrega una nueva tarea a MongoDB        |
| DELETE | /removeTask     | Elimina una tarea por ID en MongoDB     |
| GET    | /getGoals       | Obtiene la lista de metas desde MongoDB |
| POST   | /addGoal        | Agrega una nueva meta a MongoDB         |
| DELETE | /removeGoal     | Elimina una meta por ID en MongoDB      |

## 🛠️ Notas importantes

- Los datos ahora se almacenan en MongoDB, no en memoria.
- Se utilizan modelos definidos con Mongoose (`Task` y `Goal`).
- Las tareas y metas se eliminan usando su identificador único (`_id`).
- Proyecto desarrollado para fines educativos.

## 👨‍💻 Autor

Sebastián Vargas
