import React, { Component } from "react";
import { i18n } from "../../../translate/i18n";

import Dropzone from "react-dropzone";

import { DropContainer, UploadMessage } from "./styles";
import { InboxOutlined } from "@ant-design/icons";

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return (
        <UploadMessage type="warning">{i18n.t("textos.insiraVideoAqui")}</UploadMessage>
      );
    }

    if (isDragReject) {
      return <UploadMessage type="error">{i18n.t("textos.arquivoNaoSuportado")}</UploadMessage>;
    }

    return <UploadMessage type="success">{i18n.t("textos.solteArquivosAqui")}</UploadMessage>;
  };

  render() {
    const { onUpload } = this.props;

    return (
      <Dropzone onDropAccepted={onUpload}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
            style={{
              width: '100%',
              height: '100%',
              border: '1px solid',
              color: "#ED6E0C",
            }}
          >
            <InboxOutlined
              // size={}
              style={{
                color: "#ED6E0C",
                display: 'flex',
                justifyContent: 'center',
                padding: '1rem'
              }}
            />
            <input {...getInputProps()} />
            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    );
  }
}
