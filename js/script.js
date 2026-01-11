window.NewTab = function (content, title) {
  const tab = new Tab();
  tabs.push(tab);

  const tabBar = document.getElementById("tab-bar");
  const newTabBtn = document.getElementById("new-tab-btn");

  tabBar.insertBefore(tab.element, newTabBtn);

  if (title) {
    tab.name = title;
    tab.element.querySelector(".tab-name").textContent = title;
  }

  if (content) {
    tab.content = content;
  } else {
    tab.content = "-- File content not detected.";
  }

  activateTab(tab);
};

window.SwitchToTab = function (tabId) {
  const tab = tabs.find((t) => t.id === tabId);
  if (tab) {
    activateTab(tab);
    return true;
  }
  return false;
};

window.GetTabIds = function () {
  return tabs.map((tab) => tab.id);
};

window.GetCurrentTabName = function () {
  if (!activeTab) return null;
  return activeTab.name;
};