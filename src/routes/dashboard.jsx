import { lazy } from "react";
import { Outlet } from "react-router-dom"; // CUSTOM COMPONENTS

import Loadable from "./Loadable";
import { AuthGuard } from "@/components/auth";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout"; // ALL DASHBOARD PAGES

const CRM = Loadable(lazy(() => import("@/pages/dashboard/crm")));
const Finance = Loadable(lazy(() => import("@/pages/dashboard/finance")));
const Analytics = Loadable(lazy(() => import("@/pages/dashboard/analytics")));
const FinanceV2 = Loadable(lazy(() => import("@/pages/dashboard/finance-2")));
const Ecommerce = Loadable(lazy(() => import("@/pages/dashboard/ecommerce")));
const Logistics = Loadable(lazy(() => import("@/pages/dashboard/logistics")));
const Marketing = Loadable(lazy(() => import("@/pages/dashboard/marketing")));
const AnalyticsV2 = Loadable(lazy(() => import("@/pages/dashboard/analytics-2"))); // USER LIST PAGES

const AddNewUser = Loadable(lazy(() => import("@/pages/dashboard/users/add-new-user")));
const UserListView = Loadable(lazy(() => import("@/pages/dashboard/users/user-list-1")));
const UserGridView = Loadable(lazy(() => import("@/pages/dashboard/users/user-grid-1")));
const UserListView2 = Loadable(lazy(() => import("@/pages/dashboard/users/user-list-2")));
const UserGridView2 = Loadable(lazy(() => import("@/pages/dashboard/users/user-grid-2"))); // USER ACCOUNT PAGE

const Account = Loadable(lazy(() => import("@/pages/dashboard/accounts"))); // ALL INVOICE RELATED PAGES

const InvoiceList = Loadable(lazy(() => import("@/pages/dashboard/invoice/list")));
const InvoiceCreate = Loadable(lazy(() => import("@/pages/dashboard/invoice/create")));
const InvoiceDetails = Loadable(lazy(() => import("@/pages/dashboard/invoice/details"))); // PRODUCT RELATED PAGES

const ProductList = Loadable(lazy(() => import("@/pages/dashboard/products/list")));
const ProductGrid = Loadable(lazy(() => import("@/pages/dashboard/products/grid")));
const ProductCreate = Loadable(lazy(() => import("@/pages/dashboard/products/create")));
const ProductDetails = Loadable(lazy(() => import("@/pages/dashboard/products/details"))); // E-COMMERCE RELATED PAGES

const Cart = Loadable(lazy(() => import("@/pages/dashboard/ecommerce/cart")));
const Payment = Loadable(lazy(() => import("@/pages/dashboard/ecommerce/payment")));
const BillingAddress = Loadable(lazy(() => import("@/pages/dashboard/ecommerce/billing-address")));
const PaymentComplete = Loadable(lazy(() => import("@/pages/dashboard/ecommerce/payment-complete"))); // USER PROFILE PAGE

const Profile = Loadable(lazy(() => import("@/pages/dashboard/profile"))); // REACT DATA TABLE PAGE

const DataTable1 = Loadable(lazy(() => import("@/pages/dashboard/data-tables/table-1"))); // OTHER BUSINESS RELATED PAGES

const Career = Loadable(lazy(() => import("@/pages/career/career-1")));
const CareerApply = Loadable(lazy(() => import("@/pages/career/apply")));
const About = Loadable(lazy(() => import("@/pages/about-us/about-us-2")));
const FileManager = Loadable(lazy(() => import("@/pages/dashboard/file-manager"))); // SUPPORT RELATED PAGES

const Support = Loadable(lazy(() => import("@/pages/dashboard/support/support")));
const CreateTicket = Loadable(lazy(() => import("@/pages/dashboard/support/create-ticket"))); // CHAT PAGE

const Chat = Loadable(lazy(() => import("@/pages/dashboard/chat"))); // USER TODO LIST PAGE

const TodoList = Loadable(lazy(() => import("@/pages/dashboard/todo-list"))); // MAIL RELATED PAGES

const Sent = Loadable(lazy(() => import("@/pages/dashboard/email/sent")));
const AllMail = Loadable(lazy(() => import("@/pages/dashboard/email/all")));
const Inbox = Loadable(lazy(() => import("@/pages/dashboard/email/inbox")));
const Compose = Loadable(lazy(() => import("@/pages/dashboard/email/compose")));
const MailDetails = Loadable(lazy(() => import("@/pages/dashboard/email/details")));
export const DashboardRoutes = [{
  path: "dashboard",
  element: <AuthGuard>
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      </AuthGuard>,
  children: [{
    index: true,
    element: <Analytics />
  }, {
    path: "crm",
    element: <CRM />
  }, {
    path: "finance",
    element: <Finance />
  }, {
    path: "finance-2",
    element: <FinanceV2 />
  }, {
    path: "ecommerce",
    element: <Ecommerce />
  }, {
    path: "logistics",
    element: <Logistics />
  }, {
    path: "marketing",
    element: <Marketing />
  }, {
    path: "analytics-2",
    element: <AnalyticsV2 />
  }, {
    path: "add-user",
    element: <AddNewUser />
  }, {
    path: "user-list",
    element: <UserListView />
  }, {
    path: "user-grid",
    element: <UserGridView />
  }, {
    path: "user-list-2",
    element: <UserListView2 />
  }, {
    path: "user-grid-2",
    element: <UserGridView2 />
  }, {
    path: "account",
    element: <Account />
  }, {
    path: "invoice-list",
    element: <InvoiceList />
  }, {
    path: "create-invoice",
    element: <InvoiceCreate />
  }, {
    path: "invoice-details",
    element: <InvoiceDetails />
  }, {
    path: "product-list",
    element: <ProductList />
  }, {
    path: "product-grid",
    element: <ProductGrid />
  }, {
    path: "create-product",
    element: <ProductCreate />
  }, {
    path: "product-details",
    element: <ProductDetails />
  }, {
    path: "cart",
    element: <Cart />
  }, {
    path: "payment",
    element: <Payment />
  }, {
    path: "billing-address",
    element: <BillingAddress />
  }, {
    path: "payment-complete",
    element: <PaymentComplete />
  }, {
    path: "profile",
    element: <Profile />
  }, {
    path: "data-table-1",
    element: <DataTable1 />
  }, {
    path: "about",
    element: <About />
  }, {
    path: "career",
    element: <Career />
  }, {
    path: "career-apply",
    element: <CareerApply />
  }, {
    path: "file-manager",
    element: <FileManager />
  }, {
    path: "support",
    element: <Support />
  }, {
    path: "create-ticket",
    element: <CreateTicket />
  }, {
    path: "chat",
    element: <Chat />
  }, {
    path: "todo-list",
    element: <TodoList />
  }, {
    path: "mail",
    children: [{
      path: "all",
      element: <AllMail />
    }, {
      path: "inbox",
      element: <Inbox />
    }, {
      path: "sent",
      element: <Sent />
    }, {
      path: "compose",
      element: <Compose />
    }, {
      path: "details",
      element: <MailDetails />
    }]
  }]
}];