/// <reference types="astro/client" />
declare namespace App {
  interface Locals {
    auth: import("lucia").AuthRequest;
  }
}

/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("@src/auth/lucia").Auth;
  type DatabaseUserAttributes = {
    name: string;
    email: string;
    is_approved: number;
    is_admin: number;
    created_at: number;
  };
  type DatabaseSessionAttributes = {};
}
