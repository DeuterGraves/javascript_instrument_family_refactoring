// const PubSub = require('../helpers/pub_sub.js');
import PubSub from '../helpers/pub_sub.js';

class InstrumentFamilyView{

  constructor(container){
  this.container = container;
}

bindEvents(){
  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) => {
    const instrumentFamily = evt.detail;
    this.render(instrumentFamily);
  })
}

// destructuring when it's passed in - inline breaks up the object passed in
render({name, description, instruments}){
  this.container.innerHTML = '';
  // OR COULD Destructure thusly:
  // pass in the object when setting up the function, render(objectName) then - destructure
  // const {name, description, instruments} = objectName
  /*
  under the hood it's:
  const name = objectName.name;
  const description = objectName.description;
  const instruments = objectName.instruments;
  */

  const familyName = this.createElement('h2', name);
  this.container.appendChild(familyName);

  const familyDescription = this.createElement('p', description);
  this.container.appendChild(familyDescription);

  const instrumentListTitle = this.createElement('h3', 'Instruments include:');
  this.container.appendChild(instrumentListTitle);

  const instrumentList = this.createInstrumentList(instruments);
  this.container.appendChild(instrumentList);
}

createElement(elementType, text){
  // function (elementType, text) {
    const element = document.createElement(elementType);
    element.textContent = text;
    return element;
  // }
  }

  createInstrumentList(instruments){
    const list = document.createElement('ul');

    instruments.forEach((instrument) => {
      const listItem = document.createElement('li');
      listItem.textContent = instrument;
      list.appendChild(listItem);
    })

    return list;
  }


}

// const InstrumentFamilyView = function (container) {
//   this.container = container;
// };


// InstrumentFamilyView.prototype.bindEvents = function () {
//   PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) => {
//     const instrumentFamily = evt.detail;
//     this.render(instrumentFamily);
//   });
// };


// InstrumentFamilyView.prototype.render = function (family) {
//   this.container.innerHTML = '';
//
//   const familyName = this.createElement('h2', family.name);
//   this.container.appendChild(familyName);
//
//   const familyDescription = this.createElement('p', family.description);
//   this.container.appendChild(familyDescription);
//
//   const instrumentListTitle = this.createElement('h3', 'Instruments include:');
//   this.container.appendChild(instrumentListTitle);
//
//   const instrumentList = this.createInstrumentList(family.instruments);
//   this.container.appendChild(instrumentList);
// };


// InstrumentFamilyView.prototype.createElement = function (elementType, text) {
//   const element = document.createElement(elementType);
//   element.textContent = text;
//   return element;
// };



export default InstrumentFamilyView;
