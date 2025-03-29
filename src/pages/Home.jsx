import React from 'react'
import { useAuth } from '../context/AuthContext';
export default function Home() {
  const {user} = useAuth();

  return (
    <>
      <main className="container mx-auto py-8 px-6">
        <h1 className="text-4xl">
          {user ? <span>Welcome, {user.firstName}!</span> : ""}
        </h1>
        <section className="bg-gray-200 h-64 flex items-center justify-center">
          <h1 className="text-4xl text-blue-500">
            Banner
          </h1>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl text-blue-500">
            About us
          </h2>
          <hr className="border-blue-500 my-2" />
        </section>
        <section className="mt-8">
          <h3 className="text-xl text-blue-500">
            How to join as a mentor?
          </h3>
          <h3 className="text-xl text-blue-500 mt-4">
            How to join as a mentee?
          </h3>
          <hr className="border-blue-500 my-2" />
        </section>
        <section className="mt-8">
          <h2 className="text-2xl text-blue-500">
            Testimonial
          </h2>
          <div className="flex space-x-4 mt-4">
            <div className="bg-gray-300 w-1/3 h-48 flex items-center justify-center">
              <img alt="Testimonial 1" className="w-full h-full object-cover" height="150" src="https://storage.googleapis.com/a1aa/image/HtPwLbPASEDdFf0C-puaKqmx50rAip5lBXUfsIYuGAw.jpg" width="150" />
            </div>
            <div className="bg-gray-300 w-1/3 h-48 flex items-center justify-center">
              <img alt="Testimonial 2" className="w-full h-full object-cover" height="150" src="https://storage.googleapis.com/a1aa/image/jcdCxtkglb61zo6rBvWang24RDYsYy7fRm2j5SxfkAM.jpg" width="150" />
            </div>
            <div className="bg-gray-300 w-1/3 h-48 flex items-center justify-center">
              <img alt="Testimonial 3" className="w-full h-full object-cover" height="150" src="https://storage.googleapis.com/a1aa/image/8PIIyZZmj1V-d0ZqpSY4mel6SH8c1gmNQFvzoCfPXP8.jpg" width="150" />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-center space-x-4">
          <a className="text-blue-500 flex items-center" href="#">
            <i className="fas fa-envelope mr-2">
            </i>
            Email
          </a>
          <a className="text-blue-500 flex items-center" href="#">
            <i className="fab fa-youtube mr-2">
            </i>
            Youtube
          </a>
          <a className="text-blue-500 flex items-center" href="#">
            <i className="fab fa-facebook mr-2">
            </i>
            FB
          </a>
          <a className="text-blue-500 flex items-center" href="#">
            <i className="fas fa-phone mr-2">
            </i>
            Contact
          </a>
        </div>
      </footer>
    </>
  )
}
