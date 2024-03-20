import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import { Card, Col, Row, Button, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { addShoppingCart } from "../../../redux/actions/shoppongCart";
import "./style.css";

const Detail = (props) => {
  const { Meta } = Card;
  const navigate = useNavigate();
  //商品詳情連結
  const handleDetail = (state) => {
    return () => {
      navigate("detail", { state });
    };
  };

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
      total: null,
      url,
    };
    props.addShoppingCart(newObj);
  };

  return (
    <Row gutter={{ xs: 0, sm: 16, md: 24, lg: 32 }}>
      {contextHolder}
      {props.products.map((d) => {
        return (
          <Col
            key={d.id}
            sm={12}
            xl={6}
            xs={24}
            style={{ paddingBottom: "2rem" }}
          >
            <Card
              className="store_card"
              hoverable
              cover={
                <img
                  style={{
                    padding: "1rem",
                    objectFit: "contain",
                  }}
                  src={d.url}
                  alt="example"
                />
              }
              onClick={handleDetail({ ...d })}
            >
              <Meta title={`${d.name}`} />
              <Row align="middle">
                <p>{`$ ${d.price}`}</p>
                <Button
                  style={{ marginLeft: "auto" }}
                  icon={<ShoppingCartOutlined />}
                  size="large"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleAdd(d.name, d.price, d.url);
                  }}
                ></Button>
              </Row>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default connect((state) => ({ products: state.products }), {
  addShoppingCart,
})(Detail);
