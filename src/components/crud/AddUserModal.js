import React, { useState, useContext } from 'react';
import { Button, Modal, Input, Form, InputNumber } from 'antd';
import RequestHelper from '../../utils/RequestUtils';
import styled from 'styled-components';
import { AppContext } from '../../context/AppContext';
import * as ACTION_TYPE from '../../reducers/actionType';

const AddUserModal = ({ isShow, hideModal }) => {
  const { dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const addUser = () => {};

  const onFinish = (values) => {
    setLoading(true);
    RequestHelper.post('/user', { ...values })
      .then((res) => {
        if (res.data.success) {
          dispatch({
            type: ACTION_TYPE.ADD_USER,
            payload: {
              key: res.data.user.toString(),
              id: res.data.user.id,
              name: res.data.user.name,
              age: res.data.user.age,
              address: res.data.user.address,
            },
          });
        }
        setLoading(false);
        hideModal();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <AddModal
      title="Add User"
      visible={isShow}
      onOk={addUser}
      onCancel={hideModal}
      footer={[
        <Button key="back" onClick={hideModal} className="btn-cancel">
          Cancel
        </Button>,
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          form="addUserForm"
        >
          Submit
        </Button>,
      ]}
    >
      <Form
        id="addUserForm"
        name="addUserForm"
        initialValues={{ name: '', age: 20, address: '' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          labelCol={{ span: 24 }}
          name="name"
          rules={[{ required: true, message: 'Please input name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Age"
          labelCol={{ span: 24 }}
          name="age"
          rules={[{ required: true, message: 'Please input age!' }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Address"
          labelCol={{ span: 24 }}
          name="address"
          rules={[{ required: true, message: 'Please input address!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </AddModal>
  );
};

const AddModal = styled(Modal)`
  .ant-modal-footer {
    display: flex;
    justify-content: flex-end;

    .btn-cancel {
      margin-right: 1rem;
    }

    .ant-form-item {
      margin-bottom: 0;
    }
  }
`;

export default AddUserModal;
