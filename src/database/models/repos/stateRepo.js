const { connectDB } = require("@/database/db");
const State = require("@/database/models/StateModel");

connectDB();

/**
 * Creates a new state.
 * @param {Object} newState - The state object containing name and capital.
 * @returns {Promise<Object>} - The created state object.
 * @throws {Error} - If incorrect parameters are provided.
 */
exports.createState = async (newState) => {
    try {
        if (newState) {
            const state = await State.create({ ...newState });
            return state;
        } else {
            throw new Error("Incorrect parameters");
        }
    } catch (error) {
        throw error;
    }
}

/**
 * Retrieves a state by its ID.
 * @param {string} id - The ID of the state.
 * @returns {Promise<Object>} - The state object.
 * @throws {Error} - If no ID is passed.
 */
exports.getStateById = async (id) => {
    try {
        if (!id || id === '') {
            throw new Error("No ID passed");
        }
        return await State.findById(id);
    } catch (error) {
        throw error;
    }
}

/**
 * Retrieves a list of states.
 * @returns {Promise<Array<Object>>} - An array of state objects.
 * @throws {Error} - If an error occurs while retrieving the states.
 */
exports.getStates = async () => {
    try {
        return await State.find();
    } catch (error) {
        throw error;
    }
}

/**
 * Updates a state by its ID.
 * @param {string} id - The ID of the state to update.
 * @param {Object} update - The fields to update (name, capital).
 * @returns {Promise<Object>} - The updated state object.
 * @throws {Error} - If no ID is passed.
 */
exports.updateState = async (id, { name, capital }) => {
    try {
        if (!id || id === '') {
            throw new Error("No ID passed");
        }
        const update = { ...(name && { name }), ...(capital && { capital }) };
        return await State.findByIdAndUpdate(id, update, { new: true });
    } catch (error) {
        throw error;
    }
}

/**
 * Deletes a state by its ID.
 * @param {string} id - The ID of the state to delete.
 * @returns {Promise<Object>} - The deleted state object.
 * @throws {Error} - If no ID is passed.
 */
exports.deleteState = async (id) => {
    try {
        if (!id || id === '') {
            throw new Error("No ID passed");
        }
        return await State.findByIdAndDelete(id);
    } catch (error) {
        throw error;
    }
}