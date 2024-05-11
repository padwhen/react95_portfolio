import React from "react";
import { List } from "@react95/core";
import { Awfxcg321303 } from "@react95/icons";
import * as S from "./layoutStyling";
import cv from '../assets/CV.jpg'

function CV({ closeCV, isMobile }) {
  const cvUrl = 'https://drive.google.com/file/d/1_pTNSRJdL2rC2p-d3y7NPOFHMKvwDJcX/view';
  return (
    <S.layoutMain
      isMobile={isMobile}
      title={"CV.txt"}
      closeModal={closeCV}
      height="100%"
      icon={<Awfxcg321303 variant="32x32_4" />}
      menu={[
        {
          name: "Options",
          list: (
            <List>
              <List.Item onClick={closeCV}>Close</List.Item>
            </List>
          ),
        },
      ]}
    >
      <S.layoutMainContent bg="white" boxShadow="in">
        <a href={cvUrl} target="_blank"><img src={cv} style={{ width: '700px'}} /></a>
      </S.layoutMainContent>
    </S.layoutMain>
  );
}

export default CV;
