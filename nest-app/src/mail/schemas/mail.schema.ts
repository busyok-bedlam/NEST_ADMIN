import * as mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
	theme: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true
	},
})

export mongoose.model('Message', messageSchema);
