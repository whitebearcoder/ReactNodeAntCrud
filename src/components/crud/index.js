import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import EditableTable from "./EditableTable";
const { Header, Content } = Layout;

const CrudPage = () => {
  return (
    <>
      <StyledHeader>Crud Page</StyledHeader>
      <StyledContent className="xl">
        <EditableTable />
      </StyledContent>
    </>
  );
};

const StyledHeader = styled(Header)`
  color: white;
  font-size: 2rem;
`;

const StyledContent = styled(Content)``;
export default CrudPage;
