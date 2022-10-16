import { Checkbox } from "@radix-ui/react-checkbox";
import { Envelope, IdentificationCard, LockKey } from "phosphor-react";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { LogoDF } from "../LogoDF";
import { FormEvent, useState } from "react";

export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    function handleSignIn(event: FormEvent) {
        event.preventDefault();

        setIsUserSignedIn(true)
    }

    return (
        <div className='min-w-full min-h-full bg-darkblue flex flex-col items-center justify-center text-gray-300'>
            <header className='flex flex-col items-center mt-8'>
                <LogoDF className='' />

                <Text className='text-gray-500 mt-4'>CADASTRO DE NOVO USUÁRIO</Text>
            </header>
            <form onSubmit={handleSignIn} className='flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-6'>
                <label htmlFor='userName' className='flex flex-col gap-3'>
                    <Text className='text-gray-900 font-semibold'>Nome completo</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <IdentificationCard />
                        </TextInput.Icon>
                        <TextInput.Input type="email" id="email" placeholder="Digite seu nome completo" />
                    </TextInput.Root>
                </label>
                <label htmlFor='email' className='flex flex-col gap-3'>
                    <Text className='text-gray-900 font-semibold'>Email do usuário</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope />
                        </TextInput.Icon>
                        <TextInput.Input type="email" id="email" placeholder="Digite seu email" />
                    </TextInput.Root>
                </label>
                <label htmlFor='emailConfirm' className='flex flex-col gap-3'>
                    <Text className='text-gray-900 font-semibold'>Confirme seu email</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope />
                        </TextInput.Icon>
                        <TextInput.Input type="email" id="emailConfirm" placeholder="Digite seu email" />
                    </TextInput.Root>
                </label>
                <label htmlFor="password" className='flex flex-col gap-3'>
                    <Text className='text-gray-900 font-semibold'>Digite sua senha</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <LockKey />
                        </TextInput.Icon>
                        <TextInput.Input type="password" id="password" placeholder="********" />
                    </TextInput.Root>
                </label>
                <label htmlFor="passwordConfirm" className='flex flex-col gap-3'>
                    <Text className='text-gray-900 font-semibold'>Confirme sua senha</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <LockKey />
                        </TextInput.Icon>
                        <TextInput.Input type="password" id="passwordConfirm" placeholder="********" />
                    </TextInput.Root>
                </label>
                <Button type="submit" className='mt-4'>
                    Cadastrar novo usuário
                </Button>
            </form>
        </div >
    )
}