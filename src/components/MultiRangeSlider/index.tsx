'use client';

import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

import type { SliderProps } from 'rc-slider';
import RcSlider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import React, { FC, memo } from 'react';

import styles from './MultiRangeSlider.module.scss';

export interface MultiRangeSliderOnChangeValue {
  min: number;
  max: number;
}

interface MultiRangeSliderProps extends MultiRangeSliderOnChangeValue {
  value: MultiRangeSliderOnChangeValue;
  onChange: (value: MultiRangeSliderOnChangeValue) => void;
}

interface HandleTooltipProps {
  value: number;
  children: React.ReactElement;
  visible: boolean;
}

const HandleTooltip: FC<HandleTooltipProps> = ({ value, visible, children }) => {
  const tooltipRef = React.useRef<any>();

  React.useEffect(() => {
    if (visible) {
      tooltipRef.current?.forceAlign();
    }
  }, [value, visible]);

  return (
    <Tooltip
      placement="top"
      overlay={value}
      overlayInnerStyle={{ minHeight: 'auto' }}
      ref={tooltipRef}
      visible={visible}
      showArrow={false}
      overlayClassName={styles.tooltip}
    >
      {children}
    </Tooltip>
  );
};

export const handleRender: SliderProps['handleRender'] = (node, props) => {
  return (
    <HandleTooltip value={props.value} visible={props.dragging}>
      {node}
    </HandleTooltip>
  );
};

export const MultiRangeSlider: FC<MultiRangeSliderProps> = memo(({ min, max, value, onChange }) => {
  const handleChange = (newRange: number | number[]) => {
    if (Array.isArray(newRange) && newRange?.[0] && newRange?.[1]) {
      onChange({ min: newRange[0], max: newRange[1] });
    }
  };

  return (
    <div className={styles.wrapper}>
      <RcSlider
        range
        min={min}
        max={max}
        defaultValue={[min, max]}
        value={[value.min, value.max]}
        allowCross={false}
        onChange={handleChange}
        className={styles.slider}
        handleRender={handleRender}
      />

      <div className={styles.minMaxBlock}>
        <span className={styles.minMaxValue}>{min}</span>
        <span className={styles.minMaxValue}>{max}</span>
      </div>
    </div>
  );
});

MultiRangeSlider.displayName = 'MultiRangeSlider';
