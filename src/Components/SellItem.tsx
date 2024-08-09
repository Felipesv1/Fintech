import { NavLink } from "react-router-dom";
import { ISales } from "../Context/DataContext";

const SellItem = ({ sale }: { sale: ISales }) => {
  return (
    <div className="Sale box">
      <NavLink to={`/sales/${sale.id}`} style={{ fontFamily: "monospace" }}>
        {sale.id}
      </NavLink>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default SellItem;
