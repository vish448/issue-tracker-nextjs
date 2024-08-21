import Image from "next/image";
import Pagination from "./components/Pagination";
import LatestIssue from "./LatestIssue";
import IssueSummary from "./IssueSummary";

export default function Home({searchParams}:{searchParams:{page: string}}) {
  return (
    <>
    <IssueSummary open={0} inProgress={0} closed={0}  />
   <LatestIssue />
    </>
  );
}
