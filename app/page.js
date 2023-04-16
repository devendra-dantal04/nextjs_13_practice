"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";
import LoadingPage from "./loading";



const HomePage = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchCourses() {
      const response = await fetch("http://localhost:3000/api/courses");
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    }

    fetchCourses()

    return () => {

    };
  }, []);

  if (loading) {
    return <LoadingPage />
  }

  return <>
    <h1>Welcome to world</h1>
    <CourseSearch getSearchResults={(result) => setCourses(result)} />
    <Courses courses={courses} />
  </>;
};

export default HomePage;
