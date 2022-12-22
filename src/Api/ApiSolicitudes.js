import axios from "axios";

const backendUrl= "http://44.192.74.212"

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