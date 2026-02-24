import Component from 'flarum/common/Component';
import type Mithril from 'mithril';
import Discussion from 'flarum/common/models/Discussion';
import User from 'flarum/common/models/User';
import Post from 'flarum/common/models/Post';
import Link from 'flarum/common/components/Link';
import Tooltip from 'flarum/common/components/Tooltip';
import Avatar from 'flarum/common/components/Avatar';
import Icon from 'flarum/common/components/Icon';
import humanTime from 'flarum/common/utils/humanTime';
import ItemList from 'flarum/common/utils/ItemList';
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
    return (
      <div className="DiscussionOverview">
        <div className="DiscussionOverview-stats">{this.statItems().toArray()}</div>
        {this.participantSection()}
      </div>
    );
  }

  statItems(): ItemList<Mithril.Children> {
    const items = new ItemList<Mithril.Children>();
    const discussion = this.discussion;

    items.add(
      'created',
      <div className="DiscussionOverview-stat">
        <Icon name="far fa-clock" />
        <div className="DiscussionOverview-stat-content">
          <span className="DiscussionOverview-stat-label">{app.translator.trans('datlechin-discussion-overview.forum.created')}</span>
          <span className="DiscussionOverview-stat-value">{discussion.createdAt() ? humanTime(discussion.createdAt()!) : '—'}</span>
        </div>
      </div>,
      100
    );

    const lastPostedAt = discussion.lastPostedAt();
    const lastPostedUser = discussion.lastPostedUser() as User | undefined;

    items.add(
      'lastReply',
      <div className="DiscussionOverview-stat">
        <Icon name="fas fa-reply" />
        <div className="DiscussionOverview-stat-content">
          <span className="DiscussionOverview-stat-label">{app.translator.trans('datlechin-discussion-overview.forum.last_reply')}</span>
          <span className="DiscussionOverview-stat-value">
            {lastPostedUser ? <Avatar user={lastPostedUser} /> : null}
            {lastPostedAt ? humanTime(lastPostedAt) : '—'}
          </span>
        </div>
      </div>,
      90
    );

    items.add(
      'replies',
      <div className="DiscussionOverview-stat">
        <Icon name="far fa-comment" />
        <div className="DiscussionOverview-stat-content">
          <span className="DiscussionOverview-stat-value DiscussionOverview-stat-value--number">{discussion.replyCount()}</span>
          <span className="DiscussionOverview-stat-label">{app.translator.trans('datlechin-discussion-overview.forum.replies')}</span>
        </div>
      </div>,
      80
    );

    if (app.initializers.has('michaelbelgium-discussion-views')) {
      items.add(
        'views',
        <div className="DiscussionOverview-stat">
          <Icon name="far fa-eye" />
          <div className="DiscussionOverview-stat-content">
            <span className="DiscussionOverview-stat-value DiscussionOverview-stat-value--number">{(discussion as any).viewCount?.() || 0}</span>
            <span className="DiscussionOverview-stat-label">{app.translator.trans('datlechin-discussion-overview.forum.views')}</span>
          </div>
        </div>,
        70
      );
    }

    const posts = (discussion.posts() || []).filter(Boolean) as Post[];
    const firstPost = posts[0] as Post | undefined;
    const likesCount = firstPost?.attribute('likesCount') || 0;

    items.add(
      'likes',
      <div className="DiscussionOverview-stat">
        <Icon name="far fa-thumbs-up" />
        <div className="DiscussionOverview-stat-content">
          <span className="DiscussionOverview-stat-value DiscussionOverview-stat-value--number">{likesCount}</span>
          <span className="DiscussionOverview-stat-label">{app.translator.trans('datlechin-discussion-overview.forum.likes')}</span>
        </div>
      </div>,
      60
    );

    return items;
  }

  participantSection(): Mithril.Children {
    const discussion = this.discussion;
    const posts = (discussion.posts() || []).filter(Boolean) as Post[];
    const participantCount = discussion.attribute<number>('participantCount') || 0;

    const participantUsers = new Set<User>();
    posts.forEach((post) => {
      const user = post.user?.();
      if (user) participantUsers.add(user);
    });

    if (participantUsers.size === 0) return null;

    return (
      <div className="DiscussionOverview-participants">
        <div className="DiscussionOverview-participants-avatars">
          {Array.from(participantUsers).map((user: User) => (
            <Tooltip key={user.id()} text={user.displayName()}>
              <Link href={app.route.user(user)} className="DiscussionOverview-participants-avatar">
                <Avatar user={user} />
              </Link>
            </Tooltip>
          ))}
        </div>
        {participantCount > 0 ? (
          <span className="DiscussionOverview-participants-count">
            {app.translator.trans('datlechin-discussion-overview.forum.users')}
            {' · '}
            {participantCount}
          </span>
        ) : null}
      </div>
    );
  }
}
