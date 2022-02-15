import { SyntheticEvent } from "react";
import "../css/components/checkbox.scss";

type CheckBoxType = {
  label: string;
  handleClick: (e: SyntheticEvent<HTMLInputElement>) => void;
  index: number;
};

export const CheckBox = ({ label, handleClick, index }: CheckBoxType) => {
  return (
    <div className="form-check d-flex align-items-center">
      <input
        className="form-check-input me-3 lgcheckinput"
        type="checkbox"
        value={label}
        id={`${label + index}`}
        onClick ={(e: any)=>handleClick(e)}
      />
      <label className="text-capitalize form-check-label fs-6" htmlFor={` ${label + index}`}>
        {label}
      </label>
    </div>
  );
};
