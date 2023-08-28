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
}

const InvoicesContext = createContext<ContetxProps>({
  invoicesForYears: [],
})

export const InvoicesForYearsProvider = ({ children }: { children: ReactNode }) => {
  const { numberInvoicesYear } = useNumberInvoicesInYear()
  return (
    <>
      <InvoicesContext.Provider
        value={{ invoicesForYears: numberInvoicesYear}}
      >
        {children}
      </InvoicesContext.Provider>
    </>
  )
}

export const useInvoiceContext = () => useContext(InvoicesContext)