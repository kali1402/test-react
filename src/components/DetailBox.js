import React from "react";
import "../css/List.css";
import { Button } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

const DetailBox = (props) => {
  return (
    <>
      {props.count &&
        props.count.map((item, i) => (
          <>
            <div id="btnDetailDiv">
              <p>
                <Button>
                  <PlusCircleOutlined />
                  추가
                </Button>
              </p>
              <p>
                <Button>
                  <MinusCircleOutlined />
                  삭제
                </Button>
              </p>
            </div>
            <div key={i} id="DetailBoxDiv">
              <h1>{props.id}번 박스</h1>
              <div>
                <button
                  onClick={(e) => {
                    console.log("test");
                  }}
                >
                  T1
                </button>
                <div className="contentDiv">1차설명</div>
              </div>
              <br />
              <div>
                <button
                  onClick={(e) => {
                    console.log("test");
                  }}
                >
                  T2
                </button>
                <div className="contentDiv">2차설명</div>
              </div>
              <br />
              <div>
                <button
                  onClick={(e) => {
                    console.log("test");
                  }}
                >
                  T3
                </button>
                <div className="contentDiv">3차설명</div>
              </div>
              <br />
              <div>
                <button
                  onClick={(e) => {
                    console.log("test");
                  }}
                >
                  T4
                </button>
                <div className="contentDiv">4차설명</div>
              </div>
              <br />
              <div>
                <button
                  onClick={(e) => {
                    console.log("test");
                  }}
                >
                  T5
                </button>
                <div className="contentDiv">5차설명</div>
              </div>
            </div>
          </>
        ))}
    </>
  );
};

export default DetailBox;
