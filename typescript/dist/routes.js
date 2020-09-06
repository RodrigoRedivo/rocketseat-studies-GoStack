"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.goTypescript = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function goTypescript(req, res) {
    var user = CreateUser_1.default({
        name: 'Rodrigo Redivo',
        email: 'rodrigoredivo@gmail.com',
        password: '123456',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
            { title: 'JavaScript', experience: 100 }
        ],
    });
    return res.json({ message: "Go TypeScript " + user.name });
}
exports.goTypescript = goTypescript;
