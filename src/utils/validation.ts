import { z } from 'zod'

const MAX_FILE_SIZE = 5 * 1024 * 1024
const ACCEPTED_FILE_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf']

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  projectType: z.string(),
  budgetRange: z.string(),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  file: z
    .any()
    .optional()
    .refine(
      (fileList) => !fileList || fileList.length === 0 || fileList[0].size <= MAX_FILE_SIZE,
      'File size must be 5MB or less',
    )
    .refine(
      (fileList) =>
        !fileList || fileList.length === 0 || ACCEPTED_FILE_TYPES.includes(fileList[0].type),
      'File must be an image or PDF',
    ),
})

export type ContactFormValues = z.infer<typeof contactSchema>
