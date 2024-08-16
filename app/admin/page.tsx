import { Button, Flex, Heading, IconButton, Table } from "@radix-ui/themes";
import React from "react";
import Link from "next/link";
import axios from "axios";
import prisma from "@/prisma/client";
import {
  MagnifyingGlassIcon,
  Pencil1Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import DeleteClientButton from "./client/[id]/DeleteClientButton";

const AdminPage = async () => {
  const AllClients = await prisma.customer.findMany();
  console.log(AllClients);
  return (
    <div>
      {
        //TODO
        /* Create buttons to add customer
       create buttonoss to add models
       create a POST api functinos to add cutsomer to the db.
       crtate a GET api function to view all cutsmoers from the db

       */
      }
      <Heading as="h1" className="mb-5">
        Admin Page
      </Heading>
      <Flex gap="5">
        <Button>
          <Link href="/admin/client/new"> Add Client </Link>
        </Button>
        <Button>
          <Link href="/admin/equipment/new"> Add Equipment </Link>
        </Button>
      </Flex>

      <Flex gap="5">
        <Table.Root>
         
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>
              <Heading as="h1" className="mt-5">
                Clients
              </Heading>
              </Table.ColumnHeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.ColumnHeaderCell>Customer ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Customer Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {AllClients.map((client) => (
              <Table.Row key={client.id}>
                <Table.RowHeaderCell>{client.id}</Table.RowHeaderCell>
                <Table.Cell>{client.contact}</Table.Cell>
                <Table.Cell>
                  <Link href={`/admin/client/${client.id}/edit`}>
                    {" "}
                    <Button>
                      <Pencil1Icon /> Edit
                    </Button>
                  </Link>{" "}
                  <DeleteClientButton clientId={client.id} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>

        <Table.Root>
          <Table.Header>
          <Table.Row>
              <Table.ColumnHeaderCell>
              <Heading as="h1" className="mt-5">
                Equipments
              </Heading>
              </Table.ColumnHeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.ColumnHeaderCell>Customer ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Customer Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {AllClients.map((client) => (
              <Table.Row key={client.id}>
                <Table.RowHeaderCell>{client.id}</Table.RowHeaderCell>
                <Table.Cell>{client.contact}</Table.Cell>
                <Table.Cell>
                  <Link href={`/admin/client/${client.id}/edit`}>
                    {" "}
                    <Button>
                      <Pencil1Icon /> Edit
                    </Button>
                  </Link>{" "}
                  <DeleteClientButton clientId={client.id} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Flex>
    </div>
  );
};

export default AdminPage;
