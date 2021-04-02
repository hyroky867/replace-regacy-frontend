function updateAll() {
  var count = $('.todo').length; // READ
  var next = $('.todo input').first(); // READ
  var nextTodoText = count ? next.val() : '(未登録)' // READ

  $('#nextTodo').text('次のTODO: ' + nextTodoText); // WRITE
  $('#todoCount').text('(全' + count + '件)'); // WRITE

  if (count) {
    $('#todoList').show(); // WRITE
    $('#todoEmpty').hide(); // WRITE
  } else {
    $('#todoList').hide(); // WRITE
    $('#todoEmpty').show(); // WRITE
  }
}

function addTodo() {
  var wrapper = $('<div>');
  wrapper.addClass('todo');

  var input = $('<input>');
  input.attr('type', 'text');

  var deleteButton = $('<button>');
  deleteButton.addClass('delete').text('削除');

  wrapper.append(input);
  wrapper.append(deleteButton);
  $('#todoList').append(wrapper); // WRITE
}

$(function() {
  $('#addTodo').on('click', function() { // EVENT
    addTodo();
    updateAll();
  });

  $('#todoList').on('input', '.todo:eq(0)', function() { // EVENT
    updateAll();
  });

  $('#todoList').on('click', '.delete', function() { // EVENT
    $(this).closest('.todo').remove();
    updateAll();
  });

  updateAll();
});