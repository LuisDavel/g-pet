import { Case, Default, Switch } from '@/components/conditiona-component';
import { Button } from '@/components/ui/button';
import { ChangeTheme } from '@/components/ui/change-theme';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icon } from '@/lib/icons';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Register | G-Pet',
  description: 'Pagina de registro da G-Pet'
};

type SearchParamsProps = {
  searchParams: {
    step: number;
  };
};

export default function Register({ searchParams }: SearchParamsProps) {
  async function submit(form: FormData) {
    'use server';
    console.log(form.get('cep'));
  }
  return (
    <main className="grid grid-cols-2 h-screen">
      <div className="relative h-full">
        <div className="relative h-full w-full">
          <img
            src="./image.jpeg"
            alt="Background Image"
            className="h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-background" />
      </div>

      <div className="h-full p-10">
        <ChangeTheme />
        <form
          className="justify-center h-full w-11/12 flex flex-col gap-3"
          action={submit}
        >
          <p className="text-lg font-semibold mb-5">
            Seja-bem vindo!! a página de cadastro da
            <span className="text-primary font-semibold"> G-Pet</span>
          </p>
          <Switch>
            <Default>
              <Label title="Nome" htmlFor="name">
                Nome Completo
              </Label>
              <Input type="text" name="name" placeholder="Insira seu nome" />
              <Label title="Email" htmlFor="email">
                Email
              </Label>
              <Input type="email" name="email" placeholder="Insira seu email" />
              <Label title="NomeEstabelecimento" htmlFor="work">
                Nome do estabelecimento
              </Label>
              <Input
                type="text"
                name="work"
                placeholder="Insira o nome do estabelecimento"
              />

              <Button type="submit">
                <Link
                  href={'/register?step=2'}
                  className="w-full justify-center flex gap-2 items-center"
                >
                  Proximo
                </Link>
              </Button>
            </Default>
            <Case condition={searchParams.step == 2}>
              <Label title="CEP" htmlFor="cep">
                CEP
              </Label>
              <Input type="text" name="cep" placeholder="Insira o CEP" />
              <Label title="Telefone" htmlFor="phone">
                Telefone
              </Label>
              <Input
                type="text"
                name="phone"
                placeholder="Insira o numero de celular"
              />

              <Button type="submit">Enviar</Button>
            </Case>
          </Switch>
          <Button variant={'outline'} type="button">
            <Link
              href={'/'}
              className="text-primary h-full w-full justify-center flex gap-2 items-center"
            >
              <span>
                <Icon.back className="h-5 w-5" />
              </span>
              Voltar
            </Link>
          </Button>
        </form>
      </div>
    </main>
  );
}
