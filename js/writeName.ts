import $ from 'jquery';

interface Props {
  firstName: string;
  lastName: string;
}

const fullName = ({ firstName, lastName }: Props): string => {
  return `${firstName}${lastName}`;
};

export const writeName = (props: Props): void => {
  $('.fullName').text(fullName(props));
};
