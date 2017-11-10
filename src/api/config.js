import Qs from 'qs'

export default{
	url: '/route',
	method: 'post',
	baseURL: process.env.NODE_ENV === 'production' ? 'http://twx.jchl.com/gateway'
      :'http://twx.jchl.com/gateway',
}