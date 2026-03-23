import { toast } from "react-toastify";

const getStoreAppList = () => {
  const storedListStr = localStorage.getItem("app-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredAppList = (id) => {
  const storedList = getStoreAppList();
  if (storedList.includes(id)) {
    toast("data already Exits");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("app-list", storedListStr);
    toast("Data is added successfully.");
  }
};

const removeToStoredAppList = (id) => {
  const storedList = getStoreAppList();
  const remaining = storedList.filter(
    (product) => Number(product) !== Number(id),
  );
  localStorage.setItem("app-list", JSON.stringify(remaining));
  toast.success("Successfully Removed!");
};

export { addToStoredAppList, getStoreAppList, removeToStoredAppList };
