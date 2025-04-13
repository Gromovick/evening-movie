import React, { useMemo, useState } from "react";
import s from "./Tabs.module.scss";
const Tabs = ({
  tabs,
  activeKey: externalKey,
  defaultKey,
  onChange,
  className = "",
}) => {
  const isControlled = externalKey !== undefined;
  const [internalKey, setInternalKey] = useState(
    defaultKey || Object.keys(tabs)[0]
  );

  const currentKey = isControlled ? externalKey : internalKey;

  const changeKey = (key) => {
    if (!isControlled) setInternalKey(key);
    if (onChange) onChange(key);
  };
  return (
    <div className={`${s.tabs} ${className}`}>
      <div className={s.tab}>{tabs[currentKey]}</div>
    </div>
  );
};

export default Tabs;
