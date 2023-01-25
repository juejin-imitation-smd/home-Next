import React from "react";
export default function FancyTheme() {
  return (
    <style jsx global>
      {`
        .markdown-body {
          color: #383838;
          font-size: 15px;
          line-height: 30px;
          letter-spacing: 2px;
          word-break: break-word;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          scroll-behavior: smooth;
          background-image: linear-gradient(
              0deg,
              transparent 24%,
              rgba(201, 195, 195, 0.329) 25%,
              rgba(209, 201, 201, 0.05) 26%,
              transparent 27%,
              transparent 74%,
              rgba(209, 204, 204, 0.185) 75%,
              rgba(180, 176, 176, 0.05) 76%,
              transparent 77%,
              transparent
            ),
            linear-gradient(
              90deg,
              transparent 24%,
              rgba(204, 196, 196, 0.226) 25%,
              rgba(172, 165, 165, 0.05) 26%,
              transparent 27%,
              transparent 74%,
              rgba(209, 204, 204, 0.185) 75%,
              rgba(180, 176, 176, 0.05) 76%,
              transparent 77%,
              transparent
            );
          background-color: #ffffff;
          background-size: 50px 50px;
          padding-bottom: 60px;
        }

        .markdown-body ::selection {
          color: #fff;
          background-color: #a862ea;
        }

        .markdown-body h1,
        .markdown-body h2,
        .markdown-body h3,
        .markdown-body h4,
        .markdown-body h5,
        .markdown-body h6 {
          margin: 24px 0 12px 0;
          color: #a862ea;
        }

        .markdown-body h1 {
          line-height: 2;
          font-size: 1.4em;
        }

        .markdown-body h1 ~ p:first-of-type::first-letter {
          color: #a862ea;
          float: left;
          font-size: 2em;
          margin-right: 0.4em;
          font-weight: bolder;
        }

        .markdown-body h2 {
          font-size: 1.2em;
        }

        .markdown-body h3 {
          font-size: 1.1em;
        }

        .markdown-body ol,
        .markdown-body ul {
          padding-left: 2em;
        }

        .markdown-body ol li,
        .markdown-body ul li {
          margin-bottom: 0;
          padding-left: 0.2em;
        }

        .markdown-body ol li::marker,
        .markdown-body ul li::marker {
          color: #a862ea;
        }

        .markdown-body ol li.task-list-item,
        .markdown-body ul li.task-list-item {
          list-style: none;
        }

        .markdown-body ol li.task-list-item ul,
        .markdown-body ol li.task-list-item ol,
        .markdown-body ul li.task-list-item ul,
        .markdown-body ul li.task-list-item ol {
          margin-top: 0;
        }

        .markdown-body ol ul,
        .markdown-body ol ol,
        .markdown-body ul ul,
        .markdown-body ul ol {
          margin-top: 10px;
        }

        .markdown-body p,
        .markdown-body li,
        .markdown-body code,
        .markdown-body h1,
        .markdown-body h2,
        .markdown-body h3,
        .markdown-body h4,
        .markdown-body h5,
        .markdown-body h6,
        .markdown-body a {
          opacity: 0.85;
          vertical-align: baseline;
          transition: all 0.1s ease;
        }

        .markdown-body p:hover,
        .markdown-body li:hover,
        .markdown-body code:hover,
        .markdown-body h1:hover,
        .markdown-body h2:hover,
        .markdown-body h3:hover,
        .markdown-body h4:hover,
        .markdown-body h5:hover,
        .markdown-body h6:hover,
        .markdown-body a:hover {
          opacity: 1;
        }

        .markdown-body a {
          position: relative;
          display: inline-block;
          color: #a862ea;
          cursor: pointer;
          text-decoration: none;
          position: relative;
        }

        .markdown-body a::after {
          content: "";
          position: absolute;
          width: 98%;
          height: 1px;
          bottom: 0;
          left: 0;
          transform: scaleX(0);
          background-color: #a862ea;
          transform-origin: bottom right;
          transition: transform 0.3s ease-in-out;
        }

        .markdown-body a:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        .markdown-body a:active,
        .markdown-body a:link {
          color: #a862ea;
        }

        .markdown-body img {
          max-width: 100%;
          user-select: none;
          margin: 1em 0;
          transition: transform 0.2s ease 0s;
          background-color: #f8f5ff;
          box-shadow: 0 0 10px #e7daff;
        }

        .markdown-body img:hover {
          opacity: 1;
          box-shadow: 0 0 20px #e7daff;
          transform: translateY(-1px);
        }

        .markdown-body blockquote {
          padding: 0.5em 1em;
          margin: 12px 0;
          border-top-left-radius: 2px;
          border-bottom-left-radius: 2px;
          border-left: 3px solid #a862ea;
          background-color: #f8f5ff;
        }

        .markdown-body blockquote > p {
          margin: 0;
        }

        .markdown-body .math {
          font-style: italic;
          margin: 12px 0;
          padding: 0.5em 1em;
          background-color: #f8f5ff;
        }

        .markdown-body .math > p {
          margin: 0;
        }

        .markdown-body code {
          padding: 2px 0.4em;
          overflow-x: auto;
          color: #a862ea;
          font-weight: bold;
          word-break: break-word;
          font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;
          background-color: #f8f5ff;
        }

        .markdown-body pre {
          margin: 2em 0;
        }

        .markdown-body pre > code {
          display: block;
          padding: 1.5em;
          word-break: normal;
          font-size: 0.9em;
          font-style: normal;
          font-weight: normal;
          font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;
          line-height: 18px;
          color: #383838;
          border-radius: 2px;
          scroll-behavior: smooth;
          box-shadow: 0 0 10px #e7daff;
        }

        .markdown-body pre > code:hover {
          box-shadow: 0 0 20px #e7daff;
        }

        .markdown-body pre > code::-webkit-scrollbar {
          height: 6px;
          background-color: #f8f5ff;
        }

        .markdown-body pre > code::-webkit-scrollbar-thumb {
          background-color: #e7daff;
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
        }

        .markdown-body hr {
          margin: 2em 0;
          border-top: 1px solid #a862ea;
        }

        .markdown-body table {
          width: 100%;
          font-size: 12px;
          max-width: 100%;
          overflow: auto;
          border-collapse: collapse;
        }

        .markdown-body thead {
          color: #a862ea;
          background: #f8f5ff;
        }

        .markdown-body td,
        .markdown-body th {
          padding: 0.5em;
          border: solid 1px #e7daff;
        }

        .markdown-body tr {
          background-color: #f8f5ff;
        }

        @media (max-width: 720px) {
          .markdown-body {
            font-size: 12px;
          }
        }
      `}
    </style>
  );
}
