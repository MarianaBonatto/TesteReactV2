import React, { useState } from "react";
import "./index.css";
import { i18n } from "../../../translate/i18n";
import { Input, Space, Table, Tag, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Navigate } from "react-router-dom";

const { Search } = Input;

const getColumns = (booleano) => {
  let columns = [
    {
      title: i18n.t("pendente.palavra"),
      dataIndex: "palavra",
      key: "palavra",
    },
    {
      title: i18n.t("pendente.status"),
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color;
            if (tag == i18n.t("pendente.aprovado")) {
              color = "green";
            } else if (tag == i18n.t("pendente.reprovado")) {
              color = "yellow";
            } else color = "red";

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: i18n.t("pendente.acao"),
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button disabled={booleano}>
            <a>
              {" "}
              {i18n.t("pendente.aprove")}
              {record.name}
            </a>
          </Button>
          <Button disabled={booleano}>
            <a>{i18n.t("pendente.reprove")}</a>
          </Button>
        </Space>
      ),
    },
  ];
  return columns;
};

const getData = () => {
  let data = [
    {
      key: "1",
      palavra: "Apresentação",
      tags: [i18n.t("pendente.aprovado")],
    },
    {
      key: "2",
      palavra: "Chocolate",
      tags: [i18n.t("pendente.reprovado")],
    },
    {
      key: "3",
      palavra: "Protótipo",
      tags: [i18n.t("pendente.analise")],
    },
  ];
  return data;
};

const Pendentes = (props) => {
  let disabled = false;
  switch (props.tipLibweber) {
    case "CUR":
      disabled = false;
      break;
    case "LIB":
    default:
      disabled = true;
      <Navigate to="/login" />;
  }

  return (
    <div className="content-pendentes">
      <div className="search-content">
        <div disabled>
          <Input
            prefix={<SearchOutlined />}
            placeholder={i18n.t("pesquisa.input")}
            disabled={disabled}
          />

          <Table
            columns={getColumns(disabled)}
            dataSource={getData()}
            className="tabela"
          />
        </div>
      </div>
    </div>
  );
};

export default Pendentes;
