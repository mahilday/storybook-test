import { SyntheticEvent } from "react";
import { CheckBox } from "../components/CheckBox";
import Title from "../components/Title";

interface renderData {
  title: string;
  checkbox: string[];
}
type Props = {
    handleClick:(e: SyntheticEvent<HTMLInputElement>)=>void,
  checkbox_count: number;
  data: renderData;
  color: string,
};
export default function TitleCheckSection({ handleClick,checkbox_count, data, color }: Props) {
    // const genContext = useContext(GeneralContext);
  return (
    <div>
      <div className="title__height px-5 d-flex align-items-center">
        <Title title={data.title} />
      </div>
      <section>
      {data.checkbox &&
        data.checkbox.map((item: string, index: number) => (
          <div className="child__height px-5 d-flex align-items-center border__b__type" key={item + checkbox_count}>
            <CheckBox bgcolor={color} label={item} index={index} handleClick={(e: SyntheticEvent<HTMLInputElement>)=>handleClick(e)} />
          </div>
        ))}
        </section>
    </div>
  );
}
