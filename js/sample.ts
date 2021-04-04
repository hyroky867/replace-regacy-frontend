import $ from 'jquery';

const fullName = (firstName: string, lastName: string): string => {
  return `${firstName}${lastName}`;
};

const update = (): void => {
  const firstName: string = $('.firstName').text();
  const lastName: string = $('.lastName').text();
  $('.fullName').text(fullName(firstName, lastName));
};

$('.button').on('click', () => {
  update();
});
