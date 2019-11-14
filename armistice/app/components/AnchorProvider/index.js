// Libraries
import React from 'react';

export const AnchorContext = React.createContext();

// Component
export class AnchorProvider extends React.Component {
  state = {
    nodes: {},
  };

  registerNode = (name, node) => {
    if (this.state.nodes.hasOwnProperty(name)) return;

    this.setState(({ nodes }) => ({
      nodes: {
        ...nodes,
        [name]: node,
      },
    }));
  };

  scrollToNode = element => (name, offset = 0) => {
    const node = this.state.nodes[name];
    if (!node) return;

    const scrollTop = element.scrollTop;

    const top = node.getBoundingClientRect().top + scrollTop - 70 - offset;

    element.scrollTo({
      top,
      left: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const { children } = this.props;
    const { nodes } = this.state;

    return (
      <AnchorContext.Provider
        value={{
          nodes,
          registerNode: this.registerNode,
          scrollToNode: this.scrollToNode,
        }}
      >
        {children}
      </AnchorContext.Provider>
    );
  }
}

export const Anchor = ({ name, className = null, children }) => (
  <AnchorContext.Consumer>
    {({ registerNode }) => (
      <div className={className} ref={node => registerNode(name, node)}>
        {children}
      </div>
    )}
  </AnchorContext.Consumer>
);

// Export
export default AnchorProvider;
