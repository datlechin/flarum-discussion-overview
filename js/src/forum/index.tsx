import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionOverview from './components/DiscussionOverview';

app.initializers.add('datlechin/flarum-discussion-overview', () => {
  extend('flarum/forum/components/PostStream', 'oncreate', function () {
    const postStream: HTMLElement | null = document.querySelector('.CommentPost div');

    if (!postStream) {
      return;
    }

    const discussion = this.discussion;

    const div = document.createElement('div');
    div.className = 'DiscussionOverview';

    m.mount(postStream.appendChild(div), {
      view: function () {
        return m(DiscussionOverview, { discussion });
      },
    });
  });
});
