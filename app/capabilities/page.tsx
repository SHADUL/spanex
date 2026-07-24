import { permanentRedirect } from "next/navigation";

/**
 * /capabilities was consolidated into /services. Permanent (308) redirect keeps
 * any existing links and indexed URLs pointing at the canonical services hub.
 */
export default function CapabilitiesRedirect() {
  permanentRedirect("/services");
}
