import React, { useState } from "react";
import { connect } from "react-redux";
import { selectOption } from "../actions";
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
  console.log(props); // 잘 들어왔는지 확인
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
              onClick={() => props.selectOption(i + 1)}
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

const mapStateToProps = (state) => {
  return { num: state.num };
};

export default connect(mapStateToProps, {
  selectOption,
})(DetailList);
