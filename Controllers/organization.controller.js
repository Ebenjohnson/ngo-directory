const OrganizationService = require('../services/organization.service')
const organizationService = require('../services/organization.service')
const { request } = require('express')
const Organization = require('../models/organization.model')

const GetAllOrganizations = async(req,res) =>{
    try {
        const organizations = await OrganizationService.Find()
        return res.status(200).json({
            message : 'Ok',
            data : organizations
        })
    } catch (error) {
        
       console.log('error: ', error)
    }    
}

const AddOrganization = async(req,res) =>{
    try {
        const {
            org_name,
            org_description,
            org_country,
            org_city,
            org_picture,
        } = req.body

        const existing_organization = await OrganizationService.FindOne({
            org_name
        })

        if(existing_organization){
            return res.status(409).json({
                message : 'Data Exist'
            })
        }

        await OrganizationService.Create({
            org_name,
            org_description,
            org_country,
            org_city,
            org_picture,
        })
        return res.status(200).json({
            message : 'Data inserted'
            
        })
    } catch (error) {
        
       console.log('error: ', error)
    }    
}

const updateOrganization =async (req,res)=>{
    try {
        const {organization_id}= req.params
        const {
            org_name,
            org_description,
            org_country,
            org_city,
            org_picture,
        }= req.body

        const organization = await OrganizationService.FindOne({
            _id : organization_id
        })

        if(!organization){
            return res.status(404).json({
                message: "Data not found"
            })
        }

        await OrganizationService.FindOneAndUpdate({
            _id : organization_id
        },{
            org_name,
            org_description,
            org_country,
            org_city,
            org_picture,
        })

        return res.status(200).json({
            message : "Data Updated"
        })

    } catch (error) {
        console.log('error: ', error)
    }
}

const DeleteOrganization= async(req,res) =>{
    try {
        const {organization_id} = req.params 
        await OrganizationService.DeleteOne({_id:organization_id})
        return res.status(200).json({
            message : 'Data Deleted',
        })

    } catch (error) {
        
       console.log('error: ', error)
    }    
}



module.exports= {
    GetAllOrganizations,
    AddOrganization,
    DeleteOrganization,
    updateOrganization
}

