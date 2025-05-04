import { LoginFormData, RegisterFormData } from "../libs/formSchema";
import axiosInstance from "../libs/axiosInstance";

export const registerUser = async (formData: RegisterFormData) => {
  return await axiosInstance.post("/admin/approve-reject-admin", formData);
};

export const loginUser = async (formData: LoginFormData) => {
  return await axiosInstance.post("/admin/login", formData);
};
