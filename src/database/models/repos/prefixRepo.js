const { connectDB } = require('@/database/db');
const PrefixModel = require('@/database/models/PrefixModel');

connectDB();


// Create a new prefix
exports.createPrefix = async ({ prefix }) => {
    if (!prefix) {
        throw new Error('Prefix is required');
    }
    if (typeof prefix !== 'string') {
        throw new Error('Prefix must be a string');
    }
    if (prefix.length < 1) {
        throw new Error('Prefix must not be empty');
    }
    try {
        const newPrefix = await PrefixModel.create({ prefix });
        return newPrefix;
    } catch (error) {
        throw new Error('Failed to create prefix');
    }
};

// Get all prefixes
exports.getAllPrefixes = async ({ pageSize, pageNumber }) => {
    if (pageSize && pageNumber) {
        try {
            const prefixes = await PrefixModel.find().limit(pageSize).skip((pageNumber - 1) * pageSize);
            return prefixes;
        } catch (error) {
            throw new Error('Failed to get prefixes');
        }
    }
};

// Get a prefix by ID
exports.getPrefixById = async ({ prefixId }) => {
    try {
        const prefix = await PrefixModel.findById(prefixId);
        return prefix;
    } catch (error) {
        throw new Error('Failed to get prefix');
    }
};

// Update a prefix by ID
exports.updatePrefixById = async ({ prefixId, newPrefix }) => {
    try {
        const updatedPrefix = await PrefixModel.findByIdAndUpdate(prefixId, newPrefix, { new: true });
        return updatedPrefix;
    } catch (error) {
        throw new Error('Failed to update prefix');
    }
};

// Delete a prefix by ID
exports.deletePrefixById = async ({ prefixId }) => {
    try {
        await PrefixModel.findByIdAndDelete(prefixId);
    } catch (error) {
        throw new Error('Failed to delete prefix');
    }
};