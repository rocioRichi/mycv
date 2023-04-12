import { InfoCompany } from "../../../models/infoCompany";

export interface RepoInfoCompany<IC> {
  createCompany(newCompany: Partial<InfoCompany>, urlPath: string): Promise<IC>;
}
