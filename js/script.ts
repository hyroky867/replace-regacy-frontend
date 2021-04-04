import $ from 'jquery';
import { readData } from './reader';
import { writeNextTodo, writeTodoCount, toggleTodoList, toggleTodoEmpty } from './writer';

const updateAll = (): void => {
  const { count, nextTodoText } = readData();

  writeNextTodo(nextTodoText);
  writeTodoCount(count);
  toggleTodoList(count);
  toggleTodoEmpty(count);
};

const addTodo = (): void => {
  const wrapper = $('<div>');
  wrapper.addClass('todo');

  const input = $('<input>');
  input.attr('type', 'text');

  const deleteButton = $('<button>');
  deleteButton.addClass('delete').text('削除');

  wrapper.append(input);
  wrapper.append(deleteButton);
  $('#todoList').append(wrapper); // WRITE
};

export default $(function () {
  $('#addTodo').on('click', function () {
    // EVENT
    addTodo();
    updateAll();
  });

  $('#todoList').on('input', '.todo:eq(0)', function () {
    // EVENT
    updateAll();
  });

  $('#todoList').on('click', '.delete', function () {
    // EVENT
    $(this).closest('.todo').remove();
    updateAll();
  });

  updateAll();
});
