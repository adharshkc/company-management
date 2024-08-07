import { IProject } from "@domain/entities/Project";
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
import TeamModel from "./TeamModel";
// import CommentModel from "./CommentModel";

@Table({
  tableName: "Project",
  timestamps: true,
  modelName: 'ProjectModel'
})
class ProjectModel extends Model implements IProject {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  project_id?: number | undefined;

  @AllowNull(false)
  @NotEmpty
  @Column({ type: DataType.STRING(100), allowNull: false })
  name!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({ type: DataType.STRING(50), allowNull: false })
  priority!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({ type: DataType.DATE, allowNull: false })
  startDate!: Date;
  
  @AllowNull(true)
  @Column({type:DataType.TEXT})
  description?:string

  @AllowNull(false)
  @NotEmpty
  @Column({type:DataType.STRING(50), allowNull: false, defaultValue:'pending'})
  status!:string

  @ForeignKey(() => TeamModel)
  @NotEmpty
  @Column({ type: DataType.INTEGER, allowNull: false })
  team_id!: number;

  @BelongsTo(() => TeamModel)
  team!: TeamModel;
}

export default ProjectModel;
