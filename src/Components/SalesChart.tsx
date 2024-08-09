import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ISales } from "../Context/DataContext";

type SaleDay = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};
function transformDate(data: ISales[]): SaleDay[] {
  const days = data.reduce((acc: { [key: string]: SaleDay }, item) => {
    const day = item.data.split(" ")[0];
    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        processando: 0,
        falha: 0,
      };
      acc[day][item.status] += item.preco;
    }

    return acc;
  }, {});

  return Object.values(days).map((day) => ({
    ...day,
    data: day.data.substring(5),
  }));
}

const GraficoVendas = ({ data }: { data: ISales[] }) => {
  const transformedDate = transformDate(data);
  return (
    <ResponsiveContainer width={"99%"} height={400}>
      <LineChart width={400} height={400} data={transformedDate}>
        <XAxis dataKey="data" />
        <YAxis yAxisId={0} />
        <YAxis yAxisId={1} orientation="right" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pago"
          stroke="#a36af9"
          strokeWidth={3}
          yAxisId={0}
        />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#fbcb21"
          strokeWidth={3}
          yAxisId={1}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={3}
          yAxisId={1}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
