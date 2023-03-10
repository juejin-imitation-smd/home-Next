import React, { ReactNode, useEffect, useRef, useState } from "react";
import { memo } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Head from "next/head";
import wrapper from "@/store";

import type { IAppDispatch, IAppState } from "@/store";
import { useSelector, useDispatch } from "react-redux";

import Link from "next/link";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Skeleton } from "antd";

import styles from "./recommended.module.less";

import { throttle } from "lodash-es";
import { getScollTop } from "@/utils/getScrollTop";
import Subheader from "@/components/subheader";
import SubShow from "@/components/subshow";
import Advertise from "@/components/advertise";
import { getAdvertiseData } from "@/components/advertise/service";
import { getArticlesAction } from "@/components/articleListBox/store/articleList";
import { getHeaderTags, getOriginHeader } from "@/components/header/service";
import ArticleListBox from "@/components/articleListBox";
import AuthorListBox from "@/components/authorListBox";
import {
  changeActiveTypeAction,
  changeLoadingAction,
  changeLabelAction,
  changeSubtabAction,
} from "@/components/articleListBox/store/articleList";
import { getAuthorsAction } from "@/components/authorListBox/store/authorList";
import AdvertiseV2 from "@/components/advertise-v2";
import { IItem } from "..";

interface IProps {
  children?: ReactNode;
  homeTags?: any[];
  advertiseData?: any[];
}

const SubContent: React.FC<IProps> = (props) => {
  const router = useRouter();
  const authorRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<IAppDispatch>();
  const { label = "", names } = router.query;
  const { homeTags, advertiseData } = props;
  const [sticky, setSticky] = useState(false);
  const labelTags = homeTags && homeTags.map((item: any) => item.url);
  let currentIndex = (labelTags && labelTags.indexOf(label)) || 0;
  if (label === "") currentIndex = 0;
  let baseUrl = router.asPath;
  let scrollTop = 0;
  if (router.asPath.indexOf("?") !== -1) {
    baseUrl = baseUrl.slice(0, router.asPath.indexOf("?"));
  }
  const urlArr = homeTags && homeTags.map((item: IItem) => item.url);
  const nameArr: any = homeTags && homeTags.map((item: IItem) => item.name);
  const idx: any = nameArr && urlArr?.indexOf(label as string);
  let title = "?????? - ?????? - ??????";
  if (idx !== -1) title = nameArr[idx] + " - ??????";
  if (label == "") title = "????????????";
  const { sort } = router.query;
  // ????????????
  const items: MenuProps["items"] = [
    {
      label: <Link href={baseUrl + "?sort=three_days_hottest"}>3??????</Link>,
      key: "0",
    },
    {
      label: <Link href={baseUrl + "?sort=weekly_hottest"}>7??????</Link>,
      key: "1",
    },
    {
      label: <Link href={baseUrl + "?sort=monthly_hottest"}>30??????</Link>,
      key: "2",
    },
    {
      label: <Link href={baseUrl + "?sort=hottest"}>??????</Link>,
      key: "3",
    },
  ];
  // ?????? from store
  const { activeType, isLoading } = useSelector((state: IAppState) => ({
    activeType: state.articleList.activeType,
    isLoading: state.articleList.isLoading,
  }));
  // ?????????
  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  function handleRouteChange() {
    console.log("????????????");
    dispatch(changeLoadingAction(true));
  }

  function isSortBy(): string {
    switch (sort) {
    case "three_days_hottest":
      return "3??????";
    case "weekly_hottest":
      return "7??????";
    case "monthly_hottest":
      return "30??????";
    case "hottest":
      return "??????";
    default:
      return "";
    }
  }

  const handleScroll = () => {
    scrollTop = getScollTop();
    let myHeight: number;
    if (authorRef.current) {
      myHeight = authorRef.current.offsetTop + authorRef.current.offsetHeight;
      if (scrollTop > myHeight) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
  };

  const bindHandleScroll = React.useRef(throttle(handleScroll, 100)).current;
  useEffect(() => {
    window.addEventListener("scroll", bindHandleScroll);
    return () => {
      window.removeEventListener("scroll", bindHandleScroll);
    };
  }, [bindHandleScroll]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          data-n-head="ssr"
          name="description"
          content="???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
        />
        <meta
          data-n-head="ssr"
          name="keywords"
          content="??????,??????,Vue.js,???????????????,Kotlin,ReactNative,Python"
        />
      </Head>
      {/* ???????????? */}
      {names && <Subheader homeTags={homeTags} />}

      <div className={styles.recommendedBox}>
        {/* MainContent:{label} */}

        <div className={styles.mainContent}>
          <div className={styles.topNav}>
            {currentIndex >= 0 &&
              homeTags &&
              label &&
              homeTags[currentIndex] &&
              homeTags[currentIndex]?.labels.length > 0 &&
              (
                <SubShow
                  currentsubTags={homeTags[currentIndex].labels}
                  homeTags={homeTags}
                />
              )}
          </div>

          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.artListHead}>
                <Link href={baseUrl}>
                  <span
                    className={
                      activeType === "recommend" ? styles.activeType : ""
                    }
                  >
                    ??????
                  </span>
                </Link>
                <Link href={baseUrl + "?sort=newest"}>
                  <span
                    className={activeType === "newest" ? styles.activeType : ""}
                  >
                    ??????
                  </span>
                </Link>
                <Link href={baseUrl + "?sort=three_days_hottest"}>
                  <span
                    className={
                      activeType.includes("hottest") ? styles.activeType : ""
                    }
                  >
                    ??????
                  </span>
                </Link>
                {activeType.includes("hottest") && (
                  <Dropdown menu={{ items }}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        {isSortBy()}
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                )}
              </div>

              {isLoading ? (
                <Skeleton active className="skeleton" />
              ) : (
                <ArticleListBox advertises={advertiseData} />
              )}
            </div>

            <div className={styles.right}>
              <div className={styles.advertise}>
                <Advertise advertiseData={advertiseData} />
              </div>
              <div className={styles.advertise}>
                <AdvertiseV2 advertiseData={advertiseData} sticky={sticky} />
              </div>
              <div className={styles.author} ref={authorRef}>
                <AuthorListBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(SubContent);
SubContent.displayName = "SubContent";

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(function (store) {
    const { authors } = store.getState().authorList;
    return async (context) => {
      const query = context.query;
      const res = await getOriginHeader();
      const subheader = await getHeaderTags();
      const advertiseData = await getAdvertiseData();
      if (
        query.label &&
        query.label !== "/" &&
        query.label !== "/favicon.ico"
      ) {
        store.dispatch(
          changeActiveTypeAction(query.sort ? query.sort : "recommend")
        );
        store.dispatch(changeLabelAction(query.label));
        query.names && store.dispatch(changeSubtabAction(query.names));
        const { activeType, curPage, curSize, label, subtab } =
          store.getState().articleList;
        await store.dispatch(
          getArticlesAction({
            page: curPage,
            size: curSize,
            label: label,
            type: activeType,
            subtab: subtab,
          })
        );
      }
      if (authors?.length === 0) {
        await store.dispatch(getAuthorsAction());
      }
      return {
        props: {
          originHeader: res || [],
          homeTags: subheader.data || [],
          advertiseData: advertiseData.data || [],
        },
      };
    };
  });
