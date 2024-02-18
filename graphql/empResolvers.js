const EmployeeModel = require('../models/Employee');

const empResolvers = {
    Query: {
        // get all employees
        employees: async () => {
            try{
                const employees = await EmployeeModel.find().exec();
                return employees;
            } catch (err) {
                throw new Error(err);
            }
        },
        // get employee by id
        employeeById: async (_, { _id }) => {
            try{
                const employee = await EmployeeModel.findById(_id).exec();
                return employee;
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    Mutation: {
        addEmployee: async (_, { firstName, lastName, email, gender, salary }) => {
            try{
                const existingEmployee = await EmployeeModel.findOne({
                    email: email
                }).exec();
                if(existingEmployee){
                    throw new Error('Employee already exists');
                }
                const newEmployee = new EmployeeModel({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    gender: gender,
                    salary: salary
                });
                const savedEmployee = await newEmployee.save();
                if(savedEmployee){
                    return {
                        message: `${savedEmployee.firstName} successfully added!`,
                        employee: savedEmployee
                    };
                }
            } catch (err) {
                throw new Error(err);
            }
        },
        updateEmployee: async (_, { _id, firstName, lastName, email }) => {
            try{
                const updatedEmployee = await EmployeeModel.findByIdAndUpdate(_id, {
                    firstName: firstName,
                    lastName: lastName,
                    email: email
                }, {new: true}).exec();
                if(updatedEmployee){
                    return {
                        message: `${updatedEmployee.firstName} successfully updated!`,
                        employee: updatedEmployee
                    };
                }
            } catch (err) {
                throw new Error(err);
            }
        },
        deleteEmployee: async (_, { _id }) => {
            try{
                const deletedEmployee = await EmployeeModel.findByIdAndDelete(_id).exec();
                if(deletedEmployee){
                    return {
                        message: `${deletedEmployee.firstName} successfully deleted!`,
                        employee: deletedEmployee
                    };
                }
            } catch (err) {
                throw new Error(err);
            }
        }                    
    },
};

module.exports = empResolvers;