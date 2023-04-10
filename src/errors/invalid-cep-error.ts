import { ApplicationError } from '@/protocols';

export function invalidCepError(cep: string): ApplicationCepError {
  return {
    name: 'InvalidCepError',
    cep: cep,
    message: `This CEP:"${cep}" is not valid!`,
  };
}

export type ApplicationCepError = ApplicationError & { cep: string };
