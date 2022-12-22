import axios from "axios";

const backendUrl= "http://44.192.20.147"

export const ApiSolicitudes=(token) => ({
	get: () => axios({
		url: `${backendUrl}/api/solicitudes`,
			headers: {
				Authorization: `Bearer ${token}`
			}
	}).then(({data}) => data)
});