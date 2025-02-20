import Component from 'flarum/common/Component';
import type Mithril from 'mithril';
import Discussion from 'flarum/common/models/Discussion';
import User from 'flarum/common/models/User';
import Post from 'flarum/common/models/Post';
import Link from 'flarum/common/components/Link';
import Tooltip from 'flarum/common/components/Tooltip';
import avatar from 'flarum/common/helpers/avatar';
import app from 'flarum/forum/app';

interface DiscussionOverviewAttrs {
  discussion: Discussion;
}

export default class DiscussionOverview extends Component<DiscussionOverviewAttrs> {
  discussion!: Discussion;

  oninit(vnode: Mithril.Vnode<DiscussionOverviewAttrs, this>): void {
    super.oninit(vnode);
    this.discussion = this.attrs.discussion;
  }

  view() {
    const discussion = this.discussion;
    const posts = discussion.posts() as Post[];
    const participantCount = discussion.attribute<number>('participantCount');
    const lastPost = posts?.[posts.length - 1] as Post;

    const participantUsers = new Set<User>();
    posts.forEach((post) => {
      const user = post.user();
      if (user) {
        participantUsers.add(user);
      }
    });

    return (
      <>
        <ul className="DiscussionOverview-list">
          <li className="created-at">
            <h4>{app.translator.trans('datlechin-discussion-overview.forum.created')}</h4>
            <div className="time">{dayjs(discussion.createdAt()).fromNow()}</div>
          </li>
          <li className="last-reply">
            <h4>{app.translator.trans('datlechin-discussion-overview.forum.last_reply')}</h4>
            <Link href={app.route.post(lastPost)}>
              <div className="time">
                {avatar(lastPost.user())}
                {dayjs(discussion.lastPostedAt()).fromNow()}
              </div>
            </Link>
          </li>
          <li className="replies">
            <span className="number">{discussion.replyCount()}</span>
            <h4>{app.translator.trans('datlechin-discussion-overview.forum.replies')}</h4>
          </li>
          {app.initializers.has('michaelbelgium-discussion-views') ? (
            <li className="views">
              <span className="number">{discussion.viewCount()}</span>
              <h4>{app.translator.trans('datlechin-discussion-overview.forum.views')}</h4>
            </li>
          ) : null}
          <li className="users">
            <span className="number">{participantCount}</span>
            <h4>{app.translator.trans('datlechin-discussion-overview.forum.users')}</h4>
          </li>
          <li className="likes">
            <span className="number">{posts[0].attribute('likesCount') || 0}</span>
            <h4>{app.translator.trans('datlechin-discussion-overview.forum.likes')}</h4>
          </li>
          <li className="avatars">
            <div className="user-list">
              {Array.from(participantUsers).map((user: User) => (
                <Tooltip key={user.id()} text={user.attribute('username')}>
                  <Link href={app.route.user(user)}>{avatar(user)}</Link>
                </Tooltip>
              ))}
            </div>
          </li>
        </ul>
      </>
    );
  }
}
