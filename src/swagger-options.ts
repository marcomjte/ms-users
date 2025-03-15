let { SYSTEM_PORT: port, SYSTEM_VERSION: version } = process.env

// Configuración de Swagger-jsdoc
const swaggerOptions = {
	definition: {
		openapi: '3.0.0',
		info: {
				title: 'API Documentation',
				version: version,
				description: 'Documentación de la API para la gestión de usuarios y pagos de nómina',
        contact : {
          name: "API users with payroll",
          email: "marcojimenezmte@gmail.com"
        }
		},
		servers: [
			{
					url: 'http://localhost:' + port + '/' + version,
					description: 'User API',
			},
		],
		components: {
			"schemas": {
        "User": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "surname": {
              "type": "string"
            },
            "email": {
              "type": "string",
              "format": "email"
            },
            "languaje": {
              "type": "string",
              "minimum": 2
            },
            "createdAt": {
              "type": "date"
            }
          }
        },
        "Assistance": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "date_check": {
              "type": "date"
            },
            "timein": {
              "type": "string"
            },
            "timeout": {
              "type": "string"
            },
            "id_user": {
              "type": "integer"
            }
          }
        }
      }
		}
	},
  apis: ['./src/routes/*.ts']
};

export default swaggerOptions