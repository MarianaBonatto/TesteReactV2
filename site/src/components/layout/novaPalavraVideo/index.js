import React, { useState } from "react";
import { i18n } from "../../../translate/i18n";

import UploadVideo from "../uploadVideo";

import "./index.css";

import midia from "../../../services/midia";
import { postPalavra, getPalavra } from "../../../services/palavra";
import { postVideo } from "../../../services/video";

import { Input, Button, Select } from "antd";

import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

class NovaPalavraVideo extends React.Component {
  state = {
    collapsed: false,
    palavra: "",
    arrayPalavras: [],
    videoRegioes: [],
    post: {
      palavra: "",
      linkVideo: "",
    },
    postRender: {
      palavra: "",
      linkVideo: "",
    },
    uploadedFiles: [],
  };

  adicionarPalavra = () => {
    this.setState({
      arrayPalavras: [...this.state.arrayPalavras, this.state.palavra],
    });

    const palavra = {
      idCurador: 1,
      idPalavra: 0,
      palavra: this.state.palavra,
      status: "AN",
      url_video_oficial: " ",
    };
    postPalavra(palavra);
  };

  retornaPalavra = () => {
    const palavras = getPalavra();
  };

  inserePalavra = (value) => {
    this.setState({
      palavra: value,
    });
  };

  onClick = () => {
    this.setState({
      arrayPalavras: [...this.state.arrayPalavras, this.state.palavra],
    });
  };

  onUploadedFiles = (files) => {
    this.setState({
      uploadedFiles: files,
    });
  };

