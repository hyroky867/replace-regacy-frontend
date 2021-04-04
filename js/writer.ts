import $ from 'jquery';

export const writeNextTodo = (nextTodoText: string): void => {
  $('#nextTodo').text(`次のTODO: ${nextTodoText}`);
};

export const writeTodoCount = (count: number): void => {
  $('#todoCount').text(`(全${count}件)`);
};

export const toggleTodoList = (count: number): void => {
  const $todoList = $('#todoList');
  if (count) {
    $todoList.show();
  } else {
    $todoList.hide();
  }
};

export const toggleTodoEmpty = (count: number): void => {
  const $todoList = $('#todoEmpty');
  if (count) {
    $todoList.hide();
  } else {
    $todoList.show();
  }
};

export const addTodo = (): void => {
  const $wrapper = $('<div>');
  $wrapper.addClass('todo');

  const $input = $('<input>');
  $input.attr('type', 'text');

  const $deleteButton = $('<button>');
  $deleteButton.addClass('delete').text('削除');

  $wrapper.append($input);
  $wrapper.append($deleteButton);
  $('#todoList').append($wrapper);
};
