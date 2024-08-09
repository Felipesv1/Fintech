import SalesChart from "../Components/SalesChart";
import { useDataContext } from "../Context/DataContext";

const Summary = () => {
  const { data } = useDataContext();
  if (data == null) return null;
  return (
    <section>
      <div className="summary flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              .filter((item) => item.status !== "falha")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Recebidos</h2>
          <span>
            {data
              .filter((item) => item.status === "pago")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              .filter((item) => item.status === "processando")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <SalesChart data={data} />
      </div>
    </section>
  );
};

export default Summary;
