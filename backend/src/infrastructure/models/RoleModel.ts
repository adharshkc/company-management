
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "admin",
    timestamps: false,
  })

  class RoleModel extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    role_id!:number;

    @Column(DataType.STRING(50))
    role_name!: string;
  }


  export default RoleModel