"use client";
import {
  Flex,
  Box,
  TextField,
  Button,
  Callout,
} from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "@/app/components/Spinner";
import { z } from "zod";
import { ClientSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@/app/components";
import { Customer } from "@prisma/client";

type ClientFormData = z.infer<typeof ClientSchema>;

const ClientForm = ({customer}:{customer?:Customer}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientFormData>({
    resolver: zodResolver(ClientSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  return (
    <div>
      {
        //TODO
        /*create a form
         * Add a router to go back to the admin page after submiison
         * grey out the buttoon after click to prevent duplicate recordss
         * Form validation
         */
      }
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        onSubmit={handleSubmit(async (data) => {
          console.log('data', data)
          try {
            setSubmitting(true)
            if(customer){
              console.log('Customer Exists', isSubmitting)
              await axios.patch(`/api/clients/${customer.id}`, data)
            }
            else 
              await axios.post("/api/clients", data);
    
            router.push("/admin");
            router.refresh();
            
          } catch (error) {
            setSubmitting(false);
            console.log(error);
            setError("An expected occured");
          }
        })}
      >
        <Flex direction="column" gap="3">
          <Box className="mt-5">
            <TextField.Root
              size="3"
              className="mb-3"
              placeholder="Site"
              {...register("site")}
              defaultValue={customer?.site}
            />
            <ErrorMessage>{errors.site?.message}</ErrorMessage>

            <TextField.Root
              size="3"
              className="mb-3"
              placeholder="Department"
              {...register("dept")}
              defaultValue={customer?.dept}
            />
            <TextField.Root
              size="3"
              className="mb-3"
              placeholder="Street"
              {...register("street")}
              defaultValue={customer?.street}
            />
            <ErrorMessage>{errors.street?.message}</ErrorMessage>
            <TextField.Root
              type="text"
              size="3"
              className="mb-3"
              placeholder="Phone"
              {...register("phone")}
              defaultValue= {customer?.phone }
            />
            <ErrorMessage>{errors.phone?.message}</ErrorMessage>
            <TextField.Root
              size="3"
              className="mb-3"
              placeholder="City"
              {...register("city")}
              defaultValue={customer?.city}
            />
            <ErrorMessage>{errors.city?.message}</ErrorMessage>
            <TextField.Root
              size="3"
              className="mb-3"
              placeholder="State"
              {...register("state")}
              defaultValue={customer?.state}
            />
            <ErrorMessage>{errors.state?.message}</ErrorMessage>
            <TextField.Root
              size="3"
              className="mb-3"
              placeholder="Serial No"
              {...register("serialNo")}
              defaultValue={customer?.serialNo}
            />
            <ErrorMessage>{errors.serialNo?.message}</ErrorMessage>
            <TextField.Root
              size="3"
              className="mb-3"
              placeholder="Contact"
              {...register("contact")}
              defaultValue={customer?.contact}
            />
            <ErrorMessage>{errors.contact?.message}</ErrorMessage>
            <Button disabled={isSubmitting}>
              {customer ? 'Update Client' : 'Add a new Client'} {" "} {isSubmitting && <Spinner />}
            </Button>
          </Box>
        </Flex>
      </form>
    </div>
  );
};

export default ClientForm;
