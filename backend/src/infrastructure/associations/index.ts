import AdminModel from "@infrastructure/models/AdminModel";
import UserModel from "@infrastructure/models/UserModel";

UserModel.hasOne(AdminModel, {foreignKey: 'userId'})

AdminModel.belongsTo(UserModel, {foreignKey: 'userId'})


export default{
    UserModel,
    AdminModel
}