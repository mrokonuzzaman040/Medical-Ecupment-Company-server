const express = require( 'express' );
const router = express.Router();
const {
    createBioreagent,
    deleteBioreagent,
    updateBioreagent,
    getAllBioreagents,
} = require( '../controllers/bioreagent.controller' );

//  /api/bioreagent
router.post( '/', createBioreagent );
router.delete( '/:id', deleteBioreagent );
router.put( '/:id', updateBioreagent );
router.get( '/', getAllBioreagents );

module.exports = router;
