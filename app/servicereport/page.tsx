import { Flex, Heading } from "@radix-ui/themes";
import AddNewReportBtn from "./_components/addNewReportBtn";
import ExistingReportBtn from "./_components/existingReportBtn";
import Link from "next/link";

const ServiceReport = () => {
  return (
    <div>
      <Heading as="h1">Service Reports</Heading>
      <Flex mt="5" gap="5">
        <Link href="/servicereport/new"><AddNewReportBtn /></Link> 
        <ExistingReportBtn />
      </Flex>
    </div>
  );
};

export default ServiceReport;
