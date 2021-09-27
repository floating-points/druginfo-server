const express = require('express');
const Drug = require('../schemas/drug');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const drugs = await Drug.find({});

		res.send(drugs);
	} catch (error) {
		console.error(error);
		next(error);
	}
});

router.get('/:drugName', async (req, res, next) => {
	try {
		const drug = await Drug.findOne({name: req.params.drugName});
		if (!drug) {
			next('drug 라우터 에러');
		}
		res.send(drug);
	} catch (error) {
		console.error(error);
		next(error);
	}
});
module.exports = router;