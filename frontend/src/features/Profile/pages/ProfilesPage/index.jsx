import React from "react";
import { useParams } from "react-router";
import SearchProfiles from "../../components/SearchProfile";
import TableProfile from "../../components/TableProfile";
import { Typography, Divider } from "antd";
import "./profilesPage.scss";

function ProfilesPage(props) {
  const { Title } = Typography;

  const { id } = useParams();

  return (
    <div className="profiles-container">
      <Title>Campaign name</Title>
      <SearchProfiles />
      <TableProfile />
    </div>
  );
}

export default ProfilesPage;
