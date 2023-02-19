import React, { ReactNode, useEffect, useRef, useState } from "react";
import { memo } from "react";
import styles from "./style.module.less";
import { Button } from "antd";
interface IProps {
  children?: ReactNode;
}

const useBrowserTheme = () => {
  const [theme, setTheme] = useState("light");
  const media = useRef<MediaQueryList>();
  if (typeof window !== "undefined") {
    media.current = window.matchMedia("(prefers-color-scheme: dark)");
  }

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDark? "dark": "light");
  });

  useEffect(() => {
    media.current && media.current.addEventListener(
      "change",
      (e) => {
        if (e.matches) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      });
  }, []);
  return [theme];
};

const DarkBtn: React.FC<IProps> = () => {
  const [isDark, setIsDark] = useState(false);
  const [flag, setFlag] = useState(false);
  const [browserTheme] = useBrowserTheme();

  const handleClick = () => {
    if (!isDark) localStorage.setItem("myDark", "1");
    else localStorage.setItem("myDark", "0");
    setIsDark(!isDark);
  };
  useEffect(() => {
    if (typeof window !== "undefined" && document) {
      if (localStorage.getItem("myDark") == null) {
        document.body.className = browserTheme;
        setFlag(false);
      } else if (localStorage.getItem("myDark") == "1") {
        document.body.className = "dark";
        setFlag(true);
      } else {
        document.body.className = "light";
        setFlag(false);
      }
    } else {
      document.body.className = "light";
    }
  }, [isDark, browserTheme]);
  return (
    <div className={styles.darkContent} onClick={handleClick}>
      {!isDark && !flag ? (
        <Button className={styles.darkBtn}>黑暗模式</Button>
      ) : (
        <Button className={styles.lightBtn}>白天模式</Button>
      )}
    </div>
  );
};
export default memo(DarkBtn);
DarkBtn.displayName = "DarkBtn";
