import { AllowNull, AutoIncrement, Column, DataType, Model, NotEmpty, PrimaryKey, Table } from "sequelize-typescript";



@Table({
    tableName:"Comment",
    timestamps:true,
    modelName:'CommentModel',
})

class CommentModel extends Model{
    @AutoIncrement
    @PrimaryKey
    @Column({type: DataType.INTEGER})
    comment_id!:number

    @AllowNull(false)
    @NotEmpty
    @Column({type: DataType.TEXT, allowNull: false})
    comment!:string


    @AllowNull(false)
    @NotEmpty
    @Column({type: DataType.INTEGER, allowNull: false})
    user_id!:number

    @AllowNull(false)
    @NotEmpty
    @Column({type: DataType.STRING, allowNull: false})
    commentableType!:string

    @AllowNull(false)
    @NotEmpty
    @Column({type: DataType.INTEGER, allowNull: false})
    commentableId!:number

    

}

export default CommentModel