import { useState } from "react";
import { Invoice } from "../../types";
import MyDocument from "./MyDocument";
import DownloadPDFButton from "./DownloadPDFButton";
import MyDocumentComponent from "./MyDocumentComponent";


interface SingleInvoiceProps {
    invoice: Invoice
}
const SingleInvoice: React.FunctionComponent<SingleInvoiceProps> = ({ invoice }) => {
    const [open, setOpen] = useState<boolean>(false)

    const provider = {
        name: 'Bc.Kára Vaňková',
        bussinesAdressStreet: "Kovářova 96/36",
        bussinesCiry: "Praha 5",
        postalCode: "155 00",
        ico: "10898921",
        medicalCode: 'S-MHMP 734534/2021',
        from: '31.5.2021',
        medicalLicenceProvider: 'Magistrát Praha',
        dphPayer: 'Neplatce DPH'
    }

    const handleDownloadClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
    }

    return (
        <>
            <div className="single-invoice" onClick={() => setOpen(!open)}>
                {
                    open ?

                        <>
                            <div onClick={() => setOpen(false)} className="opened-invoice" >
                                <MyDocumentComponent invoice={invoice} provider={provider} />
                                
                            </div>
                            <button onClick={handleDownloadClick}>
                            <DownloadPDFButton invoice={invoice} />
                            </button>
                        </>

                        :
                        <>
                            <div className="closed-invoice">
                                <p>Odberatel: {invoice.customer}</p>
                                <p>Castka: {invoice.totalPrice}</p>
                                <p>Variablilni symbol: {invoice.variabileSymbol}</p>

                            </div>
                        </>
                }
            </div>
        </>

    )
}

export default SingleInvoice;