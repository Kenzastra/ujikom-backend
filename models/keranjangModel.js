import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Keranjang = db.define('keranjang',{
    id_transaksi :{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    id_barang : {
        type: DataTypes.INTEGER,
    },
    nama_barang : {
        type: DataTypes.STRING
    },
    jumlah_produk: {
        type: DataTypes.INTEGER
    },
    total:{
        type: DataTypes.DECIMAL
    }
},{
    freezeTableName: true
})

export default Keranjang;