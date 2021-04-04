import $ from 'jquery';

export const readData = (): {
  count: number;
  nextTodoText: string;
} => {
  const count = $('.todo').length;
  const nextValue = $('.todo input').first().val();
  const nextValueText = typeof nextValue === undefined ? '' : (nextValue as string);

  return {
    count,
    nextTodoText: count ? nextValueText : '(未登録)',
  };
};
