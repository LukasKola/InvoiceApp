import axios from "axios";
import { useState, useEffect, useMemo } from "react";

export const useFetchInvoice = () => {
    const [invoices, setInvoices] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/klaraInvoices');
                
                setInvoices(response.data);
            } catch (error) {
                console.error("Nastala chyba při načítání dat:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (invoices) {
            console.log(invoices);
        }
    }, [invoices]);

    const getAllInvoices = () => {
        if(invoices)return invoices
        else return null
        
    }

    return {
        invoices
    }

}