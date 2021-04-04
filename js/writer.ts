import $ from 'jquery';

export const writeNextTodo = (nextTodoText: string): void => {
  $('#nextTodo').text(`次のTODO: ${nextTodoText}`);
};
