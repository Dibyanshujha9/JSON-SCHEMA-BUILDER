import React, { useState } from 'react';
import { Row, Col, Card } from 'antd';
import SchemaBuilder from './components/SchemaBuilder';
import JsonPreview from './components/JsonPreview';

const App = () => {
  const [schema, setSchema] = useState([]);

  return (
    <Row gutter={16} style={{ padding: '20px' }}>
      <Col span={12}>
        <Card title="Schema Builder">
          <SchemaBuilder fields={schema} onChange={setSchema} />
        </Card>
      </Col>
      <Col span={12}>
        <Card title="JSON Preview">
          <JsonPreview data={schema} />
        </Card>
      </Col>
    </Row>
  );
};

export default App;
