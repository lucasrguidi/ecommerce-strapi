import "next-auth";

declare module "next-auth" {
  interface User {
    jwt?: string;
  }

  interface Session {
    jwt?: string;
  }
}
