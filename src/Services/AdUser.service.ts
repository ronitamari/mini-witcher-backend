import sequelize, { Op } from "sequelize";
import { AdUserModel } from "../DB/Model/AdUserSchema";
import { UserTypeModel } from "../DB/Model/userTypeSchema";
import { typesAmount, usersInAD } from "../Models/resUser.model";
import { transformAuthInfo } from "passport";

class AdUserService {
  getAllUsersInAD = async (
    page: number,
    limit: number
  ): Promise<usersInAD[]> => {
    const offset = limit * (page - 1);

    const users = await AdUserModel.findAll({
      include: [UserTypeModel],
      limit: limit,
      offset: offset,
    });

    return users;
  };

  getAmountOfUsersInAD = async (): Promise<number> => {
    return AdUserModel.count();
  };

  getAmountOfDisabledUsersInAD = async (): Promise<number> => {
    return AdUserModel.count({
      where: {
        enabled: false,
      },
    });
  };

  getAmountOfActiveUsersInAD = async (): Promise<number> => {
    const nowDate = new Date();

    return AdUserModel.count({
      where: {
        last_logon_time: {
          [Op.gte]: new Date(nowDate.setMonth(nowDate.getMonth() - 3)),
        },
      },
    });
  };

  getAmountOfInctiveUsersInAD = async (): Promise<number> => {
    const nowDate = new Date();

    return AdUserModel.count({
      where: {
        last_logon_time: {
          [Op.lt]: new Date(nowDate.setMonth(nowDate.getMonth() - 3)),
        },
      },
    });
  };

  getAmountOfEnforcedUsersInAD = async (): Promise<number> => {
    return AdUserModel.count({
      where: {
        smart_card_logon_required: true,
      },
    });
  };

  getAmountOfNotEnforcedUsersInAD = async (): Promise<number> => {
    return AdUserModel.count({
      where: {
        smart_card_logon_required: false,
      },
    });
  };

  getAmountOfUsersByTypeInAD = async (): Promise<typesAmount[]> => {
    const usersAmount = await AdUserModel.findAll({
      attributes: [
        [sequelize.fn("COUNT", "user_type.type"), "count"],
        "user_type.type",
      ],
      include: [
        {
          model: UserTypeModel,
          attributes: [],
        },
      ],
      group: ["type", "user_type.id"],
      raw: true,
    });
    return usersAmount;
  };
}

export default new AdUserService();
