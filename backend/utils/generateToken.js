import jwt from "jsonwebtoken";


// const domain =
//   process.env.NODE_ENV === "production" ? `.onrender.com` : "localhost";


const generateToken = (res, userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  const isProduction = process.env.NODE_ENV === "production";

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: isProduction, // Only true in production (requires HTTPS)
    sameSite: isProduction ? "None" : "Lax", 
    signed: true,
    path: "/",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  return token;
};

export default generateToken;
