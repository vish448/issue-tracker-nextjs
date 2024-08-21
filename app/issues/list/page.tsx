import Pagination from "@/app/components/Pagination";
import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import IssueActions from "./IssueActions";
import IssueTable, { columnNames, IssueQuery } from "./IssueTable";
import { Flex } from "@radix-ui/themes";
import { Metadata } from "next";

interface Props {
  searchParams :IssueQuery
}

const Issues = async (
  {searchParams}: Props
) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 5;
  const issues = await prisma.issue.findMany({
    where: {
      status,
    },
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  const issueCount = await prisma.issue.count({ where: { status } });
  return (
    <Flex gap="4" direction="column">
      <IssueActions />
      {issues.length == 0 ? (
        "No Issues"
      ) : (
        <>
          <IssueTable searchParams={searchParams} issues={issues}/>
          <Pagination
            pageSize={pageSize}
            currentPage={page}
            itemCount={issueCount}
          />
        </>
      )}
    </Flex>
  );
};

export default Issues;

export const metadata: Metadata = {
  title:'Issue Tracker - Issue List',
  description:' View a list of project issues'
}
