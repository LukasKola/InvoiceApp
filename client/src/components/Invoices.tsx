
import {  InvoiceNumberInYear } from "../../types"
import YearInvoices from "./YearInvoices";


interface InvoiceProps {
    invoices: InvoiceNumberInYear[]
}

export const Invoices: React.FunctionComponent<InvoiceProps> = ({ invoices }) => {
    
    return (
        <div>
            {invoices.map((element) => {
                return ( 
                    <div key={element.year} >
                        <YearInvoices year={element.year} invoices={element.invoices} />
                    </div>
                )
            })}
        </div>
    );
};
