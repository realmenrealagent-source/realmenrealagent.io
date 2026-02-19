import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { contactSchema, type ContactFormValues } from '../utils/validation'

export const useFormValidation = () => {
  return useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      projectType: 'Web Development',
      budgetRange: '$1k-$5k',
      message: '',
      file: undefined,
    },
  })
}
