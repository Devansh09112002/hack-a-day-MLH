const User = require("../Models/userModel");

module.exports.register = async (req,res,next) => {
    try{
    const { username, email } = req.body;

    const userNameCheck = await User.findOne({ username });
    if(userNameCheck) {
        return res.json({ msg: "Username already used", status: false });
    }

    const emailCheck = await User.findOne({ email });
    if(emailCheck) {
        return res.json({ msg: "Email already used", status: false});
    }

    const user = await User.create({
        email,
        username,
    });
    return res.json({ status: true, user });

    } catch (error) {
        next(error)
    }
}