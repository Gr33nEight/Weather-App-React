import { useDispatch, useSelector } from "react-redux";
import { setUnit } from "../store/temperatureSlice";

export default function TemperatureSwitcher() {
  const dispatch = useDispatch();
  const unit = useSelector(state => state.temperature);

  return (
    <select
      value={unit}
      onChange={e => dispatch(setUnit(e.target.value))}
    >
      <option value="C">C</option>
      <option value="F">F</option>
      <option value="K">K</option>
    </select>
  );
}