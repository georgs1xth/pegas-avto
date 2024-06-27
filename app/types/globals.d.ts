export { };

export type Roles = "customer" | "admin" | "moderator";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles ;
    };
  }
}