import React from 'react';
import classNames from 'classnames';
import Column, { FooterColumn } from './column';

export interface FooterProps {
  prefixCls?: string;
  bottom?: React.ReactNode;
  columns?: FooterColumn[];
  theme?: 'dark' | 'light';
  className?: string;
  style?: React.CSSProperties;
  backgroundColor?: string;
  columnLayout?: 'space-around' | 'space-between';
}

const Footer: React.FC<FooterProps> = ({
  prefixCls = 'rc-footer',
  className,
  style,
  bottom,
  columns,
  backgroundColor,
  columnLayout,
  theme = 'dark',
  ...restProps
}) => {
  const footerClassName = classNames(`${prefixCls}`, className, {
    [`${prefixCls}-${theme}`]: !!theme,
  });
  return (
    <footer
      {...restProps}
      className={footerClassName}
      style={{
        ...style,
        backgroundColor,
      }}
    >
      <section className={`${prefixCls}-container`}>
        {columns && columns.length > 0 && (
          <section
            className={`${prefixCls}-columns`}
            style={{
              justifyContent: columnLayout,
            }}
          >
            {columns.map(
              (
                {
                  title,
                  icon,
                  style: columnStyle,
                  className: columnClassName,
                  items = [],
                },
                i,
              ) => (
                <Column
                  key={i}
                  prefixCls={prefixCls}
                  title={title}
                  icon={icon}
                  items={items}
                  style={columnStyle}
                  className={columnClassName}
                />
              ),
            )}
          </section>
        )}
      </section>
      {bottom && (
        <section className={`${prefixCls}-bottom`}>
          <div className={`${prefixCls}-bottom-container`}>{bottom}</div>
        </section>
      )}
    </footer>
  );
};

export default Footer;
