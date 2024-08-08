const { connectDB } = require("@/database/db");
const User = require("@/database/models/userModel")

connectDB();

/**
 * Creates a new user.
 * @param {Object} newUser - The user object containing staff number, firstname, lastname, middlename, title, and password.
 * @returns {Promise<Object>} - The created user object without the password field.
 * @throws {Error} - If incorrect parameters are provided.
 */
exports.createUser = async ({ staffNumber, firstName, lastName, middleName, titleId, password }) => {
    try {
        if (newUser) {
            const user = await User.create({ ...newUser }).select('-password');
            return user;
        } else {
            throw new Error("Incorrect parameters");
        }
    } catch (error) {
        throw error;
    }
}

/**
 * Retrieves a user by their staff number.
 * @param {string} staffNumber - The staff number of the user.
 * @returns {Promise<Object>} - The user object without the password field.
 * @throws {Error} - If no staff number is passed.
 */
exports.getUserByStaffNumber = async (staffNumber) => {
    try {
        if (!staffNumber || staffNumber === '') {
            throw new Error("No staff number passed");
        }
        return await User.find(staffNumber).select('-password');
    } catch (error) {
        throw error;
    }
}

/**
 * Retrieves a list of users.
 * @param {number} pageSize - The number of users to retrieve per page.
 * @param {number} page - The page number.
 * @param {boolean} active - Filter users by active status.
 * @returns {Promise<Array<Object>>} - An array of user objects without the password field.
 * @throws {Error} - If an error occurs while retrieving the users.
 */
exports.getUsers = async (pageSize, page, active) => {
    try {
        return await User.find(active ? { active: active } : {})
            .select("-password")
            .limit(pageSize ? +pageSize : 16)
            .skip(page ? (+page - 1) * +pageSize : 0);
    } catch (error) {
        throw error;
    }
}

/**
 * Updates a user by their ID.
 * @param {string} id - The ID of the user to update.
 * @param {Object} update - The fields to update (firstname, lastname, middlename, title).
 * @returns {Promise<Object>} - The updated user object without the password field.
 * @throws {Error} - If no staff number is passed.
 */
exports.updateUser = async (id, { firstname, lastname, middlename, title }) => {
    try {
        if (!id || id === '') {
            throw new Error("No ID passed");
        }
        const update = { ...(firstname && { firstname }), ...(lastname && { lastname }), ...(middlename && { middlename }), ...(title && { title }) };
        return await User.findOneAndUpdate(id, update, { new: true }).select('-password');
    } catch (error) {
        throw error;
    }
}