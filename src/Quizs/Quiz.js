import React from "react";
import { Link } from "react-router-dom";
import { useData, useLikeSave } from "../Context";

export const Quiz = () => {
  const { data } = useData();
  const { likeSaveState } = useLikeSave();

  const categories = [...new Set(data.map((item) => item.category))];

  console.log(likeSaveState.history);

  const videoCat = likeSaveState.history.map((item) => {
    return item.category;
  });

  console.log(videoCat);

  function findDuplicateInArray(array) {
    const count = {};
    const result = [];

    array.forEach((item) => {
      if (count[item]) {
        count[item] += 1;
        return;
      }
      count[item] = 1;
    });

    for (let prop in count) {
      if (count[prop] >= 2) {
        result.push(prop);
      }
    }
    return count;
  }

  const objRes = findDuplicateInArray(videoCat);

  console.log(objRes);

  function getKey(item) {
    const arr = [],
      obj = Object.keys(item);
    for (var x in obj) {
      if (item[obj[x]] === 3) {
        arr.push(obj[x]);
      }
    }
    return arr;
  }

  const final = getKey(objRes);

  return (
    <div>
      <h3 className='quiz-heading'>
        Quizes - Solve your quiz to get eduKit E-Certificate
      </h3>

      <div className='quizes'>
        {categories.map((category) => {
          return category === "Motivational" ? null : (
            <div className='card card-take-quiz'>
              <li className='category' key={category}>
                <h3>{category}</h3>
                {final.map((cat) => {
                  return cat === category ? (
                    <Link to={`${category}`}>
                      <button className='btn btn-main'>Take Quiz</button>
                    </Link>
                  ) : ( 
                    <div></div>
                  );
                })}
                  <div>
                    You can only solve quiz once the course is completed
                  </div>
              </li>

            </div>
          );
        })}
      </div>
    </div>
  );
};
