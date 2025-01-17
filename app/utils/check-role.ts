
import { Roles } from "@/app/types/globals"
import { auth } from "@clerk/nextjs/server"

export const checkRole = (role:Roles) => {
  const { sessionClaims } = auth()

  // if (process.env.NODE_ENV == "development")
  // {
  //   return true;
  // }

  return sessionClaims?.metadata.role === role;
}
