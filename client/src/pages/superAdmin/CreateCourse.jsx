import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Axios from "../../Axios";

function CreateCourse() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const initialState = {
    courseTitle: "",
    duration: "",
    url: "",
    amount: "",
    courseFor: "",
  };

  const [inputData, setinputData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setinputData((prevState) => ({ ...prevState, [name]: value }));
  };

  const deleteCourse = async (id) => {
    try {
      if (window.confirm("do you want to delete this course")) {
        let res = await Axios.delete(`/course/${id}`);
        getAllCourses();
      }
    } catch (error) {
      toast.error("something went wrong", {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleSubmit = async (e) => {
    const formData = new FormData();
    formData.append("courseTitle", inputData.courseTitle);
    formData.append("amount", inputData.amount);
    formData.append("courseFor", inputData.courseFor);
    formData.append("duration", inputData.duration);
    formData.append("url", inputData.url);
    formData.append("image", image);

    e.preventDefault();
    setLoading(true);
    try {
      let res = await Axios.post("/course", formData);
      if (res.status === 200) {
        setLoading(false);
        setinputData(initialState);
        toast.success("User Added Successfully", {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER,
        });
      }
      navigate("/admin");
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong", {
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(error.response);
    }
  };
  const getAllCourses = async () => {
    try {
      let { data } = await Axios.get("/course");
      console.log(data);
      setCourses(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getAllCourses();
  }, []);
  return (
    <>
      <div className="w-3/4 ml-6">
        <section className="bg-white p-6">
          <div className="max-w-screen-xl mx-auto">
            <h3 className="text-4xl font-bold text-violet-600 uppercase my-4">
              Create New Course
            </h3>

            <form className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="lg:col-span-1">
                <div className="px-4 sm:px-0">
                  <label
                    className="block capitalize text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    course title
                  </label>
                  <input
                    className="focus:ring-indigo-500 focus:border-indigo-500 shadow appearance-none border rounded w-full py-4 px-3  leading-tight focus:outline-none focus:shadow-outline uppercase"
                    id="username"
                    type="text"
                    required
                    value={inputData.courseTitle}
                    onChange={(e) => onChange(e)}
                    placeholder="course title"
                    name="courseTitle"
                  />
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="px-4 sm:px-0">
                  <label
                    className="block capitalize text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    duration
                  </label>
                  <input
                    className="focus:ring-indigo-500 focus:border-indigo-500 shadow appearance-none border rounded w-full py-4 px-3  leading-tight focus:outline-none focus:shadow-outline uppercase"
                    id="username"
                    type="text"
                    required
                    value={inputData.duration}
                    onChange={(e) => onChange(e)}
                    placeholder="duration"
                    name="duration"
                  />
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="px-4 sm:px-0">
                  <label
                    className="block capitalize text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    course url
                  </label>
                  <input
                    className="focus:ring-indigo-500 focus:border-indigo-500 shadow appearance-none border rounded w-full py-4 px-3  leading-tight focus:outline-none focus:shadow-outline uppercase"
                    id="username"
                    type="text"
                    required
                    value={inputData.url}
                    onChange={(e) => onChange(e)}
                    placeholder="url"
                    name="url"
                  />
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="px-4 sm:px-0">
                  <label
                    className="block capitalize text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    amount
                  </label>
                  <input
                    className="focus:ring-indigo-500 focus:border-indigo-500 shadow appearance-none border rounded w-full py-4 px-3  leading-tight focus:outline-none focus:shadow-outline uppercase"
                    id="username"
                    type="text"
                    required
                    value={inputData.amount}
                    onChange={(e) => onChange(e)}
                    placeholder="amount"
                    name="amount"
                  />
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="px-4 sm:px-0">
                  <label
                    className="block capitalize text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    image
                  </label>
                  <input
                    className="focus:ring-indigo-500 focus:border-indigo-500 shadow appearance-none border rounded w-full py-4 px-3  leading-tight focus:outline-none focus:shadow-outline uppercase"
                    id="username"
                    type="file"
                    required
                    onChange={(e) => setImage(e.target.files[0])}
                    placeholder="image"
                    name="image"
                  />
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="px-4 sm:px-0">
                  <label
                    className="block capitalize text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    type of students
                  </label>
                  <select
                    className="appearance-none my-2 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    name="courseFor"
                    id=""
                    onChange={(e) => onChange(e)}
                  >
                    <option hidden>select </option>
                    <option value="boys">boys</option>
                    <option value="girls">girls</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="lg:col-span-1 mt-4">
              <div className="px-4 sm:px-0">
                {!loading ? (
                  <button
                    onClick={(e) => handleSubmit(e)}
                    className="w-full lg:w-1/2 bg-violet-500 hover:bg-violet-800 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline uppercase"
                  >
                    Submit
                  </button>
                ) : (
                  <h1 className="text-white text-center w-full lg:w-1/2 bg-violet-500 hover:bg-violet-500  font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline uppercase">
                    Processing..
                  </h1>
                )}
              </div>
            </div>
          </div>
        </section>
        <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Course Name
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Duration
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  For
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Open / Close
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Edit
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {courses?.map((course, index) => (
                <tr className="border-b">
                  <td className="px-5 py-3 bg-white text-sm">{index + 1}</td>
                  <td className="px-5 py-3 bg-white text-sm">
                    <a target={"_blank"} href={course.image}>
                      <img src={course.image} alt={course.courseTitle} />
                    </a>
                  </td>
                  <td className="px-5 py-3 bg-white text-sm">
                    {course.courseTitle}
                  </td>
                  <td className="px-5 py-3 bg-white text-sm">
                    {course.duration}
                  </td>
                  <td className="px-5 py-3 bg-white text-sm">
                    {course.courseFor}
                  </td>
                  <td className="px-5 py-3 bg-white text-sm">
                    {course.amount}
                  </td>
                  <td className="px-5 py-3 bg-white text-sm">
                    <span
                      className={`px-2 py-2 text-white ${
                        course.open ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {course.open ? "open" : "closed"}
                    </span>
                  </td>
                  <td className="px-5 py-3 bg-white text-sm">
                    <Link to={`/edit-news/${course._id}`}>
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="cursor-pointer"
                      />
                    </Link>
                  </td>
                  <td className="px-5 py-3 bg-white text-sm">
                    <FontAwesomeIcon
                      onClick={(e) => deleteCourse(course._id)}
                      icon={faTrash}
                      className="cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CreateCourse;