import Image from "next/image";
import Pagination from "./components/Pagination";
import LatestIssue from "./LatestIssue";

export default function Home({searchParams}:{searchParams:{page: string}}) {
  return (
   <LatestIssue />
  );
}
