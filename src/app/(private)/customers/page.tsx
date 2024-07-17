import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { WrapperLayoutInitial } from '@/components/wrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clientes | G-Pet',
  description: 'Pagina de clientes da G-Pet'
};

export default function Page() {
  const peaple = [];

  return (
    <WrapperLayoutInitial>
      <>Clientes</>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </WrapperLayoutInitial>
  );
}
