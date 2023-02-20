import { NextComponentType, NextPageContext } from "next";
import { useState } from "react";

type Props = {
  onClick: ()=>void
}

export const SearchForm: NextComponentType<NextPageContext, null, Props> = ({ onClick }) => {
  const [value, setValue] = useState<string>("");

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={onchange} value={value} />
      <button onClick={onClick}>検索</button>
    </div>
  );
};