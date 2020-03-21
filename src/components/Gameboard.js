import React from 'react';

function Gameboard(props) {
  return (
    <main>
      <section id="gameboard">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Strength</th>
              <th>Health</th>
              <th>Special Power</th>
              <th>Action</th>
            </tr>
          </thead>
          {props.children}
        </table>
      </section>
    </main>
  );
}
export default Gameboard;

// console.log(names[Math.floor(Math.random() * names.length)]);
