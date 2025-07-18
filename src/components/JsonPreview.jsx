import React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const buildJson = (fields) => {
  const obj = {};
  fields.forEach((field) => {
    if (field.type === 'Nested') {
      obj[field.name || ''] = buildJson(field.children || []);
    } else if (field.type === 'String') {
      obj[field.name || ''] = 'string';
    } else if (field.type === 'Number') {
      obj[field.name || ''] = 0;
    }
  });
  return obj;
};

const JsonPreview = ({ data }) => {
  const json = buildJson(data);

  return (
    <Paragraph>
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </Paragraph>
  );
};

export default JsonPreview;