  updateFile = (id, data) => {
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map((uploadedFile) => {
        return id === uploadedFile.id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      }),
    });
  };

  videoRegiao = (regiao) => {
    let regioes = this.state.videoRegioes;
    if (regioes.includes(regiao)) {
      regioes.splice(regioes.indexOf(regiao), 1);
    } else {
      regioes.push(regiao);
    }
    this.setState({ videoRegioes: regioes });
  };

  newPostVideo = () => {
    const data = new FormData();

    this.state.uploadedFiles.forEach((uploadedFile) => {
      data.append("file", uploadedFile.file, uploadedFile.name);
      midia
        .post("posts", data, {
          onUploadProgress: (e) => {
            const progress = parseInt(Math.round((e.loaded * 100) / e.total));

            this.updateFile(uploadedFile.id, {
              progress,
            });
          },
        })
        .then((response) => {
          this.updateFile(uploadedFile.id, {
            uploaded: true,
            id: response.data.id,
            url: `https://drive.google.com/uc?export=view&id=${response.data.id}`,
          });
        })
        .catch(() => {
          this.updateFile(uploadedFile.id, {
            error: true,
          });
        });
    });
  };
  // 2022-09-07T22:20:02.591Z
  newPost = () => {
    this.newPostVideo();

    if ((this.state.uploadedFiles.length = 1)) {
      let data = {
        data: this.getDate(),
        indicador_publico: 0,
        idLibweber: this.props.ID_LIBWEBER,
        url_video: this.state.uploadedFiles[0].url,
        idPalavra: 1,
        regioesIDS: this.state.videoRegioes,
      };

      console.log(this.state.palavra);

      postVideo(data)
        .then((res) => {
          console.log("Deu bom");
        })
        .catch((err) => {
          console.log("Deu ruim"); // Erro
        });
    } else {
      console.log("INSIRA UM VIDEO"); // ERRO
    }
  };

  getDate = () => {
    const Data = new Date();
    let date = // Formatação estranha que está na nossa API
      Data.getDate() +
      "/" +
      Data.getMonth() +
      "/" +
      Data.getFullYear() +
      " " +
      Data.getHours() +
      ":" +
      Data.getMinutes() +
      ":" +
      Data.getSeconds();

    return date;
  };

  setPalavras = () => {
    getPalavra()
      .then((res) => {
        let palavras = res.data;
        this.setState({ arrayPalavras: palavras });
      })
      .catch((err) => {
        this.setState({
          arrayPalavras: [{ idPalavra: 0, palavra: "ERRO AO OBTER DADOS" }],
        });
      });
  };

  render() {
    let palavras = this.state.arrayPalavras.map((i) => (
      <Option key={i.idPalavra} value={i.idPalavra}>
        {i.palavra}
      </Option>
    ));
    return (
      <div className="content-new">
        <div className="content-word">
          <h1>Adicionar novas palavras</h1>
          <Input
            className="input-new-word"
            suffix={<PlusOutlined onClick={this.onClick} />}
            placeholder={i18n.t("novo.adicionarPalavra")}
            onChange={(evt) => this.inserePalavra(evt.target.value)}
          />{" "}
          {/* 100px */}
        </div>
        <div className="content-video">
          <h1>Adicionar vídeos ao dicionário</h1>
          <div className="content-video-inside">
            <Select
              className="select-word"
              // style={{ width: '100%' }} //60px
              showSearch
              onFocus={(event) => {
                this.setPalavras();
              }}
              placeholder={i18n.t("novo.selecionePalavra")}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              onSelect={(arg) => {
                console.log(arg);
              }}
            >
              {palavras}
            </Select>
          </div>
          <div className="botoes">
            <Button
              className="btn"
              type="primary"
              shape="round"
              onClick={() => {
                this.videoRegiao(2);
              }}
            >
              {i18n.t("regioes.norte")}
            </Button>
            <Button
              className="btn"
              type="primary"
              shape="round"
              onClick={() => {
                this.videoRegiao(3);
              }}
            >
              {i18n.t("regioes.sul")}
            </Button>
            <Button
              className="btn"
              type="primary"
              shape="round"
              onClick={() => {
                this.videoRegiao(4);
              }}
            >
              {i18n.t("regioes.nordeste")}
            </Button>
            <Button
              className="btn"
              type="primary"
              shape="round"
              onClick={() => {
                this.videoRegiao(1);
              }}
            >
              {i18n.t("regioes.sudeste")}
            </Button>
            <Button
              className="btn"
              type="primary"
              shape="round"
              onClick={() => {
                this.videoRegiao(5);
              }}
            >
              {i18n.t("regioes.centroOeste")}
            </Button>
          </div>
          <div className="video-uploader">
            <UploadVideo
              onUploadedFiles={this.onUploadedFiles}
              uploadedFiles={this.state.uploadedFiles}
            />
          </div>
          <div className="video-upl-botoes">
            <Button
              className="bnt"
              style={{
                background: "#ED6E0C",
                borderColor: "#ED6E0C",
                width: "6rem",
              }}
              type="primary"
              shape="round"
            >
              {i18n.t("botoes.cancelar")}
            </Button>

            <Button
              className="bnt"
              style={{
                background: "#1EA672",
                borderColor: "#1EA672",
                width: "6rem",
                // color: '#1EA672',
              }}
              type="primary"
              shape="round"
              onClick={this.newPost}
            >
              {i18n.t("botoes.salvar")}
            </Button>
          </div>
        </div>
      </div>

      // <Card
      //     className='card'
      // // style={{
      // //     width: '30%',
      // //     borderRadius: 15,
      // //     boxShadow: '2px 2px 2px #D6D6D6'
      // // }}
      // >
      //     <Space direction="vertical" size="middle"
      //     // style={{ display: 'flex' }}
      //     >
      //         <Input.Group compact>
      //             <Input
      //                 // style={{ width: 'calc(100% - 45px)' }}
      //                 placeholder={i18n.t('novo.adicionarPalavra')}
      //                 onChange={evt => this.inserePalavra(evt.target.value)} /> {/* 100px */}
      //             <Button
      //                 onClick={this.onClick}//{this.adicionarPalavra}
      //                 type="primary"
      //             // style={{
      //             //     borderColor: '#ED6E0C',
      //             //     background: '#ED6E0C',
      //             // }}
      //             >
      //                 +
      //             </Button>
      //         </Input.Group>
      //         {/* --------------------------------------------------------- */}
      //         <Select
      //             // style={{ width: '100%' }} //60px
      //             showSearch
      //             placeholder={i18n.t('novo.selecionePalavra')}
      //             optionFilterProp="children"
      //             onChange={this.inserePalavra}
      //             filterOption={(input, option) =>
      //                 option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      //             }>
      //             {palavras}
      //         </Select>
      //         {/* -------------------------------------------------- */}
      //         <Select
      //             // style={{ width: '100%' }} //60px
      //             showSearch
      //             placeholder={i18n.t('novo.selecioneRegiao')}
      //             optionFilterProp="children"
      //             filterOption={(input, option) =>
      //                 option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      //             }>

      //             <Option value="0">. . .</Option>
      //             <Option value="1">{i18n.t('regioes.norte')}</Option>
      //             <Option value="2">{i18n.t('regioes.nordeste')}</Option>
      //             <Option value="3">{i18n.t('regioes.sul')}</Option>
      //             <Option value="4">{i18n.t('regioes.sudeste')}</Option>
      //             <Option value="5">{i18n.t('regioes.centroOeste')}</Option>
      //         </Select>
      //         {/* ----------------------------------------- */}
      //         <Dragger>
      //             {/* <Dragger {...props}> */}
      //             <p className="ant-upload-drag-icon">
      //                 <InboxOutlined
      //                 // style={{
      //                 //     color: '#ED6E0C',
      //                 // }}
      //                 />
      //             </p>
      //             <p className="ant-upload-text">{i18n.t('novo.adicionarVideo')}</p>
      //         </Dragger>

      //         {/* ------------------------------------------ */}

      //         <Space
      //         // style={{
      //         //     display: 'flex',
      //         //     justifyContent: 'center'
      //         // }}
      //         >
      //             <Button
      //                 // style={{
      //                 //     background: '#ED6E0C',
      //                 //     borderColor: '#ED6E0C'
      //                 // }}
      //                 type="primary">{i18n.t('botoes.cancelar')}</Button>

      //             <Button
      //                 // style={{
      //                 //     borderColor: '#ED6E0C',
      //                 //     color: '#ED6E0C',
      //                 // }}
      //                 onClick={this.newPost}
      //             >{i18n.t('botoes.salvar')}</Button>
      //         </Space>
      //     </Space>
      // </Card>
    );
  }
}

export default NovaPalavraVideo;
