import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import LatestIssue from "./LatestIssue";
import IssueChart from "./IssueChart";

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
    <>
      <IssueSummary open={openIssues} inProgress={inProgressIssues} closed={closedIssues} />
      <IssueChart open={openIssues} inProgress={inProgressIssues} closed={closedIssues} />
      <LatestIssue />
    </>
  );
}
