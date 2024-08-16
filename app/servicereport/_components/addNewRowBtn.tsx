"use client"; // This directive ensures the file is treated as a Client Component

import { BookmarkIcon, ButtonIcon, PlusIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Table,
  TextField,
} from "@radix-ui/themes";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const handleDecrement = (e) => {
    e.preventDefault();

    setCount(count - 1);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
      <button
        onClick={handleIncrement}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        Increment
      </button>
      <button
        onClick={handleDecrement}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Decrement
      </button>
    </div>
  );
}

/**
 * TODO AddDetail
 *
 * @returns an AddDetails Button
 *
 * On click event it should add a row
 */

export function AddDetail() {
  const [formData, setFormData] = useState([]);

  const [inputValue, setInputValue] = useState("");

  /*const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };*/

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData([...formData, inputValue])
    setInputValue('')
    console.log("formData", formData);
  };

  return (
    <div>
      <input
        name="qty"
        value={formData.qty}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />

      <Flex direction="column" gap="3">
        <Box maxWidth="200px">
          <TextField.Root size="1" placeholder="QTY" name="qty" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <TextField.Root size="1" placeholder="Material" name="material" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        </Box>
      </Flex>

      <Button onClick={handleSubmit}>
        <PlusIcon /> Add Button
      </Button>

      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>QTY</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Material</Table.ColumnHeaderCell>
           
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {formData.map((data) => (
             <Table.Row key={data}>
              <Table.Cell>{data}</Table.Cell>
              <Table.Cell>Developer</Table.Cell>
           </Table.Row>
          ))
          }
         
        </Table.Body>
      </Table.Root>
    </div>
  );
}
