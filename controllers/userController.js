import Users from "../models/userModel.js";

export const getUser = async (req, res) => {
    try {
        const response = await Users.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const addUser = async (req, res) => {
    const {nama, username, password, role} = req.body;
    if(!nama || !username || !password || !role) return res.status(404).json({msg:'Kolom Masih Kosong'})
    try {
        await Users.create({
            nama:nama,
            username:username,
            password:password,
            role:role
        });
        res.status(201).json({msg:"User Berhasil Dibuat"})
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async (req,res) => {
    const user = await Users.findOne({
        where:{
            id_user: req.params.id_user
        }
    })
    if(!user) return res.status(404).json({msg:"Data Tidak Ditemukan"});

    const {nama, username, password, role} = req.body;
    try {
        await Users.update({
            nama:nama,
            username:username,
            password:password,
            role:role
        }, {
            where:{
                id_user:req.params.id_user
            }
        });
        res.status(200).json({msg:"User Berhasil Di Update"})
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (req,res) => {
    const user = await Users.findOne({
        where:{
            id_user: req.params.id_user
        }
    })
    if(!user) return res.status(404).json({msg:"Data Tidak Ditemukan"});
    try {
        await Users.destroy({
            where:{
                id_user:req.params.id_user
            }
        });
        res.status(200).json({msg:"User Berhasil Dihapus"})
    } catch (error) {
        console.log(error)
    }
}