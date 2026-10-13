import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { site } from "@/content/site";

// One browser client for the whole site, created on first use (never during prerender).
// PKCE keeps OAuth and email-link tokens out of the address bar.
let client: SupabaseClient | null = null;

export function supabase(): SupabaseClient {
  client ??= createClient(site.supabase.url, site.supabase.anonKey, {
    auth: { flowType: "pkce", persistSession: true, detectSessionInUrl: true },
  });
  return client;
}
