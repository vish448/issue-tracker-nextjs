import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import LatestIssue from "./LatestIssue";
import IssueChart from "./IssueChart";
import { Flex, Grid } from "@radix-ui/themes";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const noOfIssues = await prisma.issue.count();
  const openIssues = await prisma.issue.count({
    where: {
      status: "OPEN",
    },
  });
  const closedIssues = await prisma.issue.count({
    where: {
      status: "CLOSED",
    },
  });
  const inProgressIssues = await prisma.issue.count({
    where: {
      status: "IN_PROGRESS",
    },
  });
  return (
    <Grid columns={{initial:"1", md:"2"}} gap="5">
      <Flex direction="column" gap="5">

      <IssueSummary open={openIssues} inProgress={inProgressIssues} closed={closedIssues} />
      <IssueChart open={openIssues} inProgress={inProgressIssues} closed={closedIssues} />
      </Flex>
      <LatestIssue />
    </Grid>
  );
}
