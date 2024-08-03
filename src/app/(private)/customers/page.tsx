import { Metadata } from 'next';
import { columns } from './columns';
import { DataTable } from '@/components/table/data-table';
import { people } from '@/app/api/fake';

import { RegisterDialog } from './register';

export const metadata: Metadata = {
  title: 'Clientes | G-Pet',
  description: 'Pagina de clientes da G-Pet'
};

export default function Page() {
  return (
    <>
      <div className="my-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">Lista de Clientes</p>
        </div>
        <RegisterDialog />
      </div>
      {/* @ts-ignore */}
      <DataTable data={people} columns={columns} />
    </>
  );
}
