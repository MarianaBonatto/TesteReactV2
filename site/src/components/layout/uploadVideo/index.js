import React, { Component } from "react";
import { uniqueId } from "lodash";
import filesize from "filesize";

import { Container, Content } from "./styles";

import UploadFile from "../upload";
import FileList from "../fileList";

export default class uploadVideo extends Component {
  handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      uploaded: false,
      error: false,
      url: null,
    }));

    this.setUploadedFiles(this.props.uploadedFiles.concat(uploadedFiles));
  };

  setUploadedFiles(files) {
    this.props.onUploadedFiles(files);
  }

  render() {
    const { uploadedFiles } = this.props;

    return (
      <Container style={{ width: '50%', height: '50%' }}>
        <Content >
          <UploadFile onUpload={this.handleUpload} />
          {!!uploadedFiles.length && (
            <FileList files={uploadedFiles} onDelete={this.setUploadedFiles} />
          )}
        </Content>
      </Container>
    );
  }
}
