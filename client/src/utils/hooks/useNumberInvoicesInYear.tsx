import { useEffect, useState } from "react"
import { Invoice, InvoiceNumberInYear } from "../../../types"
import { useFetchInvoice } from "./useFetchInvoices"
import { assignInvoicesToYears } from "../assignInvoicesToYears"
import { getYears } from "../getYears"

export const useNumberInvoicesInYear = () => {
    const {invoices} =useFetchInvoice()
    const [numberInvoicesYear, setNumberInvoicesYear] = useState<InvoiceNumberInYear[]>([])
    const [years, setYears] = useState<Array<number>>([]);


    useEffect(() => {
        setYears(getYears(invoices));
        const contextValues = assignInvoicesToYears(years, invoices);
        setNumberInvoicesYear(contextValues)
    }, [invoices]);

    return {
        setNumberInvoicesYear,
        numberInvoicesYear,
    }

}