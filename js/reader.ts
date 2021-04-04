import $ from 'jquery';

export const readData = (): {
  count: number;
  nextTodoText: string;
} => {
  const count = $('.todo').length;
  const $next = $('.todo input').first();

  return {
    count,
    nextTodoText: count ? ($next.val() as string) : '(未登録)',
  };
};
