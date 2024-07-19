import { Metadata } from 'next';
import { columns } from './columns';
import { DataTable } from '@/components/table/data-table';
import { people } from '@/app/api/fake';
import { Button } from '@/components/ui/button';
// import { Icon } from '@/lib/icons';

export const metadata: Metadata = {
  title: 'Clientes | G-Pet',
  description: 'Pagina de clientes da G-Pet'
};

export default function Page() {
  return (
    <>
      <div className="my-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* <div className="rounded-full p-1 border">
            <Icon.user className="h-6 w-6" />
          </div> */}
          <p className="text-lg font-semibold">Lista de Clientes</p>
        </div>
        <Button>Adicionar</Button>
      </div>
      <DataTable data={people} columns={columns} />
    </>
  );
}
