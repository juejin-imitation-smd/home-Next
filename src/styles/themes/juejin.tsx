import React from "react";
export default function Theme() {
  return (
    <style jsx global>
      {`
        .markdown-body {
          word-break: break-word;
          line-height: 1.75;
          font-weight: 400;
          font-size: 16px;
          overflow-x: hidden;
          color: #333;
        }
        .markdown-body h1,
        .markdown-body h2,
        .markdown-body h3,
        .markdown-body h4,
        .markdown-body h5,
        .markdown-body h6 {
          line-height: 1.5;
          margin-top: 35px;
          margin-bottom: 10px;
          padding-bottom: 5px;
        }
        .markdown-body h1 {
          font-size: 24px;
          margin-bottom: 5px;
        }
        .markdown-body h2,
        .markdown-body h3,
        .markdown-body h4,
        .markdown-body h5,
        .markdown-body h6 {
          font-size: 20px;
        }
        .markdown-body h2 {
          padding-bottom: 12px;
          border-bottom: 1px solid #ececec;
        }
        .markdown-body h3 {
          font-size: 18px;
          padding-bottom: 0;
        }
        .markdown-body h6 {
          margin-top: 5px;
        }
        .markdown-body p {
          line-height: inherit;
          margin-top: 22px;
          margin-bottom: 22px;
        }
        .markdown-body img {
          max-width: 100%;
        }
        .markdown-body hr {
          border-top: 1px solid #ddd;
          border-bottom: none;
          border-left: none;
          border-right: none;
          margin-top: 32px;
          margin-bottom: 32px;
        }
        .markdown-body code {
          font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
          word-break: break-word;
          border-radius: 2px;
          overflow-x: auto;
          background-color: #fff5f5;
          color: #ff502c;
          font-size: 0.87em;
          padding: 0.065em 0.4em;
        }
        .markdown-body pre {
          font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
          overflow: auto;
          position: relative;
          line-height: 1.75;
        }
        .markdown-body pre > code {
          font-size: 12px;
          padding: 15px 12px;
          margin: 0;
          word-break: normal;
          display: block;
          overflow-x: auto;
          color: #333;
          background: #f8f8f8;
        }
        .markdown-body a {
          text-decoration: none;
          color: #0269c8;
          border-bottom: 1px solid #d1e9ff;
        }
        .markdown-body a:hover,
        .markdown-body a:active {
          color: #275b8c;
        }
        .markdown-body table {
          display: inline-block !important;
          font-size: 12px;
          width: auto;
          max-width: 100%;
          overflow: auto;
          border: solid 1px #f6f6f6;
        }
        .markdown-body thead {
          background: #f6f6f6;
          color: #000;
          text-align: left;
        }
        .markdown-body tr:nth-child(2n) {
          background-color: #fcfcfc;
        }
        .markdown-body th,
        .markdown-body td {
          padding: 12px 7px;
          line-height: 24px;
        }
        .markdown-body td {
          min-width: 120px;
        }
        .markdown-body blockquote {
          color: #666;
          padding: 1px 23px;
          margin: 22px 0;
          border-left: 4px solid #cbcbcb;
          background-color: #f8f8f8;
        }
        .markdown-body blockquote::after {
          display: block;
          content: "";
        }
        .markdown-body blockquote > p {
          margin: 10px 0;
        }
        .markdown-body ol,
        .markdown-body ul {
          padding-left: 28px;
        }
        .markdown-body ol li,
        .markdown-body ul li {
          margin-bottom: 0;
          list-style: inherit;
        }
        .markdown-body ol li .task-list-item,
        .markdown-body ul li .task-list-item {
          list-style: none;
        }
        .markdown-body ol li .task-list-item ul,
        .markdown-body ul li .task-list-item ul,
        .markdown-body ol li .task-list-item ol,
        .markdown-body ul li .task-list-item ol {
          margin-top: 0;
        }
        .markdown-body ol ul,
        .markdown-body ul ul,
        .markdown-body ol ol,
        .markdown-body ul ol {
          margin-top: 3px;
        }
        .markdown-body ol li {
          padding-left: 6px;
        }
        .markdown-body .contains-task-list {
          padding-left: 0;
        }
        .markdown-body .task-list-item {
          list-style: none;
        }
        @media (max-width: 720px) {
          .markdown-body h1 {
            font-size: 24px;
          }
          .markdown-body h2 {
            font-size: 20px;
          }
          .markdown-body h3 {
            font-size: 18px;
          }
        }
      `}
    </style>
  );
}