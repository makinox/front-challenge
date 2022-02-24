import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Details from '../pages/Details/Details';
import Home from '../pages/Home/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}
