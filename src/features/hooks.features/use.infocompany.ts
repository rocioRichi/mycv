// import { useDispatch, useSelector } from "react-redux";
import { InfoCompany } from "../../models/infoCompany";
// import { AppDispatch, RootState } from "../../store/store";
import { InfoCompanyRepo } from "../repo.features/infocompany.repo/infocompany.repo";

export function useInfoCompany(repo: InfoCompanyRepo) {
  // const users = useSelector((state: RootState) => state.users);

  // const dispatch = useDispatch<AppDispatch>();

  const userCompany = async (newCompany: Partial<InfoCompany>) => {
    try {
      await repo.createCompany(newCompany, "users/company");
    } catch (error) {
      console.error((error as Error).message);
    }
  };
  return {
    userCompany,
  };
}
