import { useEffect } from "react"
import { Invoice } from "../../types"
import { useInvoiceContext } from "../utils/context/invoicesContext"

interface YearInvoicesProps {
    year: number
    invoices: Invoice[]
}

const YearInvoices: React.FunctionComponent<YearInvoicesProps> = ({ year, invoices }) => {
    
    return(
        <div>
            <h2>rok: {year}</h2>
            {invoices.map((invoice) => <div key={invoice.variabileSymbol} >{invoice.customer}</div>)}
        </div>
    )
}

export default YearInvoices