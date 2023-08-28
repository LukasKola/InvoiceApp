
import {  InvoiceNumberInYear } from "../../types"


interface InvoiceProps {
    invoices: InvoiceNumberInYear[]
}

export const Invoices: React.FunctionComponent<InvoiceProps> = ({ invoices }) => {
    
    return (
        <div>
            {invoices.map((year) => {
                return ( 
                    <div key={year.year} >
                        <div>
                            <h3>Rok: {year.year}</h3>
                        </div>
                        {year.invoices.map((e) => <div key={e.variabileSymbol} >{e.customer}</div>)}
                    </div>
                )
            })}
        </div>
    );
};
