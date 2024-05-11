import React from "react";
import { GlobalStyle, ThemeProvider } from "@react95/core";
import IconBox from './iconBox'
import IconText from './iconText'
import './styles.scss'
import { Awfxcg321303, Explorer103, CdMusic } from "@react95/icons";

function Shortcuts({ openCV, openJava }) {
    return (
        <div>
            <ThemeProvider>
            <GlobalStyle></GlobalStyle>
                <IconBox style={{ alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: '50px', marginTop: '50px' }} className="pointer" onClick={() => openCV()}>
                    <Awfxcg321303 className="pointer" variant="32x32_4" />
                    <IconText style={{ marginLeft: '-30px'}} className="pointer">CV.txt</IconText>
                </IconBox>
                <IconBox style={{ alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: '50px', marginTop: '-30px'}} className="pointer" onClick={() => openJava()}>
                    <Explorer103 className="pointer" variant="32x32_4" />
                    <IconText style={{ marginLeft: '-50px', width: '140px'}} className="pointer">java_projects.txt</IconText>
                </IconBox>
            </ThemeProvider>
        </div>
    )
}

export default Shortcuts;