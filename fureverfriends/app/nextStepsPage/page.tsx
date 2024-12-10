"use server";

import NextStepsContent from "@/components/NextSteps/NextStepsContent";
import { Suspense } from "react";

export default async function NextStepsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NextStepsContent />
    </Suspense>
  );
}