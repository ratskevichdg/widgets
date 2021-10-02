import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from './components/Route'
import Colors from "./components/Colors";
import Header from "./components/Header";

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Colors />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};