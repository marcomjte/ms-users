# Sistema de Gestión de Empleados
Sistema para la gestión de empleados
- Permite gestionar empleados
- Registro de horas de trabajo
- Calcula la nómina basada en los registros.

## Requerimientos
- Mysql 8
- Nodejs 23.7

## Instalación
- Ejecutar script de base de datos en la carpeta `doc/db_segula_v1.sql`

## Ejecución

1. Crear y configurar variables de entorno en el archivo `.env` con las variables en el archivo `.env.template`
2. Ejecutar `npm install`
3. Ejecutar `npm run dev`
4. Abrir [Servidor API](http://localhost:3000/v1)
5. Abrir [Servidor API Doc](http://localhost:3000/v1/api-docs/)

## Docker
> [!CAUTION]
> Los archivos de docker pueden no ser funcionales