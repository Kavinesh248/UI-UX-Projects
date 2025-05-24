"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

export default function SearchInput() {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  // const query = searchParams.get("topic") || "";

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "topic",
          value: searchQuery,
        });
        router.push(newUrl, { scroll: false });
      } else {
        if (pathName === "/companions") {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["topic"],
          });

          router.push(newUrl, { scroll: false });
        }
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [pathName, searchParams, router, searchQuery]);

  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
      <Image src="/icons/search.svg" alt="search" width={15} height={15} />
      <input
        type="text"
        placeholder="Search companions..."
        className="outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

// import qs from "query-string";
// export const formUrlQuery = ({ params, key, value }) => {
//     const queryString = qs.parse(params);
//     queryString[key] = value;
//     return qs.stringifyUrl({
//         url: window.location.pathname,
//         query: queryString,
//     });
// };
// export const removeKeysFromUrlQuery = ({ params, keysToRemove, }) => {
//     const queryString = qs.parse(params);
//     keysToRemove.forEach((key) => {
//         delete queryString[key];
//     });
//     return qs.stringifyUrl({
//         url: window.location.pathname,
//         query: queryString,
//     }, { skipNull: true });
// };

// export interface UrlQueryParams {
//   params: string;
//   key: string;
//   value: string;
// }
// export interface RemoveUrlQueryParams {
//   params: string;
//   keysToRemove: string[];
// }
// export declare const formUrlQuery: ({
//   params,
//   key,
//   value,
// }: UrlQueryParams) => string;
// export declare const removeKeysFromUrlQuery: ({
//   params,
//   keysToRemove,
// }: RemoveUrlQueryParams) => string;
