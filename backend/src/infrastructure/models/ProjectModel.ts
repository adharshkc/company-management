import { IProject } from "@domain/entities/Project";
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
import TeamModel from "./TeamModel";

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
  dueDate!: Date;

  @ForeignKey(() => TeamModel)
  @NotEmpty
  @Column({ type: DataType.INTEGER, allowNull: false })
  team_id!: number;

  @BelongsTo(() => TeamModel)
  team!: TeamModel;
}

export default ProjectModel;
