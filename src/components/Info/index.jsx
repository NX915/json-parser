import React from 'react';
import { InfoItems } from './InfoItems';

import './index.css';

export const Info = (props) => {
  const data = props.data;
  const name = data.name ? `${data.name[0].given} ${data.name[0].family}` : '';
  const org = data.managingOrganization ? data.managingOrganization.display : '';
  const gender = data.gender ? `${data.gender[0].toUpperCase()}${data.gender.slice(1)}` : '';
  const conditions = data.conditions ? data.conditions : [];

  return (
    <div className='info'>
      <p>Name of patient: {name}</p>
      <p>Organization name: {org}</p>
      <p>Gender: {gender}</p>
      <p>Number of conditions they have: {conditions.length}</p>
      <p>List of all conditions: </p>
      <ul>
        {
          conditions.map(condition => (
            <InfoItems key={condition} condition={condition} />
          ))
        }
      </ul>
    </div>
  );
};