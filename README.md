# majs-lambda-serverless

Aplicación serverless de procesamiento de pedidos desplegada en **AWS**, construida con [Serverless Framework](https://www.serverless.com/). Implementa una arquitectura event-driven con AWS Lambda, SQS y DynamoDB para gestionar el flujo completo de una orden: creación, preparación y envío.

## Arquitectura

```
POST /order
    └─► Lambda: newOrder ──► SQS: pendingOrderQueue ──► Lambda: prepOrder
                         └─► DynamoDB: Orders
                                    └─► DynamoDB Stream ──► Lambda: sendOrder ──► SQS: ordersToSendQueue

GET /order/{orderId}
    └─► Lambda: getOrder ──► DynamoDB: Orders
```

## Servicios AWS utilizados

| Servicio | Recurso | Descripción |
|---|---|---|
| **Lambda** | `newOrder` | Recibe un pedido vía HTTP POST y lo encola |
| **Lambda** | `getOrder` | Consulta el estado de un pedido por ID |
| **Lambda** | `prepOrder` | Consume la cola y prepara el pedido en DynamoDB |
| **Lambda** | `sendOrder` | Se activa por DynamoDB Stream al modificar un pedido |
| **SQS** | `pendingOrderQueue` | Cola de pedidos pendientes de preparar |
| **SQS** | `ordersToSendQueue` | Cola de pedidos listos para envío |
| **DynamoDB** | `Orders` | Tabla principal con Streams habilitados |

## Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| `POST` | `/order` | Crear un nuevo pedido |
| `GET` | `/order/{orderId}` | Consultar un pedido por ID |

### Ejemplo de payload

```json
{
  "orderId": "1",
  "pizza": "margarita",
  "customerId": "abc"
}
```

## Requisitos previos

- Node.js 20+
- [Serverless Framework](https://www.serverless.com/) instalado globalmente
- AWS CLI configurado con credenciales válidas
- Cuenta de AWS con permisos sobre Lambda, SQS, DynamoDB e IAM

```bash
npm install -g serverless
```

## Instalación y despliegue

1. Clonar el repositorio:

```bash
git clone https://github.com/marcomjte/majs-lambda-serverless.git
cd majs-lambda-serverless
```

2. Instalar dependencias:

```bash
npm install
```

3. Desplegar en AWS (región `us-east-1`):

```bash
serverless deploy
```

## Comandos útiles

### Invocar una Lambda manualmente

```bash
aws lambda invoke \
  --function-name pizzaApp-dev-sendOrder \
  --region us-east-1 \
  --cli-binary-format raw-in-base64-out \
  --invocation-type Event \
  --payload '{"orderId": "1","pizza": "margarita","customerId": "abc"}' \
  response.json
```

### Enviar un mensaje directo a SQS

```bash
aws sqs send-message \
  --queue-url https://sqs.us-east-1.amazonaws.com/<account-id>/pendingOrderQueue \
  --message-body "Esto es un mensaje" \
  --region us-east-1
```

### Eliminar el stack de AWS

```bash
serverless remove
```

## Licencia

MIT
