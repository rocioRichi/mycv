import { currentUrl } from "../../../config.renderorlocal";
import { InfoCompany } from "../../../models/infoCompany";
import { ServerResponse } from "../../../models/users";
import { RepoInfoCompany } from "./infocompany.repo.interface";
export class InfoCompanyRepo implements RepoInfoCompany<ServerResponse> {
  url: string;
  constructor() {
    this.url = currentUrl;
  }
  create(
    companyInfo: Partial<InfoCompany>,
    urlPath: string
  ): Promise<ServerResponse> {
    throw new Error("Method not implemented.");
  }
  async createCompany(
    newCompany: Partial<InfoCompany>,
    urlExtraPath: string
  ): Promise<ServerResponse> {
    const url = this.url + "/" + urlExtraPath;
    console.log(url);
    console.log(newCompany);

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newCompany),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();
    console.log(data);

    return data;
  }
}
