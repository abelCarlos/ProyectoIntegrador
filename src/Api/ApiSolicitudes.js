import axios from "axios";

const backendUrl= "http://3.226.255.251"

export const ApiSolicitudes=(token) => ({
	get: () => axios({
		url: `${backendUrl}/api/solicitudes`,
			headers: {
				Authorization: `Bearer ${token}`
			}
	}).then(({data}) => data)
});

export const ApiEditarSolicitudes=(token) => ({
	get: (id) => axios({
		url: `${backendUrl}/api/solicitudes${id}`,
			headers: {
				Authorization: `Bearer ${token}`
			}
	}).then(({data}) => data)
});

export const ApiCrearSolicitudes=(token) => ({
	post: (data) => axios({
		url: `${backendUrl}/api/solicitudes`,data,
			method: "post",
			headers: {
				Authorization: `Bearer ${token}`
			}
	}).then(({data}) => data)
});