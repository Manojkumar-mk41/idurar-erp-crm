import dayjs from 'dayjs';
import { Tag } from 'antd';
import useLanguage from '@/locale/useLanguage';
import QueryDataTableModule from '@/modules/QueryModule/QueryDataTableModule';

export default function Query() {
  const translate = useLanguage();
  const entity = 'query';

  const dataTableColumns = [
    {
      title: translate('Customer Name'),
      dataIndex: 'customerName',
    },
    {
      title: translate('Description'),
      dataIndex: 'description',
    },
    {
      title: translate('Created At'),
      dataIndex: 'createdAt',
      render: (date) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: translate('Status'),
      dataIndex: 'status',
      render: (status) => <Tag color="blue">{status}</Tag>,
    },
    {
      title: translate('Resolution'),
      dataIndex: 'resolution',
      render: (text) => text?.slice(0, 50) + (text?.length > 50 ? '...' : ''),
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('Query'),
    DATATABLE_TITLE: translate('Query List'),
    ADD_NEW_ENTITY: translate('Add New Query'),
    ENTITY_NAME: translate('Query'),
  };

  const config = {
    entity,
    ...Labels,
    dataTableColumns,
    searchConfig: null,
    deleteModalLabels: ['customerName', 'description'],
  };

  return <QueryDataTableModule config={config} />;
}
