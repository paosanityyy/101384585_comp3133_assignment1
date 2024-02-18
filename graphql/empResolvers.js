const EmployeeModel = require('../models/Employee');

const empResolvers = {
    Query: {
        employees: async () => {
            try{
                const employees = await EmployeeModel.find().exec();
                return employees;
            } catch (err) {
                throw new Error(err);
            }
        },
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
        employees: async (_, { id }) => {
            try{
                const employee = await EmployeeModel.findById(id).exec();
                return employee;
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    Mutation: {
        addEmployee: async (_, { firstName, lastName, email, gender, salary }) => {
            try{
                const employee = new EmployeeModel({...args});
                // if employee already exists
                const existingEmployee = await EmployeeModel.findOne({ email: args.email }).exec();

                if(existingEmployee){
                    throw new Error('Employee already exists');
                }

                const savedEmployee = await employee.save();

                if(savedEmployee){
                    return {
                        message: `Employee successfully created!`,
                        employee: savedEmployee
                    }
                }
            } catch (err) {
                throw new Error(err);
            }
        },
        // update employee by id
        updateEmployee: async (_, { args }) => {
            try{
                const updatedEmployee = await EmployeeModel.findByIdAndUpdate(
                    args.id, 
                    { ...args }, 
                    { new: true }
                ).exec();
                
                if(updatedEmployee){
                    return {
                        message: `Employee successfully updated!`,
                        employee: updatedEmployee
                    }
                }
            } catch (err) {
                throw new Error(err);
            }
        },

        // delete employee by id
        deleteEmployee: async (_, { id }) => {
            try{
                const deletedEmployee = await EmployeeModel.findByIdAndDelete(id).exec();
                if(deletedEmployee){
                    return {
                        message: `Employee successfully deleted!`,
                        employee: deletedEmployee
                    }
                }
            } catch (err) {
                throw new Error(err);
            }
        }

                
        
    },
};

module.exports = empResolvers;