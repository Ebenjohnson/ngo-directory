const { request } = require("express");

const express = require('express')
const router = express.Router()

const OrganizationController = require('../Controllers/organization.controller')

router.get('/organization',OrganizationController.GetAllOrganizations)
router.post('/organization',OrganizationController.AddOrganization)
router.put('/organization/organization_id',OrganizationController.updateOrganization)
router.delete('/organization/organization_id', OrganizationController.DeleteOrganization)