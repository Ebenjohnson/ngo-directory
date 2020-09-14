const Organization = require('../models/organization.model')

const Find = async() => {
    const organizations = await Organization.Find({})
    return organizations
}

const FindOne = async(query) => {
    const organization = await Organization.FindOne(query)
    return organization
}

const Create = async(data) => {
    const organization = await Organization.Create(data)
    return organization
}
const Update = async() => {
    const organization = await Organization.Find({})
    return organization
}

const FindOneAndUpdate = async(filter,data) => {
    const organization = await Organization.FindOneAndUpdate(filter,{...data})
    return organization
}


const DeleteOne = async(filter) => {
    const organization = await Organization.DeleteOne(filter)
    return organizations
}

module.exports = {
    Find,
    FindOne,
    Create,
    FindOneAndUpdate,
    DeleteOne,
}