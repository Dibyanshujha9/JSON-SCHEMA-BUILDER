import React from 'react';
import { Input, Select, Button, Space } from 'antd';
import SchemaBuilder from './SchemaBuilder';

const { Option } = Select;

const FieldItem = ({ field, onChange, onDelete }) => {
  const handleNestedChange = (nestedFields) => {
    onChange({ ...field, children: nestedFields });
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <Space>
        <Input
          placeholder="Field Name"
          value={field.name}
          onChange={(e) => onChange({ ...field, name: e.target.value })}
        />
        <Select
          value={field.type}
          onChange={(value) => onChange({ ...field, type: value })}
          style={{ width: 120 }}
        >
          <Option value="String">String</Option>
          <Option value="Number">Number</Option>
          <Option value="Nested">Nested</Option>
        </Select>
        <Button danger onClick={onDelete}>
          Delete
        </Button>
      </Space>

      {field.type === 'Nested' && (
        <div style={{ marginLeft: '20px', marginTop: '10px' }}>
          <SchemaBuilder fields={field.children || []} onChange={handleNestedChange} />
        </div>
      )}
    </div>
  );
};

export default FieldItem;
