import {z} from 'zod'

export const IssueSchema = z.object({
    title: z.string().min(1,'Title is Rquired').max(255),
    description: z.string().min(1,'Description is Required').max(65535),
    status:z.string()
})
export const PatchIssueSchema = z.object({
  title: z.string().min(1,'Title is Rquired').max(255).optional(),
  description: z.string().min(1,'Description is Required').max(65535).optional(),
  assignedToUserId:z.string().min(1, 'AssingedToUserId id required').max(255).optional().nullable()
})

export const ClientSchema = z.object({
    site: z.string().min(1, 'Site is Required'),
    dept: z.string(),
    street: z.string().min(1,'Street is Required'),
    phone: z.string().min(1,'Phone is Required'),
    city: z.string().min(1,'City is Required'),
    state: z.string().min(1,'State is Required'),
    serialNo: z.string().min(1,'Serial Number is Required'),
    contact: z.string().min(1,'Contact is Required'),
  });

  export const EquipmentSchema = z.object({
    model: z.string().min(1,'Model number is Rquired').max(255),
    //serial: z.string().min(1,'Serial number is Required')
    
})