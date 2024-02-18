const { Schema, model } = require('mongoose');

const EmployeeSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(v);
            },
            message: props => `${props.value} is not a valid email address`
        }
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
        enum: ["Male", "Female", "Other"]
    },
    salary: {
        type: Number,
        required: [true, 'Salary is required']
    },
});

// hash password before saving
EmployeeSchema.pre('save', async function(next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

module.exports = model('Employee', EmployeeSchema);