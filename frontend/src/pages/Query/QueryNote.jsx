import useLanguage from '@/locale/useLanguage';
import QueryNoteModule from '@/modules/QueryModule/QueryNoteModule';

export default function QueryNote() {
  const translate = useLanguage();
  const config = {
    entity: 'query',
    PANEL_TITLE: translate('Query Notes'),
    DATATABLE_TITLE: translate('Query Note List'),
    ADD_NEW_ENTITY: translate('Add Note'),
    ENTITY_NAME: translate('Note'),
  };
  return <QueryNoteModule config={config} />;
}
