import instance from "./base.js";

export const login = (login) => instance.post('/users/login', login);

export const ontPut = (fileName) => instance.post('/tables/output', fileName)

export const InPut = (formData) => instance.post('/tables/input', formData)
