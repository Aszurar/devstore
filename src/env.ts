import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  APP_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse(process.env)
// safeParse => Pega os valores que to enviando, que nesse caso é o objeto de
// variáveis de ambiente, e tenta fazer o parse dele, ou seja, validar que o
// objeto de variáveis de ambiente é do mesmo formato declarado no envSchema

if (!parsedEnv.success) {
  console.error(
    'Invalid environment variables',
    parsedEnv.error.flatten().fieldErrors,
  )
  // flatten => Torna as mensagens de erro mais legíveis

  throw new Error('Invalid environment variables')
  // se deu erro nas variáveis de ambiente, eu não quero que minha aplicação
  // continue executando, pois dará muito mais erro
}

export const env = parsedEnv.data
// exportando as variáveis de ambiente que foram validadas
