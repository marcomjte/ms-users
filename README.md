# ms-users

API REST para la **gestión de empleados y nómina**, construida con Node.js + TypeScript + Express. Incluye documentación interactiva con Swagger, ORM con TypeORM sobre MySQL, y entorno de desarrollo completamente containerizado con Docker.

## Stack tecnológico

- **Runtime**: Node.js + TypeScript
- **Framework**: Express
- **ORM**: TypeORM
- **Base de datos**: MySQL 8
- **Validación**: Zod
- **Documentación**: Swagger (swagger-jsdoc + swagger-ui-express)
- **Fechas**: Luxon
- **Contenedores**: Docker + Docker Compose

## Requisitos previos

- Node.js 18+
- Docker y Docker Compose (recomendado para desarrollo)
- MySQL 8 (si se corre sin Docker)

## Instalación

### Con Docker (recomendado)

1. Clonar el repositorio:

```bash
git clone https://github.com/marcomjte/ms-users.git
cd ms-users
```

2. Crear el archivo de variables de entorno:

```bash
cp .env.template .env
```

3. Levantar los servicios (API + base de datos):

```bash
docker-compose up --build
```

La API estará disponible en `http://localhost:3000`.

### Sin Docker

1. Clonar e instalar dependencias:

```bash
git clone https://github.com/marcomjte/ms-users.git
cd ms-users
npm install
```

2. Configurar el `.env` con los datos de tu MySQL local:

```env
SYSTEM_PORT=3000
SYSTEM_VERSION=v1
DB_HOST=127.0.0.1
DB_USER=root
DB_PORT=3306
DB_PASS=tu_password
DB_NAME=db_segula
```

3. Levantar en modo desarrollo:

```bash
npm run dev
```

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor en modo desarrollo con nodemon |
| `npm run build` | Compilar TypeScript a JS |
| `npm test` | Ejecutar tests con Jest |

## Variables de entorno

| Variable | Descripción | Default |
|---|---|---|
| `SYSTEM_PORT` | Puerto del servidor | `3000` |
| `SYSTEM_VERSION` | Versión de la API | `v1` |
| `DB_HOST` | Host de la base de datos | `127.0.0.1` |
| `DB_USER` | Usuario de MySQL | `root` |
| `DB_PORT` | Puerto de MySQL | `3306` |
| `DB_PASS` | Contraseña de MySQL | — |
| `DB_NAME` | Nombre de la base de datos | `db_segula` |

## Documentación de la API

Con el servidor corriendo, la documentación interactiva de Swagger está disponible en:

```
http://localhost:3000/api-docs
```

## Estructura del proyecto

```
src/
├── index.ts          # Entry point
├── routes/           # Definición de rutas
├── controllers/      # Lógica de cada endpoint
├── entities/         # Entidades TypeORM (modelos)
├── services/         # Lógica de negocio
└── middlewares/      # Validaciones y middleware
doc/                  # Documentación adicional
```

## Licencia

MIT
