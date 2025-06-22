import useLanguage from '@/locale/useLanguage';
import ReadModule from '@/modules/QueryModule/ReadQueryModule';

export default function QueryRead() {
  const translate = useLanguage();
  const config = {
    entity: ' ',
    PANEL_TITLE: translate('Query'),
    DATATABLE_TITLE: translate('Query List'),
    ADD_NEW_ENTITY: translate('Add New Query'),
    ENTITY_NAME: translate('Query'),
  };
  return <ReadModule config={config} />;
}
