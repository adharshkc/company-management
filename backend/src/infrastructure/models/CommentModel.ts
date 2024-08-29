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
import EmployeeModel from "./EmployeeModel";
import IssueModel from "./IssueModel";
import SprintModel from "./SprintModel";

@Table({
  tableName: "Comment",
  timestamps: true,
  modelName: "CommentModel",
})
class CommentModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  comment_id?: number;

  @AllowNull(false)
  @NotEmpty
  @Column({ type: DataType.TEXT })
  content!: string;

  @ForeignKey(() => EmployeeModel)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER, allowNull: false })
  commented_by!: number;

  @ForeignKey(() => IssueModel) 
  @ForeignKey(() => SprintModel)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER, allowNull: false })
  commentable_id!: number;

  @AllowNull(false)
  @Column({ 
    type: DataType.ENUM('issue', 'sprint'), 
    allowNull: false 
  })
  commentable_type!: 'issue' | 'sprint';

  @ForeignKey(() => SprintModel)
  @Column({ type: DataType.INTEGER })
  sprint_id?: number;

  @AllowNull(false)
  @Column({ type: DataType.ENUM('issue', 'sprint'), allowNull: false })
  comment_type!: 'issue' | 'sprint';

  @BelongsTo(() => EmployeeModel)
  employee!: EmployeeModel;

  @BelongsTo(() => IssueModel, {
    foreignKey: 'commentable_id',
    constraints: false,
    scope: {
      commentable_type: 'issue'
    }
  })
  issue?: IssueModel;

  @BelongsTo(() => SprintModel, {
    foreignKey: 'commentable_id',
    constraints: false,
    scope: {
      commentable_type: 'sprint'
    }
  })
  sprint?: SprintModel;
}

export default CommentModel;
