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
import SprintModel from "./SprintModel";
import CommentModel from "./CommentModel";
import EmployeeModel from "./EmployeeModel";

@Table({
  tableName: "Issue",
  timestamps: true,
  modelName: "IssueModel",
})
class IssueModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  issue_id?: number;

  @AllowNull(false)
  @NotEmpty
  @Column({ type: DataType.STRING(100), allowNull: false })
  name!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    defaultValue: "todo",
  })
  status!: string;

  @ForeignKey(() => EmployeeModel) 
  @Column({ type: DataType.INTEGER })
  assignee_id!: number;

  @ForeignKey(() => SprintModel) 
  @Column({ type: DataType.INTEGER })
  sprint_id!: number; 

  @BelongsTo(()=>EmployeeModel)
  assignee!:EmployeeModel

 @BelongsTo(()=>SprintModel)
 sprint!:SprintModel

  @HasMany(() => CommentModel)
  comments!: CommentModel[];

  //history is remaining...
}

export default IssueModel;
