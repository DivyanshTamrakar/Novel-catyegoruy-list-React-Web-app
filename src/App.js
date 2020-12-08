import React, { useState } from "react";
import "./styles.css";

const musicTrivia = {
  "Literature and Fiction": [
    {
      Name: "The Alchemist",
      rating: "4.9/5",
      Author: "Paulo Coelho"
    },
    {
      Name: "Think and Grow Rich",
      rating: "4.5/5",
      Author: "Napolean Hill"
    },
    {
      Name: "Life After Life",
      rating: "4.5/5",
      Author: "Kate Akintson"
    },
    {
      Name: "Pride and Prejudice",
      rating: "4.3/5",
      Author: "Jane Austin"
    },
    {
      Name: "The Goldfinch",
      rating: "2.5/5",
      Author: "Donna Tartt"
    }
  ],

  "Crime & Thrill": [
    {
      Name: "The Darkest Evening",
      rating: "4.2/5",
      Author: "Ann Cleeves"
    },
    {
      Name: "Find them Dead",
      rating: "4.5/5",
      Author: "Peter James"
    },
    {
      Name: "The Theif",
      rating: "4.7/5",
      Author: "Fuminori Nakamur"
    },
    {
      Name: "Every Man a Menace",
      rating: "4.5/5",
      Author: "Patrick Hoffman"
    },
    {
      Name: "The Long Drop",
      rating: "4.3/5",
      Author: "Denise Mina"
    }
  ],
  "Personal Development": [
    {
      Name: "How to win friends and Influence people",
      rating: "5/5",
      Author: "Dale Carneige"
    },
    {
      Name: "Rich Dad Poor Dad",
      rating: "4.6/5",
      Author: "Robert"
    },
    {
      Name: "The Power of Now",
      rating: "4.2/5",
      Author: "Eckhart tolle"
    },

    {
      Name: "The Only Skill That Matters",
      rating: "4.2/5",
      Author: "Jonathan A. Levi"
    },
    {
      Name: " The Success Principles",
      rating: "4.8/5",
      Author: "Jack Canfield"
    }
  ],
  Bussiness: [
    {
      Name: "Good To Great",
      rating: "3.9/5",
      Author: "James Collins"
    },
    {
      Name: "Bussiness Adventure ",
      rating: "4.1/5",
      Author: "John Brook"
    },
    {
      Name: "The 4-Hour Workweek",
      rating: "4.1/5",
      Author: "Timothy Ferriss"
    },
    {
      Name: "The Innovator’s Dilemma",
      rating: "4.1/5",
      Author: "Clayton M. Christensen"
    },
    {
      Name: "Tribes",
      rating: "4.1/5",
      Author: "Seth Godin"
    }
  ],
  Biography: [
    {
      Name: "Steve Jobs",
      rating: "4.3/5",
      Author: "Walter isaan"
    },
    {
      Name: "Long Walk to Freedom",
      rating: "4.5/5",
      Author: "Nelason Mandela"
    },
    {
      Name: "The Diary of a Young Girl",
      rating: "3.9/5",
      Author: "Anne Frank"
    },
    {
      Name: "Become",
      rating: "3.9/5",
      Author: "Michelle Obama"
    },
    {
      Name: "A Promised Land",
      rating: "3.9/5",
      Author: "barack Obama "
    }
  ]
};

var music_keys = Object.keys(musicTrivia);
console.log(music_keys);

export default function App() {
  var [song, setsong] = useState("Literature and Fiction");

  function clickHandler(item) {
    setsong(item);
  }

  return (
    <div className="App">
      <h1 className="header">Novel Category List App</h1>
      {music_keys.map(function (item, index) {
        return (
          <button key={item} onClick={() => clickHandler(item)} className="btn">
            {item}
          </button>
        );
      })}

      <div>
        <ul style={{ listStyle: "none" }}>
          {musicTrivia[song].map(function (item) {
            return (
              <li className="list-item">
                <div className="element">{item.Name}</div>
                <div className="element">by</div>
                <div className="element">{item.Author}</div>
                <div className="element">{item.rating}</div>
                <div className="element">{item.Edition}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
