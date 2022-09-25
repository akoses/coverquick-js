const endpoints = {
	  application:{
		method: 'post',
		path: '/application'
	  },
	  task:(task_id:string) => ({
		method: 'get',
		path: '/task/' + task_id
	  }),
	  tailorBullet:{
		method: "post",
		path: "/tailor/bullet"
	  },
	  regenerate:{
		method: "post",
		path: "/regenerate"
	  }

}

export default endpoints