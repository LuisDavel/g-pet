'use client';

import { TableAvatar } from '@/components/table/avatar';
import { Cell } from '@/components/table/cell';
import { HeaderTable } from '@/components/table/header';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Icon } from '@/lib/icons';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { toast } from 'sonner';
import { InputForm } from './alter';
import React from 'react';
import { UserProps } from '@/app/api/fake';

export const columns: ColumnDef<UserProps>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return <HeaderTable column={column} title="Nome" />;
    },
    cell: ({ row }) => {
      return (
        <Link href={`customers/${row.original.id}`} rel="noopener noreferrer">
          <Cell className="flex items-center gap-2">
            <TableAvatar name={row.getValue('name')} image="" />
            {row.getValue('name')}
          </Cell>
        </Link>
      );
    }
  },
  {
    accessorKey: 'phone',
    header: ({ column }) => {
      return <HeaderTable column={column} title="Telefone" />;
    },
    cell: ({ row }) => {
      const original = row.getValue('phone') as string;
      const apiUrl = 'https://api.whatsapp.com/send?phone=';
      const number = original
        .replace('(', '')
        .replace(')', '')
        .replace('-', '')
        .replace(' ', '');

      return (
        <Cell>
          <Link
            href={`${apiUrl}${number}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button variant={'ghost'}>{row.getValue('phone')}</Button>
          </Link>
        </Cell>
      );
    }
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return <HeaderTable column={column} title="E-mail" />;
    },
    cell: ({ row }) => {
      return <Cell>{row.getValue('email')}</Cell>;
    }
  },
  {
    accessorKey: 'lastService',
    header: ({ column }) => (
      <HeaderTable column={column} title="Ultimo serviço" />
    ),
    cell: ({ row }) => {
      return <Cell>{row.getValue('lastService')}</Cell>;
    }
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const cell = row.original;
      return (
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <Icon.moreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Opções</DropdownMenuLabel>
              <DialogTrigger asChild>
                <DropdownMenuItem>
                  <Icon.squarePen className="mr-2 h-4 w-4" />
                  Alterar
                </DropdownMenuItem>
              </DialogTrigger>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Icon.paw className="mr-2 h-4 w-4" /> Pets vinculados
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Alterar de cliente</DialogTitle>
              <DialogDescription>
                Este formulário é utilizado para alterar o cadastro de usuários
                no sistema.
              </DialogDescription>
            </DialogHeader>
            <InputForm row={cell} />
          </DialogContent>
        </Dialog>
      );
    }
  }
];
