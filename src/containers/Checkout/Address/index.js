import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import { Form, Input, Cascader, Button } from "antd";

const Adderss = () => {
  //地址
  const options = [
    {
      code: "台北",
      name: "台北",
      items: [
        {
          code: "信義區",
          name: "信義區",
        },
        {
          code: "大安區",
          name: "大安區",
        },
      ],
    },
    {
      code: "高雄",
      name: "高雄",
      items: [
        {
          code: "前鎮區",
          name: "前鎮區",
        },
        {
          code: "前金區",
          name: "前金區",
        },
      ],
    },
  ];

  const [formData, setFormData] = useState({
    id: nanoid(),
    name: "",
    address: "",
  });
  const handleName = (e) => {
    setFormData((prevState) => ({ ...prevState, name: e.target.value }));
  };

  const handleAddress = (value) => {
    setFormData((prevState) => ({ ...prevState, address: value }));
  };

  const handleSubmit = () => {
    navigate("detail", { state: formData });
  };

  //返回
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  return (
    <Form>
      <Form.Item label="姓名">
        <Input onChange={handleName} placeholder="王大明" required allowClear />
      </Form.Item>
      <Form.Item label="地址">
        <Cascader
          fieldNames={{
            label: "name",
            value: "code",
            children: "items",
          }}
          options={options}
          onChange={handleAddress}
          placeholder="Please select"
        />
      </Form.Item>
      <div style={{ display: "flex" }}>
        <Button onClick={back}>返回</Button>
        <Button
          style={{ marginLeft: "auto" }}
          type="primary"
          htmlType="submit"
          onClick={handleSubmit}
          disabled={formData.name == "" || formData.address == 0 ? true : false}
        >
          下一步
        </Button>
      </div>
    </Form>
  );
};

export default Adderss;
