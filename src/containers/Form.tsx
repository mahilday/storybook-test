import { SyntheticEvent, useContext, useState } from "react";
import "../App.scss";
import TitleCheckSection from "./TitleCheckSection";
import { GeneralContext } from "../context/general";
import "../css/bootstrap.scss";
import { checkData, eachCheck } from "../utils/checkdata";

interface Props{
  color: string
}

function Form({color}:Props) {
  const [state, setState] = useState<string[]>([]);

  const genctx = useContext(GeneralContext);
  
  // check array if data exists and decide either to add or delete

  const handleClick = (e: any) => {
    let arrayIncludes = state.includes(e.currentTarget.value) ? true : false;
    if (arrayIncludes === true) {
      setState(state.filter((item) => item !== e.currentTarget.value));
    } else {
      setState([...state, e.currentTarget.value]);
    }
  };
  

  const getData = state;

  // send final data to context when done is pressed
  
  const handleDone = () => {
    genctx?.handleDone(getData);
  };

  return (
    <div className="App d-flex  align-items-center justify-content-center">
      {/* multi select section */}
      <section className="col-12 position-relative col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-4 px-1 d-flex flex-column align-items-center justify-content-center my-5">
        {/* header */}
        <header className="w-100 mb-3">
          <h1 className="fs-4 fw-bold text-start">Multi Select/Title</h1>
        </header>
        {/* result mapper */}
        {genctx !== null && genctx.checkState.state.length > 0 && (
          <ul className=" h-flow w-100 p-2 d-flex overflow-auto end-100">
            {genctx.checkState.state.map((item: string, index: number) => (
              <li
                className="me-3 badge rounded-pill bg-primary "
                key={item + index}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        {/* main content */}
        <main className="shadow position-relative bg-body rounded w-100">
          <p
            onClick={handleDone}
            className={`p-4 fw-bold fs-5 position-absolute text-${color} cursor__pointer top-0 end-0`}
          >
            Done
          </p>
          {checkData &&
            checkData.map((item: eachCheck, index) => (
              <div key={item.title + index}>
                <TitleCheckSection
                  handleClick={(e: SyntheticEvent<HTMLInputElement>) =>
                    handleClick(e)
                  }
                  checkbox_count={item.checkbox.length}
                  data={item}
                  color = {color}
                />
              </div>
            ))}
        </main>
      </section>
    </div>
  );
}

export default Form;
