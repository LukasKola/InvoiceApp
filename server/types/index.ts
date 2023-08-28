
export type Invoice = {
    createDate: Date
    payDate: Date
    variabileSymbol: number
    paymentType: string
    customer: string
    service: string
    totalPrice: string
    qrCode: string
    note: string
}