import { ErpLayout } from '@/layout';
import ReadItem from '@/modules/ErpPanelModule/ReadItem';
import QueryForm from '@/modules/QueryModule/Forms/QueryForm';

export default function ReadQueryModule({ config }) {
  return (
    <ErpLayout>
      <ReadItem config={config} ReadForm={QueryForm} />
    </ErpLayout>
  );
}
