import React, {ReactElement, ReactNode} from "react";
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

interface CheckboxProps {
    value: boolean;
    onChange: (v: boolean) => void;
    label?: ReactNode;
}

export function Checkbox(props: CheckboxProps): ReactElement {

    const onChange = () => {
        props.onChange(!props.value);
    };

    return (
        <CheckboxContainer>
            <CheckboxInput onChange={onChange} type="checkbox"/>
            <CheckboxIcon>
                {props.value ? <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M46.3217 12.5402C41.4027 7.86736 34.7521 5 27.4318 5C12.2816 5 0 17.2816 0 32.4318C0 47.5819 12.2816 59.8635 27.4318 59.8635C42.5819 59.8635 54.8635 47.5819 54.8635 32.4318C54.8635 31.9325 54.8502 31.4365 54.8238 30.9438L48.1313 37.6243C45.8123 46.8982 37.4243 53.7676 27.4318 53.7676C15.6483 53.7676 6.09595 44.2152 6.09595 32.4318C6.09595 20.6483 15.6483 11.0959 27.4318 11.0959C33.0636 11.0959 38.1858 13.278 41.999 16.8428L46.3217 12.5402Z"
                            id="circle"/>
                        <path fillRule="evenodd" clipRule="evenodd" fill="#FF4A55"
                              d="M58.64 9.29215C57.9702 8.61779 56.8797 8.61779 56.2145 9.29215L30.655 34.7328C29.9852 35.4118 28.8925 35.4118 28.2273 34.7328L17.0283 23.3281C16.6968 22.9897 16.2625 22.8229 15.8258 22.8206C15.3846 22.8183 14.9366 22.9852 14.6006 23.3281L9.65141 27.7766C9.32223 28.1149 9.14392 28.5378 9.14392 28.979C9.14392 29.4225 9.32223 29.8865 9.65369 30.2226L20.9464 42.0731C21.6139 42.7497 22.7089 43.847 23.3741 44.5191L28.2296 49.4134C28.8971 50.0832 29.9875 50.0832 30.6573 49.4134L63.4977 16.6324C64.1675 15.9604 64.1675 14.8562 63.4977 14.1841L58.64 9.29215Z"
                              id="checkmark"/>
                    </svg>
                    : <svg
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
                    </svg>}
            </CheckboxIcon>
            {props.label}
        </CheckboxContainer>
    );
}
