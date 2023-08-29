export type Invoice = {
    createDate: Date,
    payDate: Date
    variabileSymbol: number
    paymentType: string
    customer: string
    service: string
    totalPrice: string
    qrCode: string
}

export interface InvoiceNumberInYear {
    year: number;
    invoices: Invoice[];
}

export interface Provider {
        name: string,
        bussinesAdressStreet: string,
        bussinesCiry: string,
        postalCode: string,
        ico: string,
        medicalCode: string,
        from: string,
        medicalLicenceProvider: string,
        dphPayer: string,
}