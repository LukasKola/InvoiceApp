
import { Invoice } from "../../types"

interface InvoiceProps {
    invoices: Invoice[]
}

export const Invoices: React.FunctionComponent<InvoiceProps> = ({ invoices }) => {

    return (
        <div>
            {invoices.map((invoice) => {
                return (
                    <div key={invoice.variabileSymbol}>
                    <div>Faktura k datu:  {invoice.payDate.toString()} odberatel:  {invoice.customer}</div>
                    </div>
                
                )
            })}
        </div>
    )
}
