import {
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
  @Column({ type: DataType.STRING(100), allowNull: false})
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
  @Column({ type: DataType.ENUM("start", "completed", "pending"),defaultValue:"start", allowNull: false })
  status!: 'start'|'completed'|'pending';

  @ForeignKey(() => ProjectModel)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER, allowNull: false })
  project_id!: number;

  @BelongsTo(() => ProjectModel)
  project!: ProjectModel;

  @HasMany(()=>IssueModel)
  issues!:IssueModel[]

  @HasMany(()=>CommentModel)
  comments!:CommentModel[]
}

export default SprintModel;
