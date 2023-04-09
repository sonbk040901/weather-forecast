import { SelectHTMLAttributes, useEffect, useState } from "react";
import "@styles/Select.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
function Select({
  value,
  dataSet,
  onChange,
  ...other
}: {
  value: number;
  dataSet: { value: number; label: string }[];
  onChange: (v: number) => void;
}) {
  const [loading, setLoading] = useState(false);
  const index = dataSet.findIndex((v) => v.value === value);
  const length = dataSet.length;
  const handleClick = (action: "up" | "down") => {
    let space = action === "up" ? 1 : -1;
    let nextI = index !== -1 ? (index + space + length) % length : index;
    setLoading(true);
    onChange(dataSet[nextI]?.value);
  };

  useEffect(() => {
    setLoading(false);
  }, [value]);
  return (
    <div
      className="select"
      {...other}
    >
      <FontAwesomeIcon
        className="arrow"
        spin={loading}
        icon={loading ? faSpinner : faArrowLeft}
        onClick={() => handleClick("down")}
      />
      <h1 className="title">{dataSet[index]?.label}</h1>
      <FontAwesomeIcon
        className="arrow"
        icon={loading ? faSpinner : faArrowRight}
        spin={loading}
        onClick={() => handleClick("up")}
      />
    </div>
  );
}

export default Select;
