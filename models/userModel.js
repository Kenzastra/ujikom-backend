import db from "../config/database.js";
import { Sequelize } from "sequelize";

const {DataTypes} = Sequelize;

const Users = db.define('users',{
    id_user:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nama:{
        type: DataTypes.STRING
    },
    username:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    role:{
        type:DataTypes.STRING
    }
},{
    freezeTableName:true
});

// (async()=>{
//     await db.sync();
// }) ();

export default Users;