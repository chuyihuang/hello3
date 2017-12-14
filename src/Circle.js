import React from 'react';

const Circle = (props) => (
  <div style={
    {display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor: 'navy', color: 'white', width: '150px', height: '150px', borderRadius: '50%'}
    }>
    {props.value}
  </div>
);

Circle.defaultProps = {
  value: "我是圓形"
}

export default Circle;