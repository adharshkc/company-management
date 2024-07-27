import { AllowNull, AutoIncrement, Column, DataType, HasOne, Model, NotEmpty, PrimaryKey, Table } from "sequelize-typescript";
import AdminModel from "./AdminModel";



export interface UserI{
    user_id?: number|null;
    role: string;
}

@Table({
    tableName:"User",
    timestamps: false,
    modelName: "UserModel"
})

class UserModel extends Model implements UserI{
    @AutoIncrement
    @PrimaryKey
    @Column({type: DataType.INTEGER})
    user_id?: number

    @AllowNull(false)
    @NotEmpty
    @Column({type: DataType.STRING(50), allowNull:false})
    role!: string;

    @HasOne(() => AdminModel)
    admin!: AdminModel;
}

export default UserModel