import React, {ReactElement, useEffect, useState} from "react";
import {CheckboxList} from "../checkboxList";
import styled, {keyframes} from "styled-components";
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import axios, {AxiosResponse} from "axios";
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

const moveHeader = keyframes`
    to {
        margin: 30px 22px 20px;
    }
`;

const StyledHeader = styled.h1`
  margin: 136px 22px 20px;
  animation: 1s ${moveHeader} 2s forwards;
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

const fillProgress = keyframes`
    0% {
        width: 0%;
    }
    100%{
        width: 100%;
    }
`;

const hideProgressContainer = keyframes`
    to {
        height: 0;
        opacity: 0;
        display: none;
    }
`;

const ProgressContainer = styled.div`
    height: 100%;
    animation: 2s ${hideProgressContainer} 1s forwards;
`;

const ProgressBarContent = styled.div`
  animation: 2s ${fillProgress} ease-out;
  background: #ff4a55;
  border-radius: 4px;
  height: 4px;
  z-index: 1;
`;

const StyledList = styled.div`
  background: #f5f5f5;
  padding: 4px 36px 4px 23px;
`;

const showStyledFooter = keyframes`
    to {
        opacity: 1;
    }
`;

const StyledFooter = styled.div`
  height: 75px;
  opacity: 0;
  animation: 2s ${showStyledFooter} 3s forwards;
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
  cursor: pointer;
  
  &:hover {
    background-color: #FF858C;
  }
  
  &:active {
    background-color: #282828;
  }
  
  &:focus {
    background-color: #E5E5E5;
    color: #282828;
  }
`;

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 13px 17px;
  margin: 14px 0;
`;

interface Company {
    id: number;
    uuid: number;
    name: string;
    group: number;
    description: string;
    departments: {
        label: string;
        code: string;
        required: boolean;
    }[];
}

export function App(): ReactElement {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [departments, setDepartments] = useState<string[]>([]);
    const [selectedAll, setSelectedAll] = useState<boolean>(false);

    useEffect(() => {
        axios.get('http://localhost:3000/companies')
            .then(function (response: AxiosResponse) {
                setCompanies(response.data);
            });
    }, []);

    useEffect(() => {
        if (localStorage.getItem('data')) {
            setDepartments(JSON.parse(localStorage.getItem('data') || '{}'));
        }
    }, []);

    useEffect(() => {
        checkAllSelected();
    });

    const onValueChange = (v: string[]) => {
        setDepartments([...v]);
    };

    const saveData = () => {
        localStorage.setItem('data', JSON.stringify(departments));
    };

    const selectAll = () => {
        let departmentsLength = getDepartmentsLength();
        if (departments.length === departmentsLength) {
            setDepartments([]);
            setSelectedAll(false);
        } else {
            const departments = [''];
            companies.map(company => {
                company.departments.map(department => {
                    departments.push(department.code);
                })
            });
            setDepartments(departments);
            setSelectedAll(true);
        }
    };

    const getDepartmentsLength = () => {
        let departmentsLength = 1;
        companies.map(company => {
            departmentsLength = company.departments.length + departmentsLength;
        });
        return departmentsLength;
    };

    const checkAllSelected = () => {
        let departmentsLength = getDepartmentsLength();
        departmentsLength === departments.length ? setSelectedAll(true) : setSelectedAll(false);
    };

    return (
        <StyledContainer>
            <StyledHeader>
                Hey, take a moment to <b>adjust your privacy settings</b>
            </StyledHeader>
            <ProgressContainer>
                <StyledParagraph>
                    We are gathering available privacy settings...
                </StyledParagraph>
                <ProgressBarContainer>
                    <ProgressBarEmpty>
                        <ProgressBarContent/>
                    </ProgressBarEmpty>
                </ProgressBarContainer>
            </ProgressContainer>
            <OverlayScrollbarsComponent style={{flexGrow: 1}}>
                <StyledList>
                    {companies.map(company => {
                        const items = company.departments.map(item => ({id: item.code, label: item.label}));
                        return <Card key={company.id}>
                            <h3>{company.name}</h3>
                            <CheckboxList items={items} value={departments} onChange={onValueChange}/>
                        </Card>
                    })}
                </StyledList>
            </OverlayScrollbarsComponent>
            <StyledFooter>
                <Checkbox label={'Select all'} value={selectedAll} onChange={selectAll}/>
                <StyledButton onClick={saveData}>Confirm</StyledButton>
            </StyledFooter>
        </StyledContainer>
    );
}
