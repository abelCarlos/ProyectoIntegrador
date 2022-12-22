import axios from "axios";

const backendUrl= "http://3.236.233.51"

export const ApiSolicitudes=(token) => ({
	get: () => axios({
		url: `${backendUrl}/api/solicitudes`,
			headers: {
				Authorization: `Bearer ${token}`
			}
	}).then(({data}) => data)
});