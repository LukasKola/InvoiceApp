import { useEffect } from "react"
import { Invoice } from "../../types"
import { useInvoiceContext } from "../utils/context/invoicesContext"

interface YearInvoicesProps {
    year: number
    invoices: Invoice[]
}

const YearInvoices: React.FunctionComponent<YearInvoicesProps> = ({ year, invoices }) => {
    const {invoicesForYears} = useInvoiceContext()
    
    useEffect(() => {
        console.log('contextvalue in another component',invoicesForYears)
    },[invoicesForYears])

    return(
        <div>
            <h2>rok: {year}</h2>
            {invoices.map((invoice) => <div key={invoice.variabileSymbol} >{invoice.customer}</div>)}
            {invoicesForYears.map((e) => <div>context</div>)}
        </div>
    )
}

export default YearInvoices