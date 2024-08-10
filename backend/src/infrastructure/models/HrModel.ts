import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  NotEmpty,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import UserModel from "./UserModel";

@Table({
  tableName: "Hr",
  timestamps: false,
  modelName: "HrModel",
})
class HrModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  hr_id?: number;

  @AllowNull(false)
  @NotEmpty
  @Column({ type: DataType.STRING(100), allowNull: false })
  name!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({ type: DataType.STRING(100), allowNull: false })
  email!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({ type: DataType.STRING(12), allowNull: false })
  phone!: string;

  @AllowNull(true)
  @NotEmpty
  @Column({ type: DataType.DATE })
  joiningDate?: Date;

  @AllowNull(true)
  @Column({ type: DataType.STRING(6) })
  otp?: string;

  @ForeignKey(() => UserModel)
  @NotEmpty
  @Column({ type: DataType.INTEGER, allowNull: false })
  user_id!: number;

  @AllowNull(false)
  @NotEmpty
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  isVerified!: boolean;

  @BelongsTo(() => UserModel)
  user!: UserModel;
}

export default HrModel;
