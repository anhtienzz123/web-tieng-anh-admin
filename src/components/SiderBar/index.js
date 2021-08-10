import {
  AppstoreAddOutlined,
  CarryOutOutlined,
  DashboardOutlined,
  ReadOutlined,
  UnorderedListOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
SiderBar.propTypes = {};

const { Sider } = Layout;
const { SubMenu } = Menu;

const ADMIN_URL = "/admin";

const renderBlogMenu = () => {
  return (
    <SubMenu key="blog" icon={<ReadOutlined />} title="Quản lý bài viết">
      <Menu.Item key="blog1" icon={<UnorderedListOutlined />}>
        <Link to={`${ADMIN_URL}/blogs`}>Bài viết</Link>
      </Menu.Item>

      <Menu.Item key="blog2" icon={<UnorderedListOutlined />}>
        <Link to={`${ADMIN_URL}/blogs/categories`}>Danh mục</Link>
      </Menu.Item>
    </SubMenu>
  );
};


const renderVideoMenu = () => {
  return (
    <SubMenu key="video" icon={<VideoCameraOutlined />} title="Quản lý Video">
      <Menu.Item key="video-1" icon={<UnorderedListOutlined />}>
        <Link to={`${ADMIN_URL}/videos`}>Video</Link>
      </Menu.Item>

      <Menu.Item key="video-2" icon={<UnorderedListOutlined />}>
        <Link to={`${ADMIN_URL}/videos/categories`}>Danh mục</Link>
      </Menu.Item>
    </SubMenu>
  );
};

function SiderBar(props) {
  const { name, roles } = useSelector((state) => state.global);
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const renderMenu = () => {
    const menus = [
      <Menu.Item key="1" icon={<DashboardOutlined />}>
        <Link to={ADMIN_URL}>Trang chủ</Link>
      </Menu.Item>,
    ];

    roles.forEach((roleEle) => {
      if (roleEle === "ROLE_BLOG") menus.push(renderBlogMenu());
      if (roleEle === "ROLE_EXAM")
        menus.push(
          <Menu.Item key="3" icon={<CarryOutOutlined />}>
            <Link to={`${ADMIN_URL}/exams`}>Quản lý bài thi</Link>
          </Menu.Item>
        );
      if (roleEle === "ROLE_VIDEO")
        menus.push(
          renderVideoMenu()
        );
    });

    return menus;
  };

  const checkAdminRole = () => {
    const index = roles.findIndex((roleEle) => roleEle === "ROLE_ADMIN");

    return index !== -1;
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo">{name}</div>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        {checkAdminRole() ? (
          <>
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link to={ADMIN_URL}>Trang chủ</Link>
            </Menu.Item>
            {renderBlogMenu()}

            <Menu.Item key="6" icon={<CarryOutOutlined />}>
              <Link to={`${ADMIN_URL}/books`}>Quản lý bộ đề</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<CarryOutOutlined />}>
              <Link to={`${ADMIN_URL}/exams`}>Quản lý bài thi</Link>
            </Menu.Item>
            {renderVideoMenu()}
            <Menu.Item key="5" icon={<UserOutlined />}>
              <Link to={`${ADMIN_URL}/users`}>Quản lý người dùng</Link>
            </Menu.Item>{" "}
          </>
        ) : (
          renderMenu()
        )}
      </Menu>
    </Sider>
  );
}

export default SiderBar;
