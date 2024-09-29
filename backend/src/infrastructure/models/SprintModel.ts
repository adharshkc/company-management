import {
  AfterCreate,
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  NotEmpty,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import ProjectModel from "./ProjectModel";
import IssueModel from "./IssueModel";
import CommentModel from "./CommentModel";
import ColumnModel from "./ColumnModel";

@Table({
  tableName: "Sprint",
  timestamps: true,
  modelName: "SprintModel",
})
class SprintModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  sprint_id?: number;

  @AllowNull(false)
  @NotEmpty
  @Column({ type: DataType.STRING(100), allowNull: false })
  name!: string;

  @AllowNull(true)
  @NotEmpty
  @Column({ type: DataType.DATE, allowNull: true })
  startDate?: Date;

  @AllowNull(true)
  @NotEmpty
  @Column({ type: DataType.DATE, allowNull: true })
  endDate?: Date;

  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.ENUM("start", "completed", "pending"),
    defaultValue: "start",
    allowNull: false,
  })
  status!: "start" | "completed" | "pending";

  @ForeignKey(() => ProjectModel)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER, allowNull: false })
  project_id!: number;

  @BelongsTo(() => ProjectModel)
  project!: ProjectModel;

  @HasMany(() => IssueModel)
  issues!: IssueModel[];

  @HasMany(() => CommentModel)
  comments!: CommentModel[];

  @HasMany(()=>ColumnModel, { onDelete: 'CASCADE' })
  columns!:ColumnModel[]

  @AfterCreate
  static async addDefaultColumns(sprint:SprintModel){
    const defaultColumns = [{ name: "Todo", order: 1 },
    { name: "In Progress", order: 2 },
    { name: "Done", order: 3 },]
    for(const column of defaultColumns){
      await ColumnModel.create({
        name:column.name,
        order:column.order,
        sprint_id:sprint.sprint_id

      })
    }
  }
}

export default SprintModel;
