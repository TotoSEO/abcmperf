import { FormationDetail } from "@/components/site/FormationDetail";
import { getFormation, formationMetadata } from "@/data/formations";

const SLUG = "formation-inbound-marketing";

export const metadata = formationMetadata(SLUG);

export default function InboundMarketingPage() {
  return <FormationDetail formation={getFormation(SLUG)} />;
}
