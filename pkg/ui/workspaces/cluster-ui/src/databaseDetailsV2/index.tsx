// Copyright 2024 The Cockroach Authors.
//
// Use of this software is governed by the Business Source License
// included in the file licenses/BSL.txt.
//
// As of the Change Date specified in that file, in accordance with
// the Business Source License, use of this software will be governed
// by the Apache License, Version 2.0, included in the file
// licenses/APL.txt.

import { Tabs } from "antd";
import React, { useState } from "react";

import { commonStyles } from "src/common";
import { PageLayout } from "src/layouts";
import { PageHeader } from "src/sharedFromCloud/pageHeader";

import { TablesPageV2 } from "./tablesView";

enum TabKeys {
  TABLES = "tables",
  GRANTS = "grants",
}
export const DatabaseDetailsPageV2 = () => {
  const [currentTab, setCurrentTab] = useState(TabKeys.TABLES);

  // TODO (xinhaoz) #131119 - Populate db name here.
  const tabItems = [
    {
      key: TabKeys.TABLES,
      label: "Tables",
      children: <TablesPageV2 />,
    },
    {
      key: TabKeys.GRANTS,
      label: "Grants",
      children: <div />,
    },
  ];

  return (
    <PageLayout>
      <PageHeader title="myDB" />
      <Tabs
        defaultActiveKey={TabKeys.TABLES}
        className={commonStyles("cockroach--tabs")}
        onChange={setCurrentTab}
        activeKey={currentTab}
        destroyInactiveTabPane
        items={tabItems}
      />
    </PageLayout>
  );
};
