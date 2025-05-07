# To-Do List

Proyecto backend desarrollado en Node.js + Express para gestionar tareas (Tasks) y metas personales (Goals) como una lista de pendientes (To-Do List).

## 🚀 Tecnologías utilizadas

- Node.js (versión LTS)
- Express.js
- dotenv

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
   ```

4. Iniciar el servidor:
   ```bash
   node app.js
   ```

## 🛡️ Autenticación

Todas las peticiones deben incluir en los headers el parámetro:

| Key           | Value        |
| ------------- | ------------ |
| Authorization | midemokey123 |

Si el `Authorization` es incorrecto o falta, el servidor responde con error 401 Unauthorized.

## 📚 Endpoints disponibles

| Método | Endpoint    | Descripción                 |
| ------ | ----------- | --------------------------- |
| GET    | /getTasks   | Obtiene la lista de tareas  |
| POST   | /addTask    | Agrega una nueva tarea      |
| DELETE | /removeTask | Elimina una tarea existente |
| GET    | /getGoals   | Obtiene la lista de metas   |
| POST   | /addGoal    | Agrega una nueva meta       |
| DELETE | /removeGoal | Elimina una meta existente  |

## 🛠️ Notas importantes

- Los datos (tareas y metas) **no se almacenan en base de datos**, solo en memoria mientras el servidor está corriendo.
- Si el servidor se detiene o reinicia, los datos se pierden.
- Proyecto desarrollado para fines educativos.

## 👨‍💻 Autor

Juan Vargas
19003753
