import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  Avatar,
  Badge,
  Drawer,
  Table,
  InputNumber,
  Image,
  Button,
  Row,
} from "antd";
//引入表格
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";

import {
  removeShoppingCart,
  changeQuantity,
} from "../../../redux/actions/shoppongCart";

function ShoppingCart(props) {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  //修改數量
  const handlequantity = (value, id) => {
    // console.log("!", value, id);
    const data = { id, value };
    props.changeQuantity(data);
  };

  //刪除購物車商品
  const handleRemove = (id) => {
    const newData = { id: id.key };
    props.removeShoppingCart(newData);
  };

  //前往訂單
  const navigate = useNavigate();
  const handleCheckout = () => {
    setOpen(false);
    navigate("checkout");
  };

  return (
    <>
      <Badge
        count={props.shoppingCart.length}
        offset={[-3, 3]}
        style={{ borderColor: "transparent" }}
        onClick={showDrawer}
      >
        <Avatar
          style={{ cursor: "pointer" }}
          shape="square"
          size="large"
          icon={<ShoppingCartOutlined />}
        />
      </Badge>

      <Drawer size="large" title="購物車" onClose={onClose} open={open}>
        <Table
          pagination={false}
          dataSource={props.shoppingCart}
          columns={[
            {
              title: "圖片",
              dataIndex: "url",
              render: (value) => <Image src={value} height={75} />,
            },
            {
              title: "商品",
              dataIndex: "name",
            },
            {
              title: "單價",
              dataIndex: "price",
              render: (value) => <span>${value}</span>,
            },
            {
              title: "數量",
              dataIndex: "quantity",
              render: (value, record) => {
                const { key } = record; //購物車ID
                return (
                  <InputNumber
                    defaultValue={value}
                    min={1}
                    onChange={(value) => handlequantity(value, key)}
                  />
                );
              },
            },
            {
              title: "總價",
              dataIndex: "total",
              render: (value) => <span>${value}</span>,
            },
            {
              title: "delete",
              render: (value) => (
                <DeleteOutlined
                  onClick={() => {
                    handleRemove(value);
                  }}
                />
              ),
            },
          ]}
        ></Table>
        <Row style={{ display: "flex", flexDirection: "column" }}>
          <h3 style={{ textAlign: "end", paddingBottom: "0.5rem" }}>
            Total: $
            {props.shoppingCart.reduce((acc, item) => acc + item.total, 0)}
          </h3>
          {props.shoppingCart.length != 0 ? (
            <Button type="primary" onClick={handleCheckout}>
              購買
            </Button>
          ) : (
            ""
          )}
        </Row>
      </Drawer>
    </>
  );
}

export default connect((state) => ({ shoppingCart: state.shoppingCart }), {
  removeShoppingCart,
  changeQuantity,
})(ShoppingCart);
