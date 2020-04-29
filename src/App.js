import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";

function App() {
  return (
        <div className="m-0 p-0 vw-100">
            <CreateBook />
            <BookList />
        </div>
  );
}

export default App;
