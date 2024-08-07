import { AllowNull, AutoIncrement, Column, DataType, Model, NotEmpty, PrimaryKey, Table } from "sequelize-typescript";



@Table({
    tableName:"ProjectComment",
    timestamps:true,
    modelName:'ProjectCommentModel',
})

class ProjectCommentModel extends Model{
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
    @Column({type:DataType.INTEGER, allowNull:false})
    project_id!:number
}

export default ProjectCommentModel