import dotenv from "dotenv";

dotenv.config();

export const loginAsAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      return res.json({ status: 200, message: "logged in successfully" });
    }
    return res.json({
      message: "خطأ في اسم المستخدم او كلمة السر",
      status: 401,
    });
  } catch (error) {
    console.log(error);
  }
};
