import { Invoice, InvoiceNumberInYear } from "../../types";


export const assignInvoicesToYears = (years: number[], invoices: Invoice[]): InvoiceNumberInYear[] => {
    const result: InvoiceNumberInYear[] = []

    years.map((e, i) => {
        const filteredInvoices = invoices.filter((invoice) => {
            const date = new Date(invoice.createDate)
            const year = date.getFullYear()
            if( e === year){
                return invoice
            }
        })
        const yearInvoices = { year: e, invoices: filteredInvoices}
        result.push(yearInvoices)
    })

    return result
}