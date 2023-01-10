const endpoints = {

	  createJobDescription:{
		method: 'post',
		path: '/description'
	  },

	  createDocuments:{
		method: 'post',
		path: '/documents'
	  },

	  createResume:{
		method: 'post',
		path: '/resume'
	  },
	  
	  task:(task_id:string) => ({
		method: 'get',
		path: '/task/' + task_id
	  }),
	  
	  createCoverLetter:{
		method: "post",
		path: "/cover-letter"
	  },

	  createResumeCoverLetter: {
		method: "post",
		path: "/resume-cover-letter"
	  },
	  checkAPIVersion:{
		method: "get",
		path: "/"
	  }

}

export default endpoints