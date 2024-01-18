/*const mongoose=require('mongoose')
const userSchema= mongoose.Schema({
    username:{type:String ,required:true},
    password:{type:String ,required:true},
})*/
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstName:{ type: String,default:' '},
    lastName:{ type: String ,default:' '},
    email:{ type: String ,default:' '},
    mobilenumber:{ type: String ,default:' '},
    github: { type: String,default:' '},
    objective:{ type: String ,default:' '},
    address:{ type: String ,default:' '},
    education:{ type: Array ,default:[]},
    skills:{ type: Array ,default:[]},
    experience:{ type: Array ,default:[]},
    projects:{ type: Array ,default:[]},

});

const User = mongoose.model('users', userSchema);

module.exports = User;
