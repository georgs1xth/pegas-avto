
import { redirect } from "next/navigation";
import { checkRole } from "@/app/utils/check-role"; 
import { SearchUsers } from "./_search-users";
import { clerkClient } from "@clerk/nextjs/server";
import { setRole } from "./_actions";



export default async function AdminDashboard(params: {
    searchParams: { search?: string };
  }) {

  // If the user does not have the admin role, redirect them to the home page
  if (!checkRole("admin")) {
    redirect("/");
  }

  const query = params.searchParams.search;

  const users = query ? (await clerkClient.users.getUserList({ query })).data : [];


  return (
    <div className="flex flex-col gap-2">

      <h1>This is the admin dashboard</h1>
      <p>This page is restricted to users with the admin role.</p>

      <div className="bg-zinc-700 p-2 rounded-md shadow-md text-accent flex flex-col gap-2">
        <div className="w-full">
          <SearchUsers />
        </div>

        {users.map((user) => {
          return (
            <div key={user.id} className="flex gap-3">
              <div className="flex flex-col gap-2">
                <div>
                  {user.firstName} {user.lastName}
                </div>
                <div>
                  {
                    user.emailAddresses.find(
                      (email) => email.id === user.primaryEmailAddressId
                    )?.emailAddress
                  }
                </div>
                <div>{user.publicMetadata.role as string}</div>
              </div>

              <div className="flex flex-col gap-2 ml-auto">
                <div>
                  <form action={setRole}>
                    <input type="hidden" value={user.id} name="id" />
                    <input type="hidden" value="admin" name="role" />
                    <button type="submit">Make Admin</button>
                  </form>
                </div>
                <div>
                  <form action={setRole}>
                    <input type="hidden" value={user.id} name="id" />
                    <input type="hidden" value="moderator" name="role" />
                    <button type="submit">Make Moderator</button>
                  </form>
                </div>
                <div>
                  <form action={setRole}>
                    <input type="hidden" value={user.id} name="id" />
                    <input type="hidden" value="customer" name="role" />
                    <button type="submit">Make Customer</button>
                  </form>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}