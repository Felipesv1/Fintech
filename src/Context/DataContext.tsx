import React from "react";
import useFetch from "../Hooks/useFetch";

type IdataContext = {
  data: ISales[] | null;
  loading: boolean;
  error: string | null;
  startDate: string;
  endDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
};
export type ISales = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  data: string;
  parcelas: number | null;
};

const DataContext = React.createContext<IdataContext | null>(null);

export const useDataContext = () => {
  const context = React.useContext(DataContext);
  if (!context)
    throw new Error("useDataContext must be used within a DataContextProvider");
  return context;
};

function getNDaysAgo(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = String(date.getFullYear());
  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [startDate, setStartDate] = React.useState(getNDaysAgo(30));
  const [endDate, setEndDate] = React.useState(getNDaysAgo(0));
  const { data, loading, error } = useFetch<ISales[]>(
    `https://data.origamid.dev/vendas/?inicio=${startDate}&final=${endDate}`
  );
  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        startDate,
        endDate,
        setStartDate,
        setEndDate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
