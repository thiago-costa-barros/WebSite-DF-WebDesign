import { Envelope, LockKey } from "phosphor-react";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { LogoDF } from "../LogoDF";
import { FormEvent, useState } from "react";

export function LogIn() {
    const [isUserLogedIn, setIsUserLogedIn] = useState(false)

    function handleLogIn(event: FormEvent) {
        event.preventDefault();

        setIsUserLogedIn(true)
    }

    return (
        <div className='min-w-full min-h-full bg-darkblue flex flex-col items-center justify-center text-gray-300'>
            <header className='flex flex-col items-center mt-8'>
                <LogoDF className='' />

                <Text className='text-gray-500 mt-4'>FAÇA LOGIN E COMECE JÁ!</Text>
            </header>
            <form onSubmit={handleLogIn} className='flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-6'>
                <label htmlFor='email' className='flex flex-col gap-3'>
                    <Text className='text-gray-900 font-semibold'>Endereço de email</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope />
                        </TextInput.Icon>
                        <TextInput.Input type="email" id="email" placeholder="Digite seu email" />
                    </TextInput.Root>
                </label>
                <label htmlFor="password" className='flex flex-col gap-3'>
                    <Text className='text-gray-900 font-semibold'>Sua senha</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <LockKey />
                        </TextInput.Icon>
                        <TextInput.Input type="password" id="password" placeholder="********" />
                    </TextInput.Root>
                </label>
                <label htmlFor='remember' className="flex items-center gap-2 mt-4">
                    <Checkbox id="remember" />
                    <Text size="sm" className='text-gray-500'>Lembrar de mim</Text>
                </label>
                <Button type="submit" className='mt-4'>
                    Entrar na plataforma
                </Button>
            </form>
            <footer className='flex flex-col items-center gap-4 mt-8'>
                <Text asChild size='sm' className='text-gray-900'>
                    <a href='' className='underline hover:text-gray-300'>Esqueceu sua senha?</a>
                </Text>
                <Text asChild size='sm' className='text-gray-900'>
                    <a href='' className='underline hover:text-gray-300'>Não possui conta? Crie uma agora!</a>
                </Text>
            </footer>
        </div >
    )
}