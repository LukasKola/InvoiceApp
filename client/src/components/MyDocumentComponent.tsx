import { FC } from "react";
import { Invoice, Provider } from "../../types"
import { format } from "date-fns";

interface MyDocumentComponentProps {
    invoice: Invoice;
    provider: Provider;
}

const MyDocumentComponent: FC<MyDocumentComponentProps> = ({ invoice, provider }) => {

    const createInputDate = new Date(invoice.createDate)
    const formatedCreateDate = format(createInputDate, 'dd/MM/yyyy')
    const payDateInput = new Date(invoice.payDate)
    const formatedPayDate = format(payDateInput, 'dd/MM/yyyy')

    return (
            <div className="invoice">
                <div className="invoice-number">
                    <p >Cislo faktury: {invoice.variabileSymbol}</p>
                </div>
                <div className="invoice-date-info">
                    <p><strong>Datum vystaveni: </strong>{formatedCreateDate}</p>
                    <p><strong>Datum splatnosti: </strong> {formatedCreateDate}</p>
                    <p><strong>Variabilni sybmol: </strong>{invoice.variabileSymbol}</p>
                    <p><strong>Forma uhrady: </strong>{invoice.paymentType}</p>
                </div>
                <div className="invoice-cutomer-provider">
                    <div>
                        <p>Dodavatel: </p>
                        <p>{provider.name}</p>
                        <p>{provider.bussinesAdressStreet}</p>
                        <p>{provider.postalCode} {provider.bussinesCiry}</p>
                        <p>ICO: {provider.ico}</p>
                        <p>{provider.dphPayer}</p>
                    </div>
                    <div>
                        <p>Odberatel: </p>
                        <p>{invoice.customer}</p>
                    </div>
                </div>
                <div className="invoice-provider-authorization">
                    <p>Opravneni k poskytovani zdravotnickych sluzeb od: {provider.from}</p>
                    <p>Vydal: {provider.medicalLicenceProvider}</p>
                </div>
            </div>
    )
}

export default MyDocumentComponent