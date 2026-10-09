import { TRACEABILITY_DATABASE } from "@/data/artisans";
import TraceabilityClient from "./TraceabilityClient";

export function generateStaticParams() {
  return Object.keys(TRACEABILITY_DATABASE).map((code) => ({
    code,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  return <TraceabilityClient code={code} />;
}
