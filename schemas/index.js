const mongoose = require('mongoose');

const connect = () => {
	//개발중 쿼리 확인용
	if (process.env.NODE_ENV !== 'production') {
		mongoose.set('debug', true);
	}

	mongoose.connect(process.env.DBADDRESS, {
		dbName: 'druginfo',
	}, (error) => {
		if (error) {
			console.log('디비 연결 에러');
		} else {
			console.log('디비 연결 성공');
		}
	});
};

module.exports = connect;