import React, {ReactElement} from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
`;

const CheckboxInput = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

const CheckboxIcon = styled.div`
  display: inline-flex;
  width: 18px;
  height: 18px;
  margin-right: 14px;

  svg {
    max-height: 18px;
  }

  &:hover {
    fill: red;
  }
`;

export function Checkbox(): ReactElement {
    return (
        <CheckboxContainer>
            <CheckboxInput type="checkbox"/>
            <CheckboxIcon>
                <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.43 53.7644C39.2127 53.7644 48.7644 44.2127 48.7644 32.43C48.7644 20.6473 39.2127 11.0956 27.43 11.0956C15.6473 11.0956 6.09556 20.6473 6.09556 32.43C6.09556 44.2127 15.6473 53.7644 27.43 53.7644ZM27.43 59.86C42.5792 59.86 54.86 47.5792 54.86 32.43C54.86 17.2808 42.5792 5 27.43 5C12.2808 5 0 17.2808 0 32.43C0 47.5792 12.2808 59.86 27.43 59.86Z"
                    />
                </svg>
            </CheckboxIcon>
            Support
        </CheckboxContainer>
    );
}
