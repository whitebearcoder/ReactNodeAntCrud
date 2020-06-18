import React, { useState } from 'react';
import { Layout, Button, Row, Col } from 'antd';
import styled from 'styled-components';
import EditableTable from './EditableTable';
import AddUserModal from './AddUserModal';
const { Header, Content } = Layout;

const CrudPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <>
      <StyledHeader>Crud Page</StyledHeader>
      <StyledContent className="xl">
        <Row>
          <StyledCol span={24}>
            <Button
              className="btn-adduser"
              type="primary"
              onClick={() => {
                setShowAddModal(true);
              }}
            >
              Add User +
            </Button>
          </StyledCol>
        </Row>
        <EditableTable />
        <AddUserModal
          isShow={showAddModal}
          hideModal={() => setShowAddModal(false)}
        />
      </StyledContent>
    </>
  );
};

const StyledHeader = styled(Header)`
  color: white;
  font-size: 2rem;
`;

const StyledContent = styled(Content)`
  padding: 24px;
`;

const StyledCol = styled(Col)`
  display: flex;

  .btn-adduser {
    margin-left: auto;
    margin-bottom: 1rem;
  }
`;
export default CrudPage;
