import React from "react";
export default function Theme() {
  return (
    <style jsx global>
      {`
        @charset "UTF-8";
        .markdown-body {
          font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
          word-break: break-word;
          font-size: 16px;
          overflow-x: hidden;
        }

        .markdown-body p,
        .markdown-body li {
          font-size: 0.9em;
          letter-spacing: 2px;
          color: #333;
        }

        .markdown-body p code,
        .markdown-body li code {
          font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
          font-weight: 500;
          background: rgba(119, 175, 156, 0.22);
          border-radius: 0;
          padding: 2px 5px;
          border-left: 2px solid #77af9c;
          color: #6e7783;
        }

        .markdown-body h1 {
          display: table;
          line-height: 1.5;
          margin-top: 35px;
          margin-bottom: 10px;
          padding-bottom: 5px;
        }

        .markdown-body h2 {
          display: table;
          line-height: 1.5;
          margin-top: 35px;
          margin-bottom: 10px;
          padding-bottom: 5px;
        }

        .markdown-body h3 {
          display: table;
          line-height: 1.5;
          margin-top: 35px;
          margin-bottom: 10px;
          padding-bottom: 5px;
        }

        .markdown-body h4 {
          display: table;
          line-height: 1.5;
          margin-top: 35px;
          margin-bottom: 10px;
          padding-bottom: 5px;
        }

        .markdown-body h5 {
          display: table;
          line-height: 1.5;
          margin-top: 35px;
          margin-bottom: 10px;
          padding-bottom: 5px;
        }

        .markdown-body h6 {
          display: table;
          line-height: 1.5;
          margin-top: 35px;
          margin-bottom: 10px;
          padding-bottom: 5px;
        }

        .markdown-body h3,
        .markdown-body h2,
        .markdown-body h1 {
          background: rgba(119, 175, 156, 0.22);
          color: #6e7783;
          padding: 5px 10px;
          border: 1px solid rgba(119, 175, 156, 0.22);
          transition: all 0.5s;
        }

        .markdown-body h3:hover,
        .markdown-body h2:hover,
        .markdown-body h1:hover {
          border: 1px solid #77af9c;
        }

        .markdown-body h1 {
          font-size: 1.6em;
        }

        .markdown-body h2 {
          font-size: 1.4em;
        }

        .markdown-body h3 {
          font-size: 1.1em;
        }

        .markdown-body h4,
        .markdown-body h5,
        .markdown-body h6 {
          text-align: center;
        }

        .markdown-body h4::after,
        .markdown-body h5::after,
        .markdown-body h6::after {
          content: "/";
          color: #77af9c;
          font-weight: 400;
          margin-left: 15px;
        }

        .markdown-body h4::before,
        .markdown-body h5::before,
        .markdown-body h6::before {
          content: "/";
          color: #77af9c;
          font-weight: 400;
          margin-right: 15px;
        }

        .markdown-body h4,
        .markdown-body h5,
        .markdown-body h6 {
          display: block;
          color: #77af9c;
          font-size: 400;
          font-weight: 400;
        }

        .markdown-body hr {
          border: none;
          margin-top: 20px;
          margin-bottom: 20px;
          border-top: 2px solid #77af9c;
        }

        .markdown-body blockquote {
          position: relative;
          line-height: 1.8;
          font-style: 400;
          text-indent: 0;
          margin: 0;
          padding: 10px;
          border-width: 1px;
          border-style: solid;
          border-color: #fff;
          color: #888;
          background: rgba(119, 175, 156, 0.22);
          transition: border 0.5s;
        }

        .markdown-body blockquote:hover {
          border-style: solid;
          border-color: #77af9c;
        }

        .markdown-body blockquote::before {
          content: "“";
          display: inline;
          color: #6e7783;
          font-size: 4em;
          font-family: Arial, serif;
          line-height: 1em;
        }

        .markdown-body blockquote::after {
          position: absolute;
          content: "Tips";
          display: inline;
          bottom: 5px;
          right: 15px;
          color: #6e7783;
          font-size: 0.9em;
        }

        .markdown-body blockquote p {
          display: inline;
        }

        .markdown-body table {
          border-collapse: collapse;
          width: auto;
          min-width: 50%;
          font-size: 0.8em;
        }

        .markdown-body table tr th {
          text-align: center;
          border: 1px solid #77af9c;
          background: rgba(119, 175, 156, 0.22);
          font-weight: 500;
          padding: 5px;
        }

        .markdown-body table tr td {
          text-align: center;
          border: 1px solid rgba(119, 175, 156, 0.22);
          padding: 5px;
        }

        .markdown-body pre {
          font-family: Arial, serif;
          overflow: auto;
          position: relative;
          line-height: 1.75;
        }

        .markdown-body pre > code {
          font-family: Arial, serif;
          border-left: 2px solid #77af9c;
          display: block;
          padding: 16px 12px;
          margin: 0;
          font-size: 0.9em;
          color: #6e7783;
          word-break: normal;
          overflow-x: auto;
          background: #f8f8f8;
        }

        .markdown-body a {
          color: #77af9c;
          font-weight: 400;
          background: #fff;
          border-bottom: none;
          padding: 2px 5px;
          text-decoration: none;
          transition: all 0.5s;
        }

        .markdown-body a:hover {
          background: rgba(119, 175, 156, 0.22);
          color: #6e7783;
        }

        .markdown-body strong {
          font-weight: bold;
          color: #6e7783;
        }
      `}
    </style>
  );
}
