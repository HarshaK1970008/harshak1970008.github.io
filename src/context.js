import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  handler = (action, newObject) => {
    switch (action) {
      case "ADD_PROJECT":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;

      case "ADD_RECOMMENDATION":
        this.setState({
          recommendations: [newObject, ...this.state.recommendations],
        });
        break;
    }
  };

  state = {
    handler: this.handler,
    projects: [
      {
        id: 1,
        title: "Project 1",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
        excerpt: "This is my project about....",
        body: "Body 1",
      },
      {
        id: 2,
        title: "Project 2",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
        excerpt: "This is my project about....",
        body: "Body 2",
      },
      {
        id: 3,
        title: "Project 3",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
        excerpt: "This is my project about....",
        body: "Body 3",
      },
      {
        id: 4,
        title: "Project 4",
        imageUrl:
          "https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        excerpt: "This is my project about....",
        body: "Body 4",
      },
    ],
    recommendations: [
      {
        id: 1,
        name: "Random guy 1",
        company: "ABC Company",
        designation: "CEO",
        message: "She is a good engineer",
      },
      {
        id: 2,
        name: "Random guy 2",
        company: "ABC Company",
        designation: "Director",
        message:
          "She is an excellent developer and hard-working girl. Completes her work in due time",
      },
      {
        id: 3,
        name: "Random guy 3",
        company: "ABC Company",
        designation: "Manager",
        message: "She get's things done so quickly and so fast that is ",
      },
      {
        id: 4,
        name: "Random guy 4",
        company: "ABC Company",
        designation: "SDE",
        message: "She is a smartknower",
      },
    ],

    skills: [
      {
        id: 1,
        name: "HTML5",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/html5.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 2,
        name: "CSS3",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/css3.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 3,
        name: "Javascript",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/javascript.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 4,
        name: "Bootstrap 4",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 5,
        name: "React",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/react.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 6,
        name: "Mysql",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/mysql.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 7,
        name: "Python",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/python.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 8,
        name: "Flask",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/flask.png",
        starsTotal: 3,
        starsActive: 2,
      },
    ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
