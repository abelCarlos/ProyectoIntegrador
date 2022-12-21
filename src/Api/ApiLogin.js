import axios from "axios";

const baseUrl="http://127.0.0.1:8000/api";

export const ApiClasificaciones=(token) => ({
	get: () => axios({
		url: `${baseUrl}/clasificaciones`,
			headers: {
				Authorization: `Bearer ${token}`
			}
	}).then(({data}) => data)
});
export const ApiLogin=(token) => ({
	post: () => axios({
		url: `${baseUrl}/auth/me`,
			method: "post",
			headers: {
				Authorization: `Bearer ${token}`
			}
	}).then(({data}) => data)
});

export const ApiLogout=(token) => ({
	post: () => axios({
		url: `${baseUrl}/auth/logout`,
			method: "post",
			headers: {
				Authorization: `Bearer ${token}`
			}
	}).then(({data}) => data)
});