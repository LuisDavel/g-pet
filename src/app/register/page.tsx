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

export default function Register() {
  async function submit(form: FormData) {
    'use server';
    console.log(form.get('email'));
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

          <Button type="submit"> Entrar </Button>
          <p className="mx-4 text-xs self-center">OU</p>
          <Link className="self-end" href={'/'} legacyBehavior>
            <Button variant={'outline'} type="button">
              <p className="text-primary justify-end flex gap-2 items-center">
                <span>
                  <Icon.back className="h-5 w-5" />
                </span>
                Voltar
              </p>
            </Button>
          </Link>
        </form>
      </div>
    </main>
  );
}
