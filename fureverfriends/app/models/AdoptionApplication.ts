export interface AdoptionApplication {
  applicationId: string;
  petId: string;
  adopterId: string;
  ownerId: string;
  message?: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: Date;
}
