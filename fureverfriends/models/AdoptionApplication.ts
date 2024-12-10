export interface AdoptionApplication {
  applicationid: string;
  petid: string;
  adopterid: string;
  ownerid: string;
  message?: string;
  status: "pending" | "approved" | "rejected";
  submittedat: Date;
}
