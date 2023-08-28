import { Invoice } from "../../types";

export const getYears = (Invoices: Invoice[]): number[] => {
    const years: number [] = []

    Invoices.forEach((invoice, index) => {
        const date = new Date(invoice.createDate)
        const year = date.getFullYear()
        if(!years.includes(year)){
            years.push(year)
        }
    })
    return years
}