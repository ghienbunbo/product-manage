const express = require('express');
const router = express.Router();
const storageMulter = require('../../helpers/storageMulter');
const multer = require('multer');
const upload = multer({storage: storageMulter()});
const validate = require('../../validates/admin/product.validate');

const controller = require('../../controllers/admin/product.controller');

router.get('/', controller.index);

router.patch('/change-status/:status/:id', controller.changeStatus);//dynamic routing

router.patch('/change-multi', controller.changeMulti);

router.delete('/delete/:id', controller.delete);

router.get('/create', controller.create);

router.post('/create', upload.single('thumbnail'), controller.createPost);

router.get('/edit/:id', validate.createPost, controller.edit);

router.patch('/edit/:id', upload.single('thumbnail'), validate.createPost, controller.editPost);
module.exports = router;