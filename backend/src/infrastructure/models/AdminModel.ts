import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  NotEmpty,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

export interface AdminI {
  admin_id?: number | null;
  name: string;
  email: string;
  password: string;
  dob: Date;
  gender: string;
  phone: string;
  role: string;
}

@Table({
  tableName: "Admin",
  timestamps: false,
  modelName: 'AdminModel'
})
class AdminModel extends Model implements AdminI {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  admin_id?: number;

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
  @Column({ type: DataType.STRING(100), allowNull: false })
  password!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({ type: DataType.DATE, allowNull: false })
  dob!: Date;

  @AllowNull(false)
  @NotEmpty
  @Column({ type: DataType.STRING(50), allowNull: false })
  gender!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({ type: DataType.STRING(50), allowNull: false })
  phone!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({ type: DataType.STRING(20) })
  role!: string;
}

export default AdminModel;
