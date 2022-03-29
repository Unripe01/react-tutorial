import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

export function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
