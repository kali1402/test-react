import React, { useState } from "react";
import { Button } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import DetailList from "./DetailList";
import { connect } from "react-redux";
import "../css/List.css";

const List = ({ selectOption }) => {
  console.log("selectOption: " + selectOption);
  const [countList, setCountList] = useState([]);

  const onAddDetailDiv = () => {
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter);
    setCountList(countArr);
  };

  const onRemoveDetailDiv = () => {
    let countArr = [...countList];
    if (countArr.length > 0) {
      countArr.pop();
    }
    setCountList(countArr);
  };

  return (
    <>
      <div id="btnDiv">
        <p>
          <Button onClick={onAddDetailDiv}>
            <PlusCircleOutlined />
            추가
          </Button>
        </p>
        <p>
          <Button onClick={onRemoveDetailDiv}>
            <MinusCircleOutlined />
            삭제
          </Button>
        </p>
      </div>
      <div>
        <div id="listDiv">
          <DetailList countList={countList} id="DetailList" />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { selectOption: state.selectOption };
};

export default connect(mapStateToProps)(List);
