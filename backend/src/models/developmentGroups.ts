import { 
    AllowNull, 
    Column, 
    DataType, 
    Default, 
    Model, 
    PrimaryKey, 
    Table
} from "sequelize-typescript";

@Table({ tableName: "development_groups" }) 
export default class DevelopmentGroups extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string;

    @AllowNull(false)
    @Column(DataType.STRING) 
    name: string;
}
