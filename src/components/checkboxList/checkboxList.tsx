import React, { ReactElement, ReactNode, Fragment } from "react";
import { Checkbox } from "../checkbox";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  margin-top: 20px;
`;

interface CheckboxListProps {
  items: {
    id: string;
    label: ReactNode;
  }[];
  value: string[];
  onChange: (v: string[]) => void;
}

export function CheckboxList(props: CheckboxListProps): ReactElement {
  return (
    <Fragment>
      {props.items.map((item: { id: string; label: ReactNode }) => {
        const getCheckboxValue = (v: boolean) => {
          const values = props.value;
          const index = values.indexOf(item.id);
          v ? values.push(item.id) : values.splice(index, 1);
          return props.onChange(values);
        };
        return (
          <CheckboxContainer key={item.id}>
            <Checkbox
              label={item.label}
              value={props.value.includes(item.id)}
              onChange={getCheckboxValue}
            />
          </CheckboxContainer>
        );
      })}
    </Fragment>
  );
}
