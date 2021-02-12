const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ERRORS } = require("../utilities/errors");

const AccountSchema = new Schema(
    {
        name: {
            type: Schema.Types.String,
            required: [true, ERRORS.ACCOUNT_NAME_REQUIRED],
        },
        dateCreated: {
            type: Schema.Types.Date,
            required: [true, ERRORS.DATE_CREATED_REQUIRED],
        },
        dateUpdated: {
            type: Schema.Types.Date,
            required: [true, ERRORS.DATE_UPDATED_REQUIRED],
        },
    },
    { autoCreate: true }
);

module.exports = mongoose.model("Account", AccountSchema);
