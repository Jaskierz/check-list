import React, {ReactElement} from "react";
import {Checkbox} from "../checkbox";
import styled from "styled-components";

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 13px 17px;
  margin: 14px 0;
`;

const CheckboxContainer = styled.div`
  margin-top: 20px;
`;

export function CheckboxList(): ReactElement {
    return (
        <Card>
            <h3>Simonis-Fisher</h3>
            <CheckboxContainer>
                <Checkbox/>
            </CheckboxContainer>
        </Card>
    );
}
