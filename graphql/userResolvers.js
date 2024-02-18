const UserModel = require('../models/User');
const bcrypt = require('bcrypt');



const userResolvers = {
    Query: {
        users: async () => {
            try{
                const users = await UserModel.find().exec();
                return users;
            } catch (err) {
                throw new Error(err);
            }
        },
        login: async (_, { username, password }) => {
            try{
                const user = await UserModel.findOne({username: username}).exec();
                // username validation
                if(!user){
                    throw new Error('Username does not exist');
                }
                // password validation
                const match = await bcrypt.compare(password, user.password);
                if(!match){
                    throw new Error('Invalid password');
                } else {
                    return {
                        message: `Welcome ${user.username}`,
                        user: user
                    }
                }
            } catch (err) {
                throw new Error(err);
            }
        }

    },
    Mutation: {
        signUp: async (_, { username, email, password }) => {
            try{
                // if user already exists
                const existingUser = await UserModel.findOne({username: username}).exec();

                if(existingUser){
                    throw new Error('Username already exists');
                }

                // Hash password before saving the user
                const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of rounds for salt generation
                const user = new UserModel({
                    username: username,
                    email: email,
                    password: hashedPassword
                });
                const savedUser = await user.save();

                if(savedUser){
                    return {
                        message: `${savedUser.username} successfully created!`,
                        user: savedUser
                    }
                }
            } catch (err) {
                throw new Error(err);
            }
        },
    },
};

module.exports = userResolvers;
