import Component from 'flarum/common/Component';
import type Mithril from 'mithril';
import Discussion from 'flarum/common/models/Discussion';
import shortTime from '../helpers/shortTime';
import Link from 'flarum/common/components/Link';
import Tooltip from 'flarum/common/components/Tooltip';
import avatar from 'flarum/common/helpers/avatar';

export default class DiscussionOverview<Attrs> extends Component {
  discussion: Discussion | undefined;
  oninit(vnode: Mithril.Vnode<Attrs, this>): void {
    super.oninit(vnode);
    this.discussion = this.attrs?.discussion;
  }
  view() {
    const discussion = this.discussion;

    if (!discussion) {
      return null;
    }

    const posts = discussion?.posts();
    const participantCount = discussion?.attribute('participantCount');
    const lastPost = posts ? posts[posts.length - 1] : null;
    const users = Object.keys(discussion.store.data.users).map((key) => discussion.store.data.users[key]);

    return (
      <>
        <ul className="DiscussionOverview-list">
          <li className="created-at">
            <h4>{app.translator.trans('datlechin-discussion-overview.forum.created')}</h4>
            <div className="time">{shortTime(discussion?.createdAt())}</div>
          </li>
          <li className="last-reply">
            <h4>{app.translator.trans('datlechin-discussion-overview.forum.last_reply')}</h4>
            <Link href={app.route.post(lastPost)}>
              <div className="time">
                {avatar(lastPost.user())}
                {shortTime(discussion?.lastPostedAt())}
              </div>
            </Link>
          </li>
          <li className="replies">
            <span className="number">{discussion?.replyCount()}</span>
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
            <span className="number">{posts[0].likes().length}</span>
            <h4>{app.translator.trans('datlechin-discussion-overview.forum.likes')}</h4>
          </li>
          <li className="avatars">
            <div className="user-list">
              {users.map((user) => (
                <Tooltip text={user?.attribute('username')}>
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
