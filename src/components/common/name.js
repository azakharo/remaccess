import React from 'react'

export const DisplayName = ({name}) => {
  let nameArr = name.split(" ").map((word) => (word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()));
  let lastName = nameArr[0] || "";
  let firstName = nameArr[1] || "";
  // let middleName = nameArr[2] || "";
  return <span>{firstName} {lastName}</span>;
}
