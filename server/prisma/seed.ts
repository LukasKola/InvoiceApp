import {db} from '../src/utils/db.server'
import { Invoice } from '../types'



function getInvoices(): Array<Invoice> {
    return [
        {
            payDate: new Date,
            variabileSymbol: 1234,
            paymentType: 'card',
            customer: 'Lukas',
            service: 'regabilitace krku',
            totalPrice: '5000',
            qrCode: 'Lukas invoice'
        },
        {
            payDate: new Date,
            variabileSymbol: 4321,
            paymentType: 'cash',
            customer: 'Betka',
            service: 'masaz nohou',
            totalPrice: '2500',
            qrCode: 'Betka invoice'
        },
        {
            payDate: new Date,
            variabileSymbol: 5678,
            paymentType: 'card',
            customer: 'Oldriska',
            service: 'rehabilitace kolene',
            totalPrice: '10000',
            qrCode: 'Oldriska invoice'
        }
    ]
}

async function seed() {
    await Promise.all(
        getInvoices().map((invoice) => {
            return db.klaraInvoices.create({
                data: {
                    ...invoice
                }
            })
        })
    )
}

seed()
