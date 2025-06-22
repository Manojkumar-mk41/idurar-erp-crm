import useLanguage from '@/locale/useLanguage';
import UpdateModule from '@/modules/QueryModule/UpdateQueryModule';

export default function QueryUpdate() {
  const translate = useLanguage();
  const config = {
    entity: 'query',
    PANEL_TITLE: translate('Query'),
    DATATABLE_TITLE: translate('Query List'),
    ADD_NEW_ENTITY: translate('Add New Query'),
    ENTITY_NAME: translate('Query'),
  };
  return <UpdateModule config={config} />;
}
