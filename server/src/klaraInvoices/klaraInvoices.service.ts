import { KlaraInvoices } from '@prisma/client'
import  {db} from '../utils/db.server'
import { Invoice } from '../../types'


export const invoices = async (): Promise<KlaraInvoices[]> => {
    return db.klaraInvoices.findMany()
}

export const getSingleInvoice = async (id:number): Promise<KlaraInvoices | null>  => {
    return db.klaraInvoices.findFirst({
        where: {
            id
        }
    })
}

export const addKlaraInvoice = async (invoice: Invoice): Promise<KlaraInvoices> => {
    return db.klaraInvoices.create({
        data: {
            ...invoice
        }
    })
}

export const updateKlaraInvoice = async (updatedInvoice: Invoice, id: number): Promise<KlaraInvoices> => {
    return db.klaraInvoices.update({
        where: {
            id
        },
        data: {
            ...updatedInvoice
        }
    })
}

export const deleteKlaraInvoice = async (id: number): Promise<Invoice> => {
   return await db.klaraInvoices.delete({
        where: {
            id
        }
    })
}