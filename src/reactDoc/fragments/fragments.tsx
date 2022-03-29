import React from "react";

export class Fragments extends React.Component {
  render() {
    const arr = [
        { id:1,term: "teamA", description: "desc1" },
        { id:2,term: "teamB", description: "desc2" }
    ];
    return (
      <>
        <Glossary items={arr}></Glossary>
      </>
    );
  }
}

export function Glossary(props: { items: any[] }) {
  return (
    <dl>
      {props.items.map((item) => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
