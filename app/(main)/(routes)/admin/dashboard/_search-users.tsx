"use client";

import { usePathname, useRouter } from "next/navigation";

export const SearchUsers = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);
          const queryTerm = formData.get("search") as string;
          router.push(pathname + "?search=" + queryTerm);
        }}
        className="flex justify-between"
      >
        <label htmlFor="search">Search for Users</label>
        <input id="search" name="search" type="text" className="rounded-md text-accent-foreground "/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};