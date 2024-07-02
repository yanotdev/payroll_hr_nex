const connectDB = require("@/app/database/db");
const User = require("@/models/userModel")

connectDB();

//newUser should contain staff number firstname, lastname, middlename, title, password
exports.createUser = async (newUser ) => {
    try {
        if(newUser){
            const user = await User.create({...newUser}).select('-password')
            return user;
        }
        else{
            throw new Error("Incorrect parameters")
        }
    } catch (error) {
        throw error;
    }
}

// get user by their staff number
exports.getUser = async (staffNumber) => {
    try {
        if(!staffNumber || staffNumber === ''){
            throw new Error("no staff number passed");
        }
        return await User.find(staffNumber).select('-password');
    } catch (error) {
        throw error;
    }
}

exports.getUsers = async (pageSize, page, active) => {
    try {
        if(!staffNumber || staffNumber === ''){
            throw new Error("no staff number passed");
        }
        return await User.find(active? {active: active}: {})
                                                        .select("-password")
                                                        .limit(pageSize? +pageSize : 16 )
                                                        .skip(page? (+page - 1) * +pageSize : 0);
    } catch (error) {
        throw error;
    }
}

exports.updateUser = async (id, {firstname, lastname, middlename, title}) => {
    
    try {
        if(!staffNumber || staffNumber === ''){
            throw new Error("no staff number passed");
        }
        const update = { ...(firstname && { firstname }), ...(lastname && { lastname }), ...(middlename && { middlename }), ...(title && { title }) };
        return await User.findOneAndUpdate(id, update, { new: true }).select('-password');
    } catch (error) {
        
    }
}