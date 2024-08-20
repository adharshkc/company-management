import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, NotEmpty, PrimaryKey, Table } from "sequelize-typescript";
import UserModel from "./UserModel";
import TeamModel from "./TeamModel";


@Table({
    tableName:"Employee",
    timestamps:false,
    modelName:"EmployeeModel"
})
class EmployeeModel extends Model{
    @AutoIncrement
    @PrimaryKey
    @Column({type:DataType.INTEGER})
    employee_id?:number

    @AllowNull(false)
    @NotEmpty
    @Column({type:DataType.STRING(100),allowNull:false})
    name!:string

    @AllowNull(false)
    @NotEmpty
    @Column({type:DataType.STRING(100),allowNull:false})
    email!:string

    @AllowNull(false)
    @NotEmpty
    @Column({type:DataType.STRING(100),allowNull:false})
    phone!:string

    @AllowNull(false)
    @NotEmpty
    @Column({type:DataType.STRING(100), allowNull:false})
    role!:string

    @AllowNull(true)
    @NotEmpty
    @Column({ type: DataType.DATE })
    joiningDate?: Date;

    @ForeignKey(()=>UserModel)
    @NotEmpty
    @Column({type:DataType.INTEGER, allowNull:false})
    user_id!:number

    @ForeignKey(()=>TeamModel)
    @NotEmpty
    @Column({type:DataType.INTEGER, allowNull:false})
    team_id!:number

    @BelongsTo(()=>UserModel)
    user!:UserModel;

    @BelongsTo(()=>TeamModel)
    team!:TeamModel;

}

export default EmployeeModel