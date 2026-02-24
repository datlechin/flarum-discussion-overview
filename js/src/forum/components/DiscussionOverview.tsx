import Component from 'flarum/common/Component';
import type Mithril from 'mithril';
import Discussion from 'flarum/common/models/Discussion';
import User from 'flarum/common/models/User';
import Post from 'flarum/common/models/Post';
import Link from 'flarum/common/components/Link';
import Tooltip from 'flarum/common/components/Tooltip';
import Avatar from 'flarum/common/components/Avatar';
import humanTime from 'flarum/common/utils/humanTime';
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
    const posts = (discussion.posts() || []).filter(Boolean) as Post[];
    const firstPost = posts[0] as Post | undefined;
    const participantCount = discussion.attribute<number>('participantCount') || 0;

    const lastPostedAt = discussion.lastPostedAt();
    const lastPostedUser = discussion.lastPostedUser() as User | undefined;

    const participantUsers = new Set<User>();
    posts.forEach((post) => {
      const user = post.user?.();
      if (user) {
        participantUsers.add(user);
      }
    });

    return (
      <div className="DiscussionOverview">
        <ul className="DiscussionOverview-list">
          <li className="created-at">
            <h4>{app.translator.trans('datlechin-discussion-overview.forum.created')}</h4>
            <div className="time">{discussion.createdAt() ? humanTime(discussion.createdAt()!) : ''}</div>
          </li>
          <li className="last-reply">
            <h4>{app.translator.trans('datlechin-discussion-overview.forum.last_reply')}</h4>
            <div className="time">
              {lastPostedUser ? <Avatar user={lastPostedUser} /> : null}
              {lastPostedAt ? humanTime(lastPostedAt) : ''}
            </div>
          </li>
          <li className="replies">
            <span className="number">{discussion.replyCount()}</span>
            <h4>{app.translator.trans('datlechin-discussion-overview.forum.replies')}</h4>
          </li>
          {app.initializers.has('michaelbelgium-discussion-views') ? (
            <li className="views">
              <span className="number">{(discussion as any).viewCount?.() || 0}</span>
              <h4>{app.translator.trans('datlechin-discussion-overview.forum.views')}</h4>
            </li>
          ) : null}
          <li className="users">
            <span className="number">{participantCount}</span>
            <h4>{app.translator.trans('datlechin-discussion-overview.forum.users')}</h4>
          </li>
          <li className="likes">
            <span className="number">{firstPost?.attribute('likesCount') || 0}</span>
            <h4>{app.translator.trans('datlechin-discussion-overview.forum.likes')}</h4>
          </li>
          <li className="avatars">
            <div className="user-list">
              {Array.from(participantUsers).map((user: User) => (
                <Tooltip key={user.id()} text={user.displayName()}>
                  <Link href={app.route.user(user)}>
                    <Avatar user={user} />
                  </Link>
                </Tooltip>
              ))}
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
