import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Collapse } from "antd";
import "./style.css";

function Order(props) {
  const items = props.state.map((d) => {
    return {
      key: d.user.id,
      label: (
        <p key={d.user.id}>
          <span>訂單ID: {d.user.id}</span>
          <span>購買人: {d.user.name}</span>
          <span>地址: {d.user.address}</span>
          <span>
            總價:$ {d.detail.reduce((acc, item) => acc + item.total, 0)}
          </span>
        </p>
      ),
      children: (
        <Fragment key={d.user.id}>
          {d.detail.map((pro, index) => {
            return (
              <p key={pro.key}>
                <span>#{index + 1}</span>
                <span>品名: {pro.name}</span>
                <span>數量: {pro.quantity}</span>
                <span>單價:$ {pro.price}</span>
              </p>
            );
          })}
        </Fragment>
      ),
    };
  });

  if (props.state == "") {
    return (
      <div>
        <h1 style={{ textAlign: "center", padding: "3rem" }}>尚無訂單</h1>
      </div>
    );
  }
  return (
    <Collapse className="order_detail" items={items} defaultActiveKey={["1"]} />
  );
}

export default connect((state) => ({ state: state.order }), {})(Order);
