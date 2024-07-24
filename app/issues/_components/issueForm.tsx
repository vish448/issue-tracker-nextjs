'use client'

import { Button, Callout, TextArea, TextField,Text } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm,Controller,SubmitHandler } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { IssueSchema } from '@/app/validationSchema';
import { z } from 'zod'
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
import { Issue } from '@prisma/client';

type IssueFormData = z.infer<typeof IssueSchema>

const IssueForm = ({issue}:{issue?: Issue}) => {
    const router = useRouter()
    const {register, control, handleSubmit, formState:{ errors }} = useForm<IssueFormData>({
      resolver: zodResolver(IssueSchema)
    })
    const [error, setError] = useState('')
    const [isSubmitting, setSubmitting] = useState(false)
  return (
    <div className='max-w-xl' >
        { error && (<Callout.Root color='red' className='mb-5'>
            <Callout.Text>{error}</Callout.Text>
            </Callout.Root>)}
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(async (data)=>{
        try {
            setSubmitting(true);
            if(issue){
              await axios.patch(`/api/issues/${issue.id}`, data)
            }
            else{
              await axios.post('/api/issues', data)
            }
            router.push('/issues')
        } catch (err) {
          setSubmitting(false)
           setError('An Unexpected error occured')
        }
       
    })}> 
      <TextField.Root defaultValue={issue?.title} placeholder="Title" {...register('title')}></TextField.Root>
      <ErrorMessage>{errors.title?.message}</ErrorMessage>
      <Controller
      defaultValue={issue?.description}
        name="description"
        control={control}
        render={({field}) => <SimpleMDE placeholder='Description' {...field}/>}
       />
      <ErrorMessage>{errors.description?.message}</ErrorMessage>
      <Button disabled={isSubmitting}>{issue ? 'Update Issue' : 'Submit New Issue'}{' '} {isSubmitting && <Spinner />}</Button>
    </form>
    </div>
  )
}

export default IssueForm
