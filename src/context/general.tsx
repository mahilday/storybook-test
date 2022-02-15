import {createContext, SetStateAction, useState } from "react";

interface GeneralProps {
  checkState: { state: Array<string>; setState: SetStateAction<any> },
  handleDone: (newState: any)=> void,
}
export const GeneralContext = createContext<GeneralProps | null>(null);

export const GenProvider = ({ children }: any) => {
  const [checkState, setCheckState] = useState([]);
    const handleDone =(newState: any)=>{
        setCheckState(newState)
    }
  const contextVal: GeneralProps = {
    checkState: {
      state: checkState,
      setState: setCheckState,
    },
    handleDone:(newState: any)=>handleDone(newState)
  };
  return (
    <GeneralContext.Provider value={contextVal}>
      {children}
    </GeneralContext.Provider>
  );
};
