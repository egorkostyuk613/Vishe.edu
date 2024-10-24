import axios from "axios";

export const getCourses = async () => {
  const res = await axios.get('http://localhost:4000/api/course/viewCourses', {
    withCredentials: true,
  })

  console.log(res)
}

export const getCourse = async () => {
  const res = await axios.get('http://localhost:4000/api/course/viewCourses?title=Разговорный китайский', {
    withCredentials: true,
  })

  console.log(res)
}

