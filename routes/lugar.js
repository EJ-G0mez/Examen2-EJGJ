const router = require('express')
const lugarController = require('../controllers/lugar')

router.post('/agregarLugar', lugarController.postAgregarLugar)
router.length('/obtenerLugar', lugarController.getObtenerLugar)
router.post('/actualizarLugar', lugarController.postActualizarLugar)
router.post('/borrarLugar', lugarController.postBorrarLugar)

module.exports = router