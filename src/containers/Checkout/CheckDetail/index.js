import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addOrder } from "../../../redux/actions/order";
import { deleteAllShoppingCart } from "../../../redux/actions/shoppongCart";

import { Descriptions, Table, Button, Form } from "antd";

const CheckDetail = (props) => {
  const data = useLocation().state;

  //table 的標題
  const columns = [
    {
      title: "品名",
      dataIndex: "name",
      width: 200,
    },
    {
      title: "數量",
      dataIndex: "quantity",
      width: 200,
    },
    {
      title: "單價",
      dataIndex: "price",
      width: 200,
    },
  ];

  // table 的內容
  const items = [
    {
      key: "1",
      span: 3,
      label: "訂單ID",
      children: data.id,
    },
    {
      key: "2",
      label: "姓名",
      children: data.name,
    },
    {
      key: "3",
      label: "地址",
      span: 2,
      children: data.address,
    },
    {
      key: "4",
      span: 3,
      label: "信單明細",
      children: (
        <Table
          dataSource={props.state}
          columns={columns}
          pagination={false}
        ></Table>
      ),
    },
    {
      key: "5",
      label: "總價",
      span: 1,
      children: "$ " + props.state.reduce((acc, item) => acc + item.total, 0),
    },
  ];

  //返回按鈕
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };

  //結帳送出
  const handleSubmit = () => {
    const newObj = {
      user: data,
      detail: props.state,
    };
    //結帳後訂單明細
    props.addOrder(newObj);
    props.deleteAllShoppingCart(true);
    navigate("/store");
  };

  return (
    <Form>
      <Descriptions title="訂單明細" layout="vertical" items={items} />
      <div style={{ display: "flex" }}>
        <Button onClick={goback}>返回</Button>
        <Button
          style={{ marginLeft: "2rem" }}
          type="primary"
          htmlType="submit"
          onClick={handleSubmit}
        >
          結帳
        </Button>
      </div>
    </Form>
  );
};

export default connect((state) => ({ state: state.shoppingCart }), {
  addOrder,
  deleteAllShoppingCart,
})(CheckDetail);
