import { useEffect } from "react"
import { Invoice } from "../../types"
import { useInvoiceContext } from "../utils/context/invoicesContext"
import SingleInvoice from "./SingleInvoice"

interface YearInvoicesProps {
    year: number
    invoices: Invoice[]
}

const YearInvoices: React.FunctionComponent<YearInvoicesProps> = ({ year, invoices }) => {
    
    return (
        <div>
            <h2>Rok: {year}</h2>
            {
                invoices.map((invoice) =>
                    <SingleInvoice key={invoice.variabileSymbol} invoice={invoice} />
                )
            }
        </div>
    )
}

export default YearInvoices