import React, { useState } from "react";
import DetailBox from "./DetailBox";

const DetailList = (props) => {
  const [count, setCount] = useState([]);
  const [id, setId] = useState(0);

  const onAddDetailBox = (i) => {
    setCount([1]);
    setId(i);
    console.log(`포커스 잡았습니다.${i}`);
  };

  const onRemoveDetailBox = (i) => {
    let countArr = [...count];
    if (countArr.length > 0) {
      countArr.pop();
    }
    setCount(countArr);
    setId(i);
    console.log(`포커스 풀었습니다.${i}`);
  };

  return (
    <>
      {props.countList &&
        props.countList.map((item, i) => (
          <div key={i} className="ListDiv">
            <h3>#{i + 1}</h3>

            <input
              className="Input"
              onFocus={() => {
                onAddDetailBox(i);
              }}
              // onBlur={() => {
              //   onRemoveDetailBox(i);
              // }}
              placeholder="input"
            />
          </div>
        ))}
      <DetailBox count={count} id={id} />
    </>
  );
};

export default DetailList;
