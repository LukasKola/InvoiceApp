import express from 'express'
import type { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

import * as KlaraInoiceService from './klaraInvoices.service'

export const klaraRouter = express.Router()

klaraRouter.get('/', async (request: Request, response: Response) => {
    try {
        const klaraInvoices = await KlaraInoiceService.invoices()
        return response.status(200).json(klaraInvoices)
    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

klaraRouter.get('/:id', async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 10)
    try {
        const singleInvoice = await KlaraInoiceService.getSingleInvoice(id)
        if (singleInvoice) {
            return response.status(200).json(singleInvoice)
        }
        return response.status(404).json('Tato faktura neexistuje')
    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

klaraRouter.post('/', async (request: Request, response: Response) => {
    const invoice = request.body
    try {
        const addedInvoice = await KlaraInoiceService.addKlaraInvoice(invoice)
        return response.status(201).json(addedInvoice)
    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

klaraRouter.put('/:id', async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 10)
    const invoice = request.body
    try {
        const updatedInvoice = await KlaraInoiceService.updateKlaraInvoice(invoice, id)
        return response.status(200).json(updatedInvoice)
    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

klaraRouter.delete('/delete/:id', async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)

    try {
        const deletedInvoice = await KlaraInoiceService.deleteKlaraInvoice(id)
        return response.status(200).json(deletedInvoice)
    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})