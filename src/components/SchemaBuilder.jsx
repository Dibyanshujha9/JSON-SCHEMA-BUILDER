import React from 'react';
import { Button } from 'antd';
import FieldItem from './FieldItem';

const SchemaBuilder = ({ fields, onChange }) => {
  const handleAddField = () => {
    onChange([...fields, { name: '', type: 'String', children: [] }]);
  };

  const handleFieldChange = (index, newField) => {
    const updated = [...fields];
    updated[index] = newField;
    onChange(updated);
  };

  const handleDelete = (index) => {
    const updated = [...fields];
    updated.splice(index, 1);
    onChange(updated);
  };

  return (
    <div>
      {fields.map((field, index) => (
        <FieldItem
          key={index}
          field={field}
          onChange={(newField) => handleFieldChange(index, newField)}
          onDelete={() => handleDelete(index)}
        />
      ))}
      <Button type="dashed" onClick={handleAddField} block>
        + Add Field
      </Button>
    </div>
  );
};

export default SchemaBuilder;
