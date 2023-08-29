import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import { Invoice } from "../../../types";

export const useFetchInvoice = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/klaraInvoices');          
            setInvoices(response.data);
        } catch (error) {
            console.error("Nastala chyba při načítání dat:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        invoices
    }

}