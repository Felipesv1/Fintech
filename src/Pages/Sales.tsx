import { useDataContext } from "../Context/DataContext";
import SellItem from "../Components/SellItem";

const Sales = () => {
  const { data } = useDataContext();
  if (data === null) return null;

  return (
    <ul>
      {data.map((sale) => (
        <li key={sale.id}>
          <SellItem sale={sale} />
        </li>
      ))}
    </ul>
  );
};

export default Sales;
