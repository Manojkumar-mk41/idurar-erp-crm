import { Form, Input, Row, Col, Select } from 'antd';
import useLanguage from '@/locale/useLanguage';

export default function QueryForm({ current = null }) {
  const translate = useLanguage();

  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Form.Item
          label={translate('Customer Name')}
          name="customerName"
          rules={[{ required: true, message: translate('Field is required') }]}
        >
          <Input placeholder={translate('Enter customer name')} />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item label={translate('Description')} name="description" rules={[{ required: true }]}>
          <Input.TextArea rows={3} placeholder={translate('Enter description')} />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item label={translate('Status')} name="status" initialValue="Open">
          <Select
            options={[
              { label: 'Open', value: 'Open' },
              { label: 'InProgress', value: 'InProgress' },
              { label: 'Closed', value: 'Closed' },
            ]}
          />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item label={`${translate('Resolution')} (max 100 characters)`} name="resolution">
          <Input.TextArea
            showCount
            maxLength={100}
            placeholder={translate('Enter resolution (optional)')}
          />
        </Form.Item>
      </Col>
    </Row>
  );
}
