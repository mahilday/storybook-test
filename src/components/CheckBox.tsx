import { SyntheticEvent } from "react";
import "../css/components/checkbox.scss";

type CheckBoxType = {
  label: string;
  handleClick: (e: SyntheticEvent<HTMLInputElement>) => void;
  index: number;
  bgcolor: string;
};

export const CheckBox = ({
  label,
  handleClick,
  index,
  bgcolor,
}: CheckBoxType) => {
  // track if checkbox input is checked then add a bg color based on state
  //
  const colorChange = (e: any) => {
    let inputType = e.target;
    if (inputType.checked === true) {
      inputType.classList.add(`bg-${bgcolor}`);
      inputType.classList.add(`shadow-${bgcolor}`);
    } else {
      inputType.classList.remove(`bg-${bgcolor}`);
      inputType.classList.remove(`shadow-${bgcolor}`);
      inputType.classList.add("shadow-none")

    }
  };
  //
  return (
    <div className="form-check d-flex align-items-center">
      <input
        className={`form-check-input me-3 lgcheckinput border`}
        type="checkbox"
        value={label}
        id={`${label + index}`}
        onClick={(e: any) => {
          handleClick(e);
          colorChange(e);
        }}
      />
      <label
        className="text-capitalize form-check-label fs-6"
        htmlFor={` ${label + index}`}
      >
        {label}
      </label>
    </div>
  );
};
