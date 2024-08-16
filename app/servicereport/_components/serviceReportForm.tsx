"use client";
import { TextField, Heading, TextArea, Select } from "@radix-ui/themes";
import { Counter, AddDetail } from "./addNewRowBtn";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Customer } from "@prisma/client";

const ServiceReportForm = () => {
  let [clients, setClients] = useState<Customer[]>([]);
  useEffect(() => {
    const fetchClient = async () => {
      const { data } = await axios.get<Customer[]>("/api/clients");
      setClients(data);
    }

    fetchClient();
  }, []);
  return (
    <div className="mt-5">
      <form>
        <div className="flex gap-5">
          <div className="client-address w-1/2 space-y-3 mb-5">
            <Heading as="h4" size="3">
              Client Address
            </Heading>
            <Select.Root>
              <Select.Trigger placeholder="Choose a Client"/>
              <Select.Content>
                <Select.Group>
                  <Select.Label>Choose an existing Client</Select.Label>
                  {
                  clients.map(client => <Select.Item key={client.id} value={client.id}>{client.contact}</Select.Item>
                  )}
                </Select.Group>
              </Select.Content>
            </Select.Root>
            {/* <TextField.Root placeholder="Department" />
        <TextField.Root placeholder="State" />
        <TextField.Root placeholder="Street" />
        <TextField.Root placeholder="City" />
        <TextField.Root placeholder="State" />

        <TextField.Root placeholder='Contact Name'/> */}
          </div>
          <div className="equipment-info w-1/2 space-y-3 mb-5">
            <Heading as="h4" size="3">
              Equipment Information
            </Heading>
            <TextField.Root placeholder="Camera Brand/Model" />
            <TextField.Root placeholder="Serial No" />
          </div>
        </div>

        <div className="details space-y-3 mb-5">
          <Heading as="h4" size="3">
            Details
          </Heading>
          <AddDetail />
        </div>

        <div className="complaint mb-5">
          <Heading as="h4" size="3">
            Description of Complaint and Error
          </Heading>
          <TextArea placeholder="Complaint and error" />
        </div>

        <div className="work-performed mb-5">
          <Heading as="h4" size="3">
            Description of work performed
          </Heading>
          <TextArea placeholder="Description of work performed" />
        </div>

        <div className="remark mb-5">
          <Heading as="h4" size="3">
            Remark/Note
          </Heading>
          <TextArea placeholder="Remark/note" />
        </div>
      </form>
    </div>
  );
};

export default ServiceReportForm;

// TODO
/*
    CLIENT ADDRESS
     fields has to be auto populated. User does not need fill this information manually

    I can be a search box with dropdown. 

    For client infomration we need to have a saperate form which create

    EQUIPMENT INFORMATION 

    These fields has to be filled autometically with customer information. 
    As the system should know whcih equipments are own by the user

    DESCRIPTION OF COMPLAINT AND ERROR

    DESSCRIPTION OF WORK PERFORMED

    REMARK

    SERVICE ENGINEER

*/
