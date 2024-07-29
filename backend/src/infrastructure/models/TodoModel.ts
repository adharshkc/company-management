import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, NotEmpty, PrimaryKey, Table } from "sequelize-typescript";
import { ITodo } from "@domain/entities/Todo";
import UserModel from "./UserModel";




@Table({
    tableName:"Todo",
    timestamps: false,
    modelName: "TodoModel"
})

class TodoModel extends Model implements ITodo{
    @AutoIncrement
    @PrimaryKey
    @Column({type: DataType.INTEGER})
    todo_id?: number | undefined;

    @AllowNull(false)
    @NotEmpty
    @Column({type: DataType.TEXT, allowNull: false})
    todo!: string;

    @AllowNull(false)
    @NotEmpty
    @Column({type: DataType.STRING(50), allowNull: false})
    status!: string;

    @ForeignKey(()=>UserModel)
    @NotEmpty
    @Column({type: DataType.INTEGER, allowNull: false})
    userId!: number;

    @BelongsTo(()=>UserModel)
    user!: UserModel;


    
}

export default TodoModel