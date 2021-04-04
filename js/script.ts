import $ from 'jquery';

const updateAll = (): void => {
  const count = $('.todo').length; // READ
  const next = $('.todo input').first(); // READ
  const nextTodoText = count ? next.val() : '(未登録)'; // READ

  $('#nextTodo').text(`次のTODO: ${nextTodoText}`); // WRITE
  $('#todoCount').text(`(全${count}件)`); // WRITE

  if (count) {
    $('#todoList').show(); // WRITE
    $('#todoEmpty').hide(); // WRITE
  } else {
    $('#todoList').hide(); // WRITE
    $('#todoEmpty').show(); // WRITE
  }
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
