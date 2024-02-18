// const User = require('../models/User');
// const Employee = require('../models/Employee');

// const resolvers = {
//     Mutation: {
//         async createUser(_, { userInput: {username, email, password } }) {
//             const user = new User({
//                 username,
//                 email,
//                 password
//             });
//             await user.save();
//             return user;
//         },
//         async createEmployee(_, { employeeInput: {firstName, lastName, email, gender, salary} }) {
//             try{
//                 const employee = new Employee({
//                     firstName,
//                     lastName,
//                     email,
//                     gender,
//                     salary
//                 });
//                 await employee.save();
//                 return employee;
//             } catch(err){
//                 throw new Error(err);
//             }
//         },
//         async updateEmployee(_, { _id, employeeInput: {firstName, lastName, email, gender, salary} }) {
//             const updatedEmployee = await Employee.findByIdAndUpdate(id, {
//                 firstName,
//                 lastName,
//                 email,
//                 gender,
//                 salary
//                 }, { new: true });
//             return updatedEmployee;
//         },

//         async deleteEmployee(_, { _id }) {
//             try{
//                 await Employee.findByIdAndDelete(id);
//                 return true;
//             } catch(err){
//                 return false;
//             }
//         }
//     },
//     Query: {
//         async getUsers() {
//             const users = await UserModel.find().exec();
//             return users;
//         },
//         async getEmployees() {
//             const employees = await EmployeeModel.find().exec();
//             return employees;
//         },
//         login: async (_, { loginInput:{ username, password }}) => {
//             const findUser = await UserModel.findOne({username: username}).exec();
//             // username validation
//             if(!findUser){
//                 throw new Error('User does not exist');
//             } else {
//                 return{
//                     message: "User successfully logged in", findUser
//                 }
//             }
//         },
        
//         // get employee by id
//         getEmployeeById: async (_, { id }) => {
//             const findEmployee = await EmployeeModel.findById(id).exec();
//             if(!findEmployee){
//                 throw new Error('Employee does not exist');
//             }
//             return employee;
//         }
//     }
// }

// module.exports = resolvers;

