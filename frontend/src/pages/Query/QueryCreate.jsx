import useLanguage from '@/locale/useLanguage';
import CreateQueryModule from '@/modules/QueryModule/CreateQueryModule';

export default function QueryCreate() {
  const translate = useLanguage();
  const config = {
    entity: 'query',
    PANEL_TITLE: translate('Query'),
    DATATABLE_TITLE: translate('Query List'),
    ADD_NEW_ENTITY: translate('Add New Query'),
    ENTITY_NAME: translate('Query'),
  };
  return <CreateQueryModule config={config} />;
}
