import { FC } from "react";
import { Invoice, Provider } from "../../types"
import { format } from "date-fns";
import QRCode from 'qrcode';

interface MyDocumentComponentProps {
    invoice: Invoice;
    provider: Provider;
}

const MyDocumentComponent: FC<MyDocumentComponentProps> = ({ invoice, provider }) => {

    const createInputDate = new Date(invoice.createDate)
    const formatedCreateDate = format(createInputDate, 'dd/MM/yyyy')
    const payDateInput = new Date(invoice.payDate)
    const formatedPayDate = format(payDateInput, 'dd/MM/yyyy')

    const testQRstring = 'SPD*1.0*ACC:CZ0000211910979+AGBACZPP*AM:450.00*CC:CZK*MSG:PLATBA PRO KLARKU*X-VS:1234567890'

    let qrCodeImageUrl: string = ''

    QRCode.toDataURL(testQRstring, (err, url) => {
        if(!err){
            qrCodeImageUrl = url
        }
    })

    return (
        <div className="invoice">
            <div className="invoice-number">
                <p >ČÍslo faktury: {invoice.variabileSymbol}</p>
            </div>
            <div className="invoice-date-info">
                <p><strong>Datum vystavení: </strong>{formatedCreateDate}</p>
                <p><strong>Datum splatnosti: </strong> {formatedPayDate}</p>
                <p><strong>Variabilní sybmol: </strong>{invoice.variabileSymbol}</p>
                <p><strong>Forma úhrady: </strong>{invoice.paymentType}</p>
            </div>
            <div className="invoice-cutomer-provider">
                <div>
                    <p>Dodavatel: </p>
                    <p>{provider.name}</p>
                    <p>{provider.bussinesAdressStreet}</p>
                    <p>{provider.postalCode} {provider.bussinesCiry}</p>
                    <p>IČO: {provider.ico}</p>
                    <p>{provider.dphPayer}</p>
                </div>
                <div>
                    <p>Odběratel: </p>
                    <p>{invoice.customer}</p>
                </div>
            </div>
            <div className="invoice-provider-authorization">
                <p>Oprávnění k poskytování zdravotnických služeb od: {provider.from}</p>
                <p>Vydal: {provider.medicalLicenceProvider}</p>
            </div>
            <table>
                <tr className="table-header">
                    <th>Název zboží, služby</th>
                    <th>Cena</th>
                </tr>
                <tr>
                    <td>
                        {invoice.service}
                    </td>
                    <td>
                        {invoice.totalPrice} ,-Kč
                    </td>
                </tr>
            </table>
            <div>
                {qrCodeImageUrl && <img src={qrCodeImageUrl} />}
                
                    <img alt="qr platba" src="https://api.paylibo.com/paylibo/generator/czech/image?compress=false&size=200&accountNumber=211910979&bankCode=0600&amount=5800&currency=CZK&vs=0258" />
                
            </div>
        </div>
    )
}

export default MyDocumentComponent