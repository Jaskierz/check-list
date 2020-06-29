import React, {Fragment, ReactElement} from "react";
import {CheckboxList} from "../checkboxList";
import styled from "styled-components";
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import {Checkbox} from "../checkbox";

const StyledContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 561px) {
    width: 472px;
    height: 554px;
    box-shadow: -10px 0px 16px rgba(0, 0, 0, 0.05);
    margin: auto 0 auto 83px;
    border-radius: 8px;
  }
`;

const StyledHeader = styled.h1`
  margin: 136px 22px 20px;
`;

const StyledParagraph = styled.p`
  margin: 0 22px 28px;
`;

const ProgressBarContainer = styled.div`
  margin: 0 22px;
`;

const ProgressBarEmpty = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background: #e5e5e5;
`;

const ProgressBarContent = styled.div`
  width: 40%;
  background: #ff4a55;
  border-radius: 4px;
  height: 4px;
  z-index: 1;
`;

const StyledList = styled.div`
  background: #f5f5f5;
  padding: 4px 36px 4px 23px;
`;

const StyledFooter = styled.div`
  height: 75px;
  display: flex;
  padding: 0 22px;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled.a`
  background-color: #ff4a55;
  border-radius: 32px;
  color: #ffffff;
  font-weight: bold;
  padding: 8px 28px;
`;

const LoadingPage: React.FC = () => {
    return (
        <Fragment>
            <StyledParagraph>
                We are gathering available privacy settings...
            </StyledParagraph>
            <ProgressBarContainer>
                <ProgressBarEmpty>
                    <ProgressBarContent/>
                </ProgressBarEmpty>
            </ProgressBarContainer>
        </Fragment>
    );
};

const DefaultPage: React.FC = () => {
    return (
        <Fragment>
            <OverlayScrollbarsComponent style={{flexGrow: 1}}>
                <StyledList>
                    <CheckboxList/>
                </StyledList>
            </OverlayScrollbarsComponent>
            <StyledFooter>
                <Checkbox/>
                <StyledButton>Confirm</StyledButton>
            </StyledFooter>
        </Fragment>
    );
};

export function App(): ReactElement {
    return (
        <StyledContainer>
            <StyledHeader>
                Hey, take a moment to <b>adjust your privacy settings</b>
            </StyledHeader>
            <LoadingPage/>
            <DefaultPage/>
        </StyledContainer>
    );
}
