import React, { useEffect } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import { Col, Row, Button, Image, message, Breadcrumb } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { addShoppingCart } from "../../../../redux/actions/shoppongCart";
import { productDetail } from "../../../../redux/actions/products";

const Detail = (props) => {
  const { id } = useParams();

  //加入購物車成功後提示
  const [messageApi, contextHolder] = message.useMessage();
  const handleAdd = (name, price, url) => {
    messageApi.open({
      type: "success",
      content: "已經加入購物車!",
    });
    const newObj = {
      key: nanoid(),
      name: name,
      price: price,
      quantity: 1,
      total: "???",
      url,
    };
    props.addShoppingCart(newObj);
  };

  useEffect(() => {
    props.productDetail(id);
  }, []);

  const data = props.state[0];

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: <Link to={"/store"}>商店</Link>,
          },
          {
            title: <p>{data.name}</p>,
          },
        ]}
      />
      <Row justify="space-evenly" style={{ marginTop: "0.5rem" }}>
        {contextHolder}
        <Col sm={10} xs={24}>
          <Image src={data.url} style={{ maxHeight: "500px" }} />
        </Col>
        <Col
          sm={10}
          xs={24}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1>{data.name}</h1>
          <p style={{ paddingTop: "1rem", fontSize: "1.25rem" }}>
            {data.detail}
          </p>
          <h2 style={{ marginTop: "auto" }}>$ {data.price}</h2>
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            style={{ borderRadius: "3px", marginTop: "0.5rem" }}
            onClick={() => handleAdd(data.name, data.price, data.url)}
          >
            加入購物車
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default connect((state) => ({ state: state.products }), {
  addShoppingCart,
  productDetail,
})(Detail);
