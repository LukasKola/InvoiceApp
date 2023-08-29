import React, {FC} from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument'; // Importujte váš PDF generující kód
import { Invoice } from '../../types';

interface DownloadPDFButtonProps {
    invoice: Invoice
}

const DownloadPDFButton:FC<DownloadPDFButtonProps> = ({ invoice }) => {
  return (
    <PDFDownloadLink 
    document={<MyDocument invoice={invoice} />} 
    fileName="invoice.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading ? 'Generuji PDF...' : 'Stáhnout PDF'
      }
    </PDFDownloadLink>
  );
};

export default DownloadPDFButton;
