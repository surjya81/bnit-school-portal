import React, { useState } from 'react';
import { Bell, Calendar, Book, Users, ChevronRight, Menu, X } from 'lucide-react';
import './App.css';
import logo from './assets/SchoolLogo.jpg';
import campus from './assets/SchoolCampus.jpg';
import NoticeBoard from './components/NoticeBoard';
import CareersPage from './components/CareersPage';
import AboutUs from './components/AboutUs';
import Admissions from './components/Admissions';

function SchoolWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const announcements = [
    { id: 1, title: "Parent-Teacher Conference", date: "March 15" },
    { id: 2, title: "Spring Break", date: "April 1-7" },
    { id: 3, title: "Science Fair", date: "April 20" }
  ];

  const events = [
    { id: 1, title: "Basketball Game vs. Riverside", date: "March 10, 6:00 PM" },
    { id: 2, title: "Drama Club Performance", date: "March 17, 7:00 PM" },
    { id: 3, title: "Field Trip to Museum", date: "March 22, 9:00 AM" }
  ];

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button onClick={() => handleNavigation('home')} className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <img
                    src={logo}
                    alt="School Logo"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <span className="text-xl font-bold">BNIT PUBLIC SCHOOL</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => handleNavigation('home')} className="hover:text-blue-200">Home</button>
              <button onClick={() => handleNavigation('about')} className="hover:text-blue-200">About</button>
              <button onClick={() => handleNavigation('admissions')} className="hover:text-blue-200">Admissions</button>
              <button onClick={() => handleNavigation('careers')} className="hover:text-blue-200">Careers</button>
              <button onClick={() => handleNavigation('calendar')} className="hover:text-blue-200">Calendar</button>
              <button onClick={() => handleNavigation('contact')} className="hover:text-blue-200">Contact</button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => handleNavigation('home')} className="block px-3 py-2 hover:bg-blue-700 rounded">Home</button>
              <button onClick={() => handleNavigation('about')} className="block px-3 py-2 hover:bg-blue-700 rounded">About</button>
              <button onClick={() => handleNavigation('admissions')} className="block px-3 py-2 hover:bg-blue-700 rounded">Admissions</button>
              <button onClick={() => handleNavigation('careers')} className="block px-3 py-2 hover:bg-blue-700 rounded">Careers</button>
              <button onClick={() => handleNavigation('calendar')} className="block px-3 py-2 hover:bg-blue-700 rounded">Calendar</button>
              <button onClick={() => handleNavigation('contact')} className="block px-3 py-2 hover:bg-blue-700 rounded">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      {currentPage === 'home' && (
        <>
          {/* Hero Section with Background Image */}
          <div className="relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={campus}
                alt="School Campus"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 bg-transparent text-white py-24">
              <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-5xl font-bold mb-4">Welcome to BNIT Public School</h1>
                <p className="text-xl mb-8">Nurturing minds, Building futures</p>
                <button onClick={() => handleNavigation('admissions')} className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              {/* News & Announcements */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <Bell className="mr-2" />
                  <h2 className="text-xl font-semibold">Announcements</h2>
                </div>
                <div className="space-y-4">
                  {announcements.map(announcement => (
                    <div key={announcement.id} className="border-b pb-2">
                      <p className="font-medium">{announcement.title}</p>
                      <p className="text-gray-600 text-sm">{announcement.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <Calendar className="mr-2" />
                  <h2 className="text-xl font-semibold">Upcoming Events</h2>
                </div>
                <div className="space-y-4">
                  {events.map(event => (
                    <div key={event.id} className="border-b pb-2">
                      <p className="font-medium">{event.title}</p>
                      <p className="text-gray-600 text-sm">{event.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <ChevronRight className="mr-2" />
                  <h2 className="text-xl font-semibold">Quick Links</h2>
                </div>
                <div className="space-y-2">
                  <button onClick={() => handleNavigation('student-portal')} className="block p-2 hover:bg-gray-50 rounded w-full text-left">Student Portal</button>
                  <button onClick={() => handleNavigation('parent-portal')} className="block p-2 hover:bg-gray-50 rounded w-full text-left">Parent Portal</button>
                  <button onClick={() => handleNavigation('library')} className="block p-2 hover:bg-gray-50 rounded w-full text-left">Library</button>
                  <button onClick={() => handleNavigation('lunch-menu')} className="block p-2 hover:bg-gray-50 rounded w-full text-left">Lunch Menu</button>
                  <button onClick={() => handleNavigation('school-calendar')} className="block p-2 hover:bg-gray-50 rounded w-full text-left">School Calendar</button>
                </div>
              </div>
            </div>

            <NoticeBoard />

            {/* Feature Sections */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Book className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
                <p className="text-gray-600">Comprehensive curriculum focused on student success</p>
              </div>
              <div className="text-center">
                <Users className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Dedicated Faculty</h3>
                <p className="text-gray-600">Experienced teachers committed to student growth</p>
              </div>
              <div className="text-center">
                <Calendar className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Rich Campus Life</h3>
                <p className="text-gray-600">Diverse extracurricular activities and events</p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Careers Page */}
      {currentPage === 'careers' && <CareersPage />}

      {/* About Us Page */}
      {currentPage === 'about' && <AboutUs />}

      {/* Admissions Page */}
      {currentPage === 'admissions' && <Admissions />}

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>Athagarh</p>
              <p>Cuttack</p>
              <p>Phone: (+91) 9338089898</p>
              <p style={{ paddingLeft: '53px' }}>(+91) 9937884456</p>
              <p>Email: bnitpublicschool@gmail.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => handleNavigation('about')} className="hover:text-blue-300">About Us</button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('admissions')} className="hover:text-blue-300">Admissions</button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('careers')} className="hover:text-blue-300">Careers</button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('athletics')} className="hover:text-blue-300">Athletics</button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => handleNavigation('student-portal')} className="hover:text-blue-300">Student Portal</button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('parent-portal')} className="hover:text-blue-300">Parent Portal</button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('staff-directory')} className="hover:text-blue-300">Staff Directory</button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('calendar')} className="hover:text-blue-300">Calendar</button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <button onClick={() => handleNavigation('facebook')} className="hover:text-blue-300">Facebook</button>
                <button onClick={() => handleNavigation('twitter')} className="hover:text-blue-300">Twitter</button>
                <button onClick={() => handleNavigation('instagram')} className="hover:text-blue-300">Instagram</button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 BNIT Public School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SchoolWebsite;
