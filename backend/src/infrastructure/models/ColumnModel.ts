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
import SprintModel from "./SprintModel";

@Table({
  tableName: "Column",
  timestamps: true,
  modelName: "ColumnModel",
})
class ColumnModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  column_id?: number;

  @AllowNull(false)
  @NotEmpty
  @Column({ type: DataType.STRING(100), allowNull: false })
  name!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({ type: DataType.INTEGER, allowNull: false })
  order!: number;

  @ForeignKey(() => SprintModel)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER, allowNull: false })
  sprint_id!: number;

  @BelongsTo(() => SprintModel)
  sprint!: SprintModel;
}

export default ColumnModel;
