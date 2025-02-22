const express = require( 'express' );
const router = express.Router();
const {
    createShopItem,
    getShopItems,
    getShopItemById,
    deleteShopItemById
} = require( '../controllers/shopitems.controller' );

router.post( '/', createShopItem );
router.get( '/', getShopItems );
router.get( '/:id', getShopItemById );
router.delete( '/:id', deleteShopItemById );

module.exports = router;
