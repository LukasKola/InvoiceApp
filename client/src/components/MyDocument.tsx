import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { Invoice } from '../../types';
import { FC } from 'react'
import { format } from 'date-fns'



interface MyDocumentProps {
    invoice: Invoice
}

const MyDocument: FC<MyDocumentProps> = ({ invoice }) => {
    const createInputDate = new Date(invoice.createDate)
    const formatedCreateDate = format(createInputDate, 'dd/MM/yyyy')
    const payDateInput = new Date(invoice.payDate)
    const formatedPayDate = format(payDateInput, 'dd/MM/yyyy')

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

    Font.register({
        family: 'Oswald',
        src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
      });

    const styles = StyleSheet.create({
        customer: {
            padding: '5px',
            margin: '5px',
            display: 'flex',
            flexDirection: 'column'
        },
        provider: {
            padding: '5px',
            margin: '5px',
            display: 'flex',
            flexDirection: 'column',
        },
        provAndCustomerBlock: {
            display: 'flex',
            flexDirection: 'row',
            gap: '250px'
        },
        page: {
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
            margin:'20px 0px 20px 20px' ,
            fontFamily: "Oswald",
            fontSize: '12',
        },
        dates: {
            margin: '5px',
            padding: '5px',
            display: 'flex',
            flexDirection: 'column',

        }
    })

    return (
        <Document >
            <Page size={'A4'} >
                <View style={styles.page}>
                        <View>
                            <Text style={{margin: '5px',padding: '5px'}}>Cislo faktury: {invoice.variabileSymbol}</Text>
                        </View>
                    <View style={styles.dates} >
                        <Text>Datum vystaveni:{formatedCreateDate}</Text>
                        <Text>Datum splatnosti: {formatedCreateDate}</Text>
                        <Text>Variabilni sybmol: {invoice.variabileSymbol}</Text>
                        <Text>Forma uhrady: {invoice.paymentType}</Text>
                    </View>
                    <View style={styles.provAndCustomerBlock} >
                        <View style={styles.provider}>
                            <Text>Dodavatel: </Text>
                            <Text>{provider.name}</Text>
                            <Text>{provider.bussinesAdressStreet}</Text>
                            <Text>{provider.postalCode} {provider.bussinesCiry}</Text>
                            <Text>ICO: {provider.ico}</Text>
                            <Text>{provider.dphPayer}</Text>
                        </View>
                        <View style={styles.customer}>
                            <Text>Odberatel: </Text>
                            <Text>{invoice.customer}</Text>
                        </View>
                    </View>
                    <View style={{ display:'flex', flexDirection: 'column', padding: '5px', margin: '5px'}}>
                            <Text>Opravneni k poskytovani zdravotnickych sluzeb od: {provider.from}</Text>
                            <Text>Vydal: {provider.medicalLicenceProvider}</Text>
                        </View>
                </View>
            </Page>
        </Document>
    )
}

export default MyDocument;