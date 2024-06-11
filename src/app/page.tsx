import { Button } from '@/components/ui/button';
import { ChangeTheme } from '@/components/ui/change-theme';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icon } from '@/lib/icons';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login | G-Pet',
  description: 'Pagina de Login da G-Pet'
};

export default function Home() {
  async function submit(form: FormData) {
    'use server';
    console.log(form.get('email'));
  }
  return (
    <main className="grid grid-cols-3 h-screen">
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
      <article className="h-full p-10 justify-center flex flex-col font-medium border border-l-0">
        <p className="text-3xl text-pretty font-semibold">
          Gerencie seu negócio de forma eficiente com nosso sistema completo.{' '}
          <span className="text-primary"> Aumente </span> suas vendas e organize
          suas operações em um único lugar.
        </p>
        <p className="mt-6">
          Um sistema feito para <span className="text-primary">PetShops</span>,{' '}
          <span className="text-primary">Clínicas Veterinárias</span> e seus
          clientes
        </p>
      </article>
      <div className="h-full p-10">
        <ChangeTheme />
        <form
          className="justify-center h-full w-11/12 flex flex-col gap-2"
          action={submit}
        >
          <p className="text-lg font-semibold mb-5">
            Seja-bem vindo! ao <span className="text-primary">G-Pet</span>
          </p>
          <Label title="Email" htmlFor="email">
            E-mail
          </Label>
          <Input type="email" name="email" placeholder="Insira seu email" />
          <Label title="Senha" htmlFor="password">
            Senha
          </Label>
          <Input type="password" name="password" />
          <Button type="submit"> Entrar </Button>
          <p className="mx-4 text-xs self-center">OU</p>
          <Button variant={'outline'} type="button">
            <Link href={'/register'}>
              <p className="text-primary justify-end flex gap-2 items-center">
                <span>
                  <Icon.paw className="h-5 w-5" />
                </span>
                Criar uma conta
              </p>
            </Link>
          </Button>
        </form>
      </div>
    </main>
  );
}
