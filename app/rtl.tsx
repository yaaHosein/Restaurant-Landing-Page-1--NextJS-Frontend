// Source - https://stackoverflow.com/a/34901929
// Posted by Dmitry  Yaremenko, modified by community. See post 'Timeline' for change history
// Retrieved 2026-11-15, License - CC BY-SA 3.0

const Dir = React.createClass({
  render: function() {
    let children = (this.props.direction == 'rtl' && this.props.children && this.props.children.reverse) ? this.props.children.reverse() : null;
    return <div>
      { children }
    </div>;
  }
});

// And use as:
// directionVariable = 'rtl'|'ltr'
<Dir direction={ directionVariable }>
  <a>First</a>
  <a>Second</a>
  <a>Third</a>
</Dir>
