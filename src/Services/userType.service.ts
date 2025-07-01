import { UserTypeModel } from "../DB/Model/userTypeSchema";
import { types } from "../Models/resUser.model";

class userTypeService {

  getAllUsersTypes = async (): Promise<types[]> => {
    const allTypes = await UserTypeModel.findAll({
      attributes: ["type"],
    });
    return allTypes;
  };

}

export default new userTypeService();
