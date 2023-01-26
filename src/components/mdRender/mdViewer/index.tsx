import React, { memo, Component } from 'react';
import { getProcessor } from "bytemd";
import frontmatter from "@bytemd/plugin-frontmatter";
import gemoji from "@bytemd/plugin-gemoji";
import math from '@bytemd/plugin-math-ssr';
import mediumZoom from "@bytemd/plugin-medium-zoom";
import mermaid from "@bytemd/plugin-mermaid";
import theme from "../plugin-theme";
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight-ssr'
import { Viewer } from "@bytemd/react";
import { visit } from "unist-util-visit";
interface IProps {
  value: string;
  themeName: string;
}
interface IState {
  minLevel: number,
  hast: any[],
  throttledScrollHandler: Function,
  itemOffsetTop: any[],
  headNum: number
}
const stringifyHeading = function (e: any) {
  let result = ''
  visit(e, (node) => {
    if (node.type === 'text') {
      result += node.value
    }
  })
  return result
}

/**
 * md编辑器组件
 */
class MdViewer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  plugins = [
    frontmatter(),
    gemoji(),
    math(),
    mediumZoom(),
    mermaid(),
    gfm(),
    highlight(),
    theme(this.props.themeName),
  ];
  hast: any[] = [];
  transformToId() {
    const dom = document.querySelector('.markdown-body') as any;
    let children = Array.from(dom.children) as any[];
    if (children.length > 0) {
      // current element has children, look deeper
      for (let i = 0; i < children.length; i += 1) {
        const tagName = children[i].tagName;
        if (tagName === 'H1' || tagName === 'H2' || tagName === 'H3') {
          const index = this.hast.findIndex((v: any) => v.text === children[i].textContent);
          if (index >= 0) {
            children[i].setAttribute('data-id', `heading-${index}`);
            children[i].classList.add('heading')
          }
        }
      }
    }
  };
  componentDidMount() {
    getProcessor({
      plugins: [
        {
          rehype: (p: any) => p.use(() => (tree: any) => {
            if (tree && tree.children.length) {
              const items: any[] = [];
              console.log(tree)
              tree.children.filter((v: any) => v.type === 'element').forEach((node: any) => {
                if (node.tagName[0] === 'h' && !!node.children.length) {
                  items.push({
                    level: + node.tagName[1],
                    text: stringifyHeading(node),
                  })
                }
              })
              // todo筛选元信息数据
              this.hast = items.filter(v => v.level === 1 || v.level === 2 || v.level === 3);
            }
          }),
        },
      ],
    }).processSync(this.props.value);
    this.transformToId();
  }
  render() {
    return (
      <Viewer value={this.props.value} plugins={this.plugins} />
    )
  }

}
export default memo(MdViewer);
