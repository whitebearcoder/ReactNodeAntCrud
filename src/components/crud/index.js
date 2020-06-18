import React, { useState, useContext } from 'react';
import { Layout, Button, Row, Col, Input } from 'antd';
import styled from 'styled-components';
import EditableTable from './EditableTable';
import AddUserModal from './AddUserModal';
import { AppContext } from '../../context/AppContext';
import * as ACTION_TYPE from '../../reducers/actionType';

const { Header, Content } = Layout;

const CrudPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <>
      <StyledHeader>Crud Page</StyledHeader>
      <StyledContent className="xl">
        <Row>
          <StyledCol span={24}>
            <FilterInput
              size="small"
              placeholder="Filter"
              value={state.users.filter.strValue}
              onChange={(e) => {
                dispatch({
                  type: ACTION_TYPE.CHANGE_USER_FILTER_STRING,
                  payload: e.target.value,
                });
              }}
            />
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
  margin-bottom: 1rem;

  .btn-adduser {
    margin-left: auto;
  }
`;

const FilterInput = styled(Input)`
  max-width: 360px;
`;
export default CrudPage;
