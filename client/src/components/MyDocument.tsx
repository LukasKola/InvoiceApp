import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';
import { Invoice } from '../../types';
import { FC } from 'react'
import { format } from 'date-fns'
import QRCode from 'qrcode';


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
        dphPayer: 'Neplátce DPH',
        bank: 'Moneta Money Bank',
        BAnumber: '211910979/0600',
    }

    Font.register({
        family: 'Oswald',
        src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
    });

    Font.register({
        family: 'Roboto',
        src: '/roboto/Roboto-Regular.ttf'
    })

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
            gap: '30px',
            margin: '20px 0px 20px 20px',
            fontFamily: "Roboto",
            fontSize: '12',
        },
        dates: {
            margin: '5px',
            padding: '5px',
            display: 'flex',
            flexDirection: 'column',

        },
        table: {
            width: '550px',
            borderStyle: 'solid',
            borderWidth: 1,
            borderBottomWidth: 0,
        },
        tableRow: {
            flexDirection: 'row',
        },
        tableColHeader: {
            flex: 1,
            borderStyle: 'solid',
            borderBottomColor: '#000',
            borderBottomWidth: 1,
            alignItems: 'center',
            backgroundColor: '#f2f2f2',
            padding: 5,
        },
        tableCol: {
            flex: 1,
            borderStyle: 'solid',
            borderBottomColor: '#000',
            borderBottomWidth: 1,
            padding: 5,
            textAlign: "center",
        },
        qrCode: {
            width: '150px',
            height: '150px',
        }
    })

    let qrCodeImageUrl = ''

    QRCode.toDataURL(invoice.qrCode, (err, url) => {
        if(!err){
            qrCodeImageUrl = url
        }
    })

    return (
        <Document >
            <Page size={'A4'} >
                <View style={styles.page}>
                    <View>
                        <Text style={{ margin: '5px', padding: '5px' }}>Číslo faktury: {invoice.variabileSymbol}</Text>
                    </View>
                    <View style={styles.dates} >
                        <Text>Datum vystavení: {formatedCreateDate}</Text>
                        <Text>Datum splatnosti: {formatedPayDate}</Text>
                        <Text>Variabilní symbol: {invoice.variabileSymbol}</Text>
                        <Text>Forma úhrady: {invoice.paymentType}</Text>
                    </View>
                    <View style={styles.provAndCustomerBlock} >
                        <View style={styles.provider}>
                            <Text>Dodavatel: </Text>
                            <Text>{provider.name}</Text>
                            <Text>{provider.bussinesAdressStreet}</Text>
                            <Text>{provider.postalCode} {provider.bussinesCiry}</Text>
                            <Text>IČO: {provider.ico}</Text>
                            <Text>{provider.dphPayer}</Text>
                        </View>
                        <View style={styles.customer}>
                            <Text>Odběratel: </Text>
                            <Text>{invoice.customer}</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', padding: '5px', margin: '5px' }}>
                        <Text>Opravnění k poskytování zdravotnických služeb od: {provider.from}</Text>
                        <Text>Vydal: {provider.medicalLicenceProvider}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', padding: '5px', margin: '5px' }}>
                        <Text>{provider.bank}</Text>
                        <Text>{provider.BAnumber}</Text>
                    </View>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableColHeader}>
                                <Text>Název zboží, služby</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text>Cena</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol}>
                                <Text>{invoice.service}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text>{invoice.totalPrice},-Kč</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.qrCode}>
                        {qrCodeImageUrl && <Image src={qrCodeImageUrl} />}
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default MyDocument;