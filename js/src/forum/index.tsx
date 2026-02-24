import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionOverview from './components/DiscussionOverview';

app.initializers.add('datlechin/flarum-discussion-overview', () => {
  extend('flarum/forum/components/CommentPost', 'content', function (content) {
    const post = this.attrs.post;

    if (post.number() !== 1) return;

    const discussion = post.discussion();

    if (!discussion) return;

    content.push(<DiscussionOverview discussion={discussion} />);
  });
});
