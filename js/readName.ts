import $ from 'jquery';

interface ReadName {
  firstName: string;
  lastName: string;
}

export const readName = (): ReadName => {
  return {
    firstName: $('.firstName').text(),
    lastName: $('.lastName').text(),
  };
};
