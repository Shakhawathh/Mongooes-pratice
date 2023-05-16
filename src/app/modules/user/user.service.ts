import User from "./user.model";

export const createUserToDB = async () => {
  const user = await new User({
    id: "107",
    role: "student",
    password: "Test Xmr",
    name: {
      firstName: "Test X",
      middleName: "Hossain",
      lastName: "Chowdhury",
    },
    gender: "male",
    email: "abc@uk.com",
    contactNo: "012439823235",
    emergencyContactNo: "01278932420",
    presentAddress: "Usa",
    permanentAddress: "England",
  });
  await user.save();
  return user;
};
