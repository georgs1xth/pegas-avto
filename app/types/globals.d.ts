export { };

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: "customer" | "admin" | "moderator" ;
    };
  }
}