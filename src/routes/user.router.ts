import { Router } from 'express';

import postUserHandler from "../handlers/user/post-user.handler"
import getUserHandler from "../handlers/user/get-user.handler"
import putUserHandler from "../handlers/user/put-user.handler"
import deleteUserHandler from "../handlers/user/delete-user.handler"
import userSchema from "../schemes/user/data-user.schema"
import validationsBodyMiddleware from "../middlewares/validations-body.middleware"
import validationsPathMiddleware from "../middlewares/validations-path.middleware"
import validationsParamMiddleware from "../middlewares/validations-param.middleware"
import validationsQueryMiddleware from "../middlewares/validations-query.middleware"

const userRouter = Router()

/**
 * @swagger
 * /user:
 *   post:
 *     tags:
 *       - Usuario
 *     summary: Crear un usuario nuevo
 *     description: End point que permite realizar un registro nuevo de usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Jorge Adiel"
 *               surname:
 *                 type: string
 *                 example: "Hernan Guzman"
 *               email:
 *                 type: string
 *                 example: "jorge_4@gmail.com"
 *               language:
 *                 type: string
 *                 example: "en"
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 34
 *                 name:
 *                   type: string
 *                   example: "Jorge Adiel"
 *                 surname:
 *                   type: string
 *                   example: "Hernan Guzman"
 *                 email:
 *                   type: string
 *                   example: "jorge_4@gmail.com"
 *                 language:
 *                   type: string
 *                   example: "en"
 *                 createdAt:
 *                   type: date
 *                   example: "2025-01-01 15:00:00"
 *       409:
 *         description: Conflicto de usuario
 *       500:
 *         description: Internal server error
 */
userRouter.post('/user', [ validationsBodyMiddleware(userSchema) ], postUserHandler)

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     tags:
 *       - Usuario
 *     summary: Obtener usuario por id
 *     description: End point para poder obtener los datos de un usuario mediante ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Clave unica del usuario
 *         required: true
 *     responses:
 *       200:
 *         description: Consulta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Jorge Adiel"
 *                 surname:
 *                   type: string
 *                   example: "Hernan Guzman"
 *                 email:
 *                   type: string
 *                   example: "jorge@gmail.com"
 *                 language:
 *                   type: string
 *                   example: "es"
 *                 createdAt:
 *                   type: date
 *                   example: "2025-01-01 15:00:00"
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */
userRouter.get('/user/:id', [] , getUserHandler)

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     tags:
 *       - Usuario
 *     summary: Actualizar usuario por ID
 *     description: End point que actualiza los datos del usuario mediante ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Clave unica del usuario
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Jorge"
 *               surname:
 *                 type: string
 *                 example: "Hernandez Gutierrez"
 *               email:
 *                 type: string
 *                 example: "jorge@gmail.com"
 *               language:
 *                 type: string
 *                 example: "es"
 *     responses:
 *       200:
 *         description: Actualización exitosa
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */
userRouter.put('/user/:id', [ validationsBodyMiddleware(userSchema) ], putUserHandler)

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     tags:
 *       - Usuario
 *     summary: Borrar un usuario por ID
 *     description: End point que nos permite borrar un usuario mediante ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Clave unica del usuario
 *         required: true
 *     responses:
 *       200:
 *         description: Borrado exitoso
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */
userRouter.delete('/user/:id', [], deleteUserHandler)

import postAssistanceHandler from "../handlers/assistance/post-assistance.handler"
import assistanceSchema from "../schemes/assistance/data-assistance.schema"
/**
 * @swagger
 * /user/assistance:
 *   post:
 *     tags:
 *       - Assistencia
 *     summary: Crear registro de asistencia
 *     description: End point que permite realizar el registro de asistencia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date_check:
 *                 type: date
 *                 example: "2025-01-01"
 *               timein:
 *                 type: string
 *                 example: "09:00:02"
 *               timeout:
 *                 type: string
 *                 example: "18:00:20"
 *               user_id:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Registro creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 12
 *                 date_check:
 *                   type: date
 *                   example: "2025-01-01"
 *                 timein:
 *                   type: string
 *                   example: "09:00:02"
 *                 timeout:
 *                   type: string
 *                   example: "18:00:20"
 *                 user_id:
 *                   type: integer
 *                   example: 2
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
userRouter.post('/user/assistance', [ validationsBodyMiddleware(assistanceSchema) ], postAssistanceHandler)

import getPayrollHandler from "../handlers/payroll/get-payroll.handler"
import payrollQuerySchema from "../schemes/payroll/query-payroll.schema"
import payrollParamSchema from "../schemes/payroll/param-payroll.schema"
/**
 * @swagger
 * /user/{id}/payroll:
 *   get:
 *     tags:
 *       - Payroll
 *     summary: Crear registro de asistencia
 *     description: End point que permite realizar el registro de asistencia
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Clave unica del usuario
 *         required: true
 *         schema:
 *           type: integer
 *       - name: date_init
 *         in: query
 *         description: Fecha de inicio del reporte
 *         required: true
 *         schema:
 *           type: string
 *       - name: date_end
 *         in: query
 *         description: Fecha final del reporte
 *         required: true
 *         schema:
 *           type: string
 *       - name: fee
 *         in: query
 *         description: Tarifa base
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       201:
 *         description: Registro creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 12
 *                 name:
 *                   type: string
 *                   example: "Jorge Guzman"
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */
userRouter.get('/user/:id/payroll', [ validationsParamMiddleware(payrollParamSchema), validationsQueryMiddleware(payrollQuerySchema) ], getPayrollHandler)

export default userRouter