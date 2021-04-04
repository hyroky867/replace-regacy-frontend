import $ from 'jquery';

export const writeNextTodo = (nextTodoText: string): void => {
  $('#nextTodo').text(`次のTODO: ${nextTodoText}`);
};

export const writeTodoCount = (count: number): void => {
  $('#todoCount').text(`(全${count}件)`);
};
