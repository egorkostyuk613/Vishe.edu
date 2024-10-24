import { RouteProps } from "react-router-dom";

import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { TeacherPage } from "pages/TeachersPage";
import { TariffsPage } from "pages/TariffsPage";
import { NewsPage } from "pages/NewsPage";
import {LoginPage} from "pages/LoginPage";
import {RegisterPage} from "pages/RegisterPage";
import {AccountPage} from "pages/AccountPage";
import {PrivatRoute} from "../../ui/PrivatRoute/PrivatRoute";
import {AccountSchedule} from "../../../widgets/Account/ui/AccountStudent/AccountSchedule";
import {AccountHomeWork} from "../../../widgets/Account/ui/AccountStudent/AccountHomeWork";
import {HomeWork} from "../../../widgets/Account/ui/AccountStudent/AccountHomeWork/HomeWork/HomeWork";
import { SendHomeWork } from "../../../widgets/Account/ui/AccountStudent/AccountHomeWork/HomeWork/SendHomeWork";
import {AccountCourses} from "../../../widgets/Account/ui/AccountStudent/AccountCourses";
import {AccountMaterial} from "../../../widgets/Account/ui/AccountStudent/AccountMaterial";
import {AccountSettings} from "../../../widgets/Account/ui/AccountStudent/AccountSettings";

export enum AppRoutes {
  main = "main",
  about = "about",
  teacher = 'teacher',
  tariffs = 'tariffs',
  news = 'news',
  login = 'login',
  register = 'register',
  account = 'account',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.main]: "/",
  [AppRoutes.about]: "/about",
  [AppRoutes.teacher]: "/teacher",
  [AppRoutes.tariffs]: "/tariffs",
  [AppRoutes.news]: "/news",
  [AppRoutes.login]: "/login",
  [AppRoutes.register]: '/register',
  [AppRoutes.account]: '/account/*',
};

export const routeConfig = {
  [AppRoutes.main]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.about]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoutes.teacher]: {
    path: RoutePath.teacher,
    element: <TeacherPage />
  },
  [AppRoutes.tariffs]: {
    path: RoutePath.tariffs,
    element: <TariffsPage />
  },
  [AppRoutes.news]: {
    path: RoutePath.news,
    element: <NewsPage />
  },
  [AppRoutes.login]: {
    path: RoutePath.login,
    element: <LoginPage />
  },
  [AppRoutes.register]: {
    path: RoutePath.register,
    element: <RegisterPage />
  },
  [AppRoutes.account]: {
    path: RoutePath.account,
    element: <PrivatRoute><AccountPage /></PrivatRoute>,
    children: [
      {
        path: "schedule",
        element: <AccountSchedule />,
      },
      {
        path: "homeWork",
        element: <AccountHomeWork />,
      },
      {
        path: "courses",
        element: <AccountCourses />,
      },
      {
        path: "materials",
        element: <AccountMaterial />,
      },
      {
        path: "settings",
        element: <AccountSettings />,
      },
      {
        path: "homeWork/:id",
        element: <HomeWork />,
      },
      {
        path: "homeWork/:id/:slug",
        element: <SendHomeWork />,
      },
    ],
  },
};
