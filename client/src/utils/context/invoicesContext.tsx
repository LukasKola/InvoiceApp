import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNumberInvoicesInYear } from "../hooks/useNumberInvoicesInYear";
import { InvoiceNumberInYear } from "../../../types";

interface ContetxProps {
  invoicesForYears: InvoiceNumberInYear[]
  setInvoicesForYears: Dispatch<SetStateAction<InvoiceNumberInYear[]>>
}

const InvoicesContext = createContext<ContetxProps>({
  invoicesForYears: [],
  setInvoicesForYears: () => [],
})

export const InvoicesForYearsProvider = ({ children }: { children: ReactNode }) => {
  const { numberInvoicesYear, setNumberInvoicesYear } = useNumberInvoicesInYear()
  return (
    <>
      <InvoicesContext.Provider
        value={{ invoicesForYears: numberInvoicesYear, setInvoicesForYears: setNumberInvoicesYear }}
      >
        {children}
      </InvoicesContext.Provider>
    </>
  )
}

export const useInvoiceContext = () => useContext(InvoicesContext)