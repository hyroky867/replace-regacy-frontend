import $ from 'jquery';
import { readData } from './reader';
import { writeNextTodo, writeTodoCount, toggleTodoList, toggleTodoEmpty, addTodo } from './writer';

const updateAll = (): void => {
  const { count, nextTodoText } = readData();

  writeNextTodo(nextTodoText);
  writeTodoCount(count);
  toggleTodoList(count);
  toggleTodoEmpty(count);
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
