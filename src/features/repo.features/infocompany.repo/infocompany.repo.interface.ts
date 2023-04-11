import { InfoCompany } from "../../../models/infoCompany";

export interface RepoInfoCompany<IC> {
  create(companyInfo: Partial<InfoCompany>, urlPath: string): Promise<IC>;
}
