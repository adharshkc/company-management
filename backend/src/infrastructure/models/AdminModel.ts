import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  AutoIncrement,
  DataType,
  ForeignKey,
} from "sequelize-typescript";

@Table({
  tableName: "Admin",
  timestamps: false,
})
class AdminModel extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  admin_id!: number;

  @Column(DataType.STRING(100))
  name!: string;

  @Column(DataType.STRING(100))
  email!: string;

  @Column(DataType.STRING(100))
  password!: string;

  @Column(DataType.DATE)
  dob!: Date;

  @Column(DataType.STRING(10))
  gender!: string;

  @Column(DataType.STRING(15))
  phone!: string;

  //   @ForeignKey(() => RoleModel)
  //   @Column(DataType.INTEGER)
  //   role_id!: number;
}

export default AdminModel;
