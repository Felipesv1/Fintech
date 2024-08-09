import DateInput from "./DateInput";
import { useDataContext } from "../Context/DataContext";

const DateRange = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useDataContext();
  return (
    <form className="box flex " onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="inicio"
        value={startDate}
        onChange={({ target }) => setStartDate(target.value)}
      />
      <DateInput
        label="final"
        value={endDate}
        onChange={({ target }) => setEndDate(target.value)}
      />
    </form>
  );
};

export default DateRange;
