"use client";
import { EquipmentSchema } from "@/app/validationSchema";
import { Flex, Box, TextField, Text, Button } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type EquipmentFormData = z.infer<typeof EquipmentSchema>;

const EquipmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EquipmentFormData>({
    resolver: zodResolver(EquipmentSchema),
  });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log("Edata", data);
      })}
    >
      <Flex direction="column" gap="3" mb={"3"}>
        <Box>
          <Text> Equipment Model </Text>
          <TextField.Root size="3" {...register("model")} />
        </Box>
        <Box>
          <Text> Serial No </Text>
          <TextField.Root size="3" {...register("serial")} />
        </Box>
      </Flex>
      <Button className="mt-5">Add Equipment</Button>
    </form>
  );
};

export default EquipmentForm;
