const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { getActivity, getActivities, updateActivity, addActivity, deleteActivity } = require('./activity.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getActivities)
router.get('/:id', getActivity)
router.put('/:id', requireAuth, updateActivity)
router.post('/', requireAuth, addActivity)
router.delete('/:id', requireAuth, deleteActivity)

module.exports = router