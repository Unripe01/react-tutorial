import React from "react";

export function ExChusen() {
    return (
      <Chosen onChange={value => console.log(value)}>
        <option>vanilla</option>
        <option>chocolate</option>
        <option>strawberry</option>
      </Chosen>
    );
  }

type Props = {
onChange: React.ReactEventHandler;
}

export class Chosen extends React.Component<Props, {}> {
    render() {
      return (
        <div>
          <select className="Chosen-select" >
            {this.props.children}
          </select>
        </div>
      );
    }
  }