import React from 'react'
import DashBoardCard  from '@/app/components/DashboardCard'
import { Flex } from '@radix-ui/themes'
import prisma from '@/prisma/client';

const Dashboard = async () => {
  const noOfIssues = await prisma.issue.count();
  const openIssues = await prisma.issue.findMany({
    where: {
      status: "OPEN",
    },
  });
  const closedIssues = await prisma.issue.findMany({
    where: {
      status: "CLOSED",
    },
  });
  const inProgressIssues = await prisma.issue.findMany({
    where: {
      status: "IN_PROGRESS",
    },
  });
  return (
    <div>
      Dashboard Page
      <Flex direction="row" gap='5'>
      <DashBoardCard title="Total issues" value={noOfIssues} />
      <DashBoardCard title="Open Issues" value={openIssues.length}/>
      <DashBoardCard title="In Progress Issues" value={inProgressIssues.length}/>
      <DashBoardCard title="Closed Issues" value={closedIssues.length}/>

      </Flex>
    </div>
  )
}

export default Dashboard
