# Hikari-Hub Project

## Descripción

Hikari-Hub es una aplicación web que permite a los usuarios explorar y consumir mangas, así como también subir y gestionar sus propios mangas. La aplicación cuenta con autenticación de usuarios y proporciona una interfaz intuitiva y atractiva para una experiencia de usuario óptima.

## Características

- **Autenticación de usuarios**: Registro e inicio de sesión seguro para los usuarios.
- **Explorar mangas**: Navega y consume una amplia variedad de mangas disponibles.
- **CRUD de mangas**: Permite a los usuarios subir, editar, eliminar y visualizar sus propios mangas.
- **Interfaz moderna**: Desarrollada con Vue.js y estilizada con TailwindCSS para una experiencia de usuario moderna y responsiva.
- **Backend robusto**: Construido con Express.js y MongoDB para un manejo eficiente de datos y rendimiento.

## Tecnologías Utilizadas

- **Frontend**: Vue.js
- **Backend**: Express.js
- **Base de datos**: MongoDB
- **Estilos**: TailwindCSS

## Instalación y Configuración

### Prerrequisitos

- Node.js y npm instalados
- MongoDB configurado y en funcionamiento

### Pasos de Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/luisdav1/hikari-hub.git
   cd hikari-hub
   ```

2. Instalar dependencias para el backend:
   ```bash
   cd server
   npm install
   ```

3. Configurar las variables de entorno en el archivo `.env` en el directorio `server`:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/hikari-hub
   JWT_SECRET=your_secret_key
   ```

4. Iniciar el servidor backend:
   ```bash
   npm start
   ```

5. Instalar dependencias para el frontend:
   ```bash
   cd ../client
   npm install
   ```

6. Configurar las variables de entorno en el archivo `.env` en el directorio `client` si es necesario.

7. Iniciar la aplicación frontend:
   ```bash
   npm serve
   ```

8. Acceder a la aplicación en el navegador:
   ```
   http://localhost:8080
   ```

## Uso

- **Registro e Inicio de Sesión**: Los usuarios pueden registrarse y acceder a la aplicación mediante la página de autenticación.
- **Explorar Mangas**: Los usuarios pueden navegar por la colección de mangas disponibles en la página principal.
- **Gestión de Mangas**: Los usuarios autenticados pueden subir nuevos mangas, así como editar y eliminar los mangas que han subido.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas colaborar, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y haz commits (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube los cambios a tu repositorio (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request en el repositorio original.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Contacto

Para cualquier consulta o sugerencia, por favor contacta a [luisdarodriguez164@gmail.com].

---

¡Gracias por utilizar Hikari-Hub!
