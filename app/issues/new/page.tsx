'use client'

import { Button, Callout, TextArea, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm,Controller,SubmitHandler } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


interface IssueForm {
    title: string;
    description: string;
}


const NewIssuePage = () => {
    const router = useRouter()
    const {register, control, handleSubmit} = useForm()
    const [error, setError] = useState('')

  return (
    <div className='max-w-xl' >
        { error && (<Callout.Root color='red' className='mb-5'>
            <Callout.Text>{error}</Callout.Text>
            </Callout.Root>)}
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(async (data)=>{
        try {
            await axios.post('/api/issues', data)
            router.push('/issues')
        } catch (err) {
           setError('An Unexpected error occured')
        }
       
    })}>
      <TextField.Root placeholder="Title" {...register('title')}></TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({field}) => <SimpleMDE placeholder='Description' {...field}/>}
       />
      <Button>Submit New Issue</Button>
    </form>
    </div>
  )
}

export default NewIssuePage
