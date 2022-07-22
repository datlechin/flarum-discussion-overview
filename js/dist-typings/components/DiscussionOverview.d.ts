import Component from 'flarum/common/Component';
import type Mithril from 'mithril';
import Discussion from 'flarum/common/models/Discussion';
export default class DiscussionOverview<Attrs> extends Component {
    discussion: Discussion | undefined;
    oninit(vnode: Mithril.Vnode<Attrs, this>): void;
    view(): JSX.Element;
}
