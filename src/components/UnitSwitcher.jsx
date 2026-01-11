import { useDispatch, useSelector } from "react-redux";
import { toggleUnit } from "../store/temperatureSlice";

export default function UnitSwitcher() {
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.temperature);

  return (
    <button
      onClick={() => dispatch(toggleUnit())}
      style={{
        padding: "8px 16px",
        fontSize: "16px",
        borderRadius: "8px",
        border: "none",
        background: "white",
        color: "black",
        cursor: "pointer",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        marginBottom: "20px",
        transition: "background 0.2s",
      }}
    >
      Jednostka: {unit}
    </button>
  );
}