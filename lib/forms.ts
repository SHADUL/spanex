/**
 * Form delivery via Web3Forms (https://web3forms.com).
 *
 * Web3Forms emails each submission to the address the access key is registered
 * to — server-side, so it does NOT depend on the visitor having an email client.
 * The access key is safe to expose in client code by design.
 *
 * SETUP (one time):
 *   1. Go to https://web3forms.com, enter admin@spanexengineering.com,
 *      and copy the access key they email you.
 *   2. Either paste it below in place of the placeholder, OR set the
 *      environment variable NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel.
 *   3. Redeploy. Until then, forms fall back to opening the visitor's mail app.
 */

export const CONTACT_EMAIL = "admin@spanexengineering.com";

export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE";

/** True once a real access key has been provided. */
export function isFormsConfigured(): boolean {
  return (
    WEB3FORMS_ACCESS_KEY.length > 20 &&
    !WEB3FORMS_ACCESS_KEY.startsWith("PASTE_")
  );
}

/** POST a submission to Web3Forms. Returns true on delivered. */
export async function submitLead(
  fields: Record<string, string>,
): Promise<boolean> {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      ...fields,
    }),
  });
  const json = await res.json().catch(() => ({ success: false }));
  return res.ok && json.success === true;
}
