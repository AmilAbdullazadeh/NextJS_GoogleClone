import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function PaginationButtons() {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex justify-around items-center max-w-lg text-blue-700 dark:text-blue-400 pb-10 mt-8">
      {startIndex >= 10 && (
        <Link
          passHref={true}
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="searchPageBtn">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link
        passHref={true}
        href={`/search?term=${router.query.term}&start=${startIndex + 10}`}
      >
        <div className="searchPageBtn">
          <p>Next</p>
          <ChevronRightIcon className="h-5" />
        </div>
      </Link>
    </div>
  );
}
