import {
  AllowNull,
    AutoIncrement,
    Column,
    DataType,
    HasMany,
    Model,
    NotEmpty,
    PrimaryKey,
    Table,
  } from "sequelize-typescript";
import ProjectModel from "./ProjectModel";
  
  @Table({
    tableName: "Team",
    timestamps: false,
    modelName: "TeamModel",
  })
  class TeamModel extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column({ type: DataType.INTEGER })
    team_id?: number | undefined;

    @AllowNull(false)
    @NotEmpty
    @Column({type: DataType.STRING(100), allowNull:false})
    name!: string
    
    @HasMany(()=>ProjectModel)
    projects!:ProjectModel
  }
  
  export default TeamModel;
  