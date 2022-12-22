import axios from "axios";

const backendUrl= "http://3.226.255.251"

export const ApiClasificaciones=(token) => ({
	get: () => axios({
		url: `${backendUrl}/api/clasificaciones`,
			headers: {
				Authorization: `Bearer ${token}`
			}
	}).then(({data}) => data)
});

export const ApiUser=(token) => ({
	get: () => axios({
		url: `${backendUrl}/api/users`,
			headers: {
				Authorization: `Bearer ${token}`
			}
	}).then(({data}) => data)
});

export const ApiLogin=(token) => ({
	post: () => axios({
		url: `${backendUrl}/api/auth/me`,
			method: "post",
			headers: {
				Authorization: `Bearer ${token}`
			}
	}).then(({data}) => data)
});

export const ApiLogout=(token) => ({
	post: () => axios({
		url: `${backendUrl}/api/auth/logout`,
			method: "post",
			headers: {
				Authorization: `Bearer ${token}`
			}
	}).then(({data}) => data)
});