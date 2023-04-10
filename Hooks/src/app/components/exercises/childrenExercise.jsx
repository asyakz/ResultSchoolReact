import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
  const number = "";
    return (
      <CollapseWrapper title="Упражнение">
          <p className="mt-3">
              У вас есть компоненты Списка. Вам необходимо к каждому из них
              добавить порядковый номер, относительно того, как они
              располагаются на странице. Вы можете использовать как{" "}
              <code>React.Children.map</code> так и{" "}
              <code>React.Children.toArray</code>
          </p>
          <Component number={number}/>
          <Component number={number}/>
          <Component number={number}/>
      </CollapseWrapper>
    );
};

export const Component = ({ number }) => {
    return <div>{number} Компонент списка</div>;
};

Component.propTypes = {
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ChildrenExercise;
