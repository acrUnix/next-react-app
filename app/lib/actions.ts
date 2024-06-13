'use server'
import { sql } from  '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { date, z } from 'zod'

export type State = {
    errors?:{
        customerId?: string[],
        amount?: string[],
        status?: string[]
    },
    message?: string | null
}

export type regState = {
  errors?:{
      username?: string[],
      email?: string[],
      password?: string[]
  },
  message?: string | null
}



const CreateInvoiceSchema = z.object({
    id: z.string(),
    customerId: z.string({
      invalid_type_error: 'Please select a customer.',
    }),
    amount: z.coerce
      .number()
      .gt(0, { message: 'Please enter an amount greater than $0.' }),
    status: z.enum(['pending', 'paid'], {
      invalid_type_error: 'Please select an invoice status.',
    }),
    date: z.string(),
  });


const CreateInvoiceFormSchema = CreateInvoiceSchema.omit({
    id: true,
    date: true
}
    
)


const CreateRegisterSchema = z.object({
  username: z.string({
    invalid_type_error: 'Please select a username.',
  }),
  email: z.string({
    invalid_type_error: 'Please type a email adress.',
  }),
  password: z.string({
    invalid_type_error: 'Please type a password.',
  }),
});





export async function createInvoice(prevState: State, formData: FormData){
    const validatedFields = CreateInvoiceFormSchema.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status')
    })

    if(!validatedFields.success){
        console.log('Errores de validacion: ', validatedFields.error)
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'missing fields, failed to Create Invoice'
        }
    }

    const {customerId, amount, status} = validatedFields.data
    const amountInCents = amount * 100
    const [date] = new Date().toISOString().split('t')

 
try{
    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `
}catch (error){
    return {
        message: 'Error BD: No se pudo crear la factura'
    }
}
    
    
    revalidatePath('/dashboard/invoices')
    redirect('/dashboard/invoices')

}

export async function updateInvoice (id: string, prevState: State, formData: FormData){

const invoiceValidatedFields = CreateInvoiceFormSchema.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status')
})

if(!invoiceValidatedFields.success){
    return{
        errors: invoiceValidatedFields.error.flatten().fieldErrors,
        message: 'missing fields, failed to Update Invoice'
    }
}
const {customerId, amount, status} = invoiceValidatedFields.data
const amountInCents = amount * 100
try{
    await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
}catch(error){
    return {message: 'Error DB: No se pudo actualizar la factura'}
}

 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');

}

export async function deleteInvoice (id: string){

    try{
        await sql`DELETE FROM invoices WHERE id = ${id}`
    revalidatePath('/dashboard/invoices')
    }catch(error){
        return {message: 'Error DB: No se pudo eliminar la factura'}
    }
    
}



export async function register(prevState: regState, formData: FormData){

  const validatedFields = CreateRegisterSchema.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password')
})

if(!validatedFields.success){
    console.log('Errores de validacion: ', validatedFields.error)
    return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing fields, failed to create register'
    }
}

const generateId = () => crypto.randomUUID()
const {username, email, password} = validatedFields.data

/*try{
await sql`
INSERT INTO invoices (customer_id, amount, status, date)
VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
`
}catch (error){
return {
    message: 'Error BD: No se pudo crear la factura'
}
} */



revalidatePath('/dashboard/invoices')
redirect('/dashboard/invoices')

}



export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}