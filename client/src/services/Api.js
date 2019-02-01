import axios from 'axios'

export default() => {
	return axios.create({
		baseURL: 'http://13.58.134.61:8081'
	})
}
