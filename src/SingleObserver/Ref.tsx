import * as React from "react";
import HTMLComment from "./HTMLComment";

export interface RefProps extends React.HTMLAttributes<HTMLDivElement> {}

function updateRef(
  node: Element | Text | null,
  ref: React.ForwardedRef<Element | Text | null>
) {
  if (typeof ref === "function") {
    ref(node);
  } else if (ref) {
    ref.current = node;
  }
}

const RefRender: React.ForwardRefRenderFunction<
  Element | null | Text,
  RefProps
> = (props, ref) => {
  const commentRef = React.useRef<Comment | null>(null);
  const commentEndRef = React.useRef<Comment | null>();
  const contentsRef = React.useRef<Text | Element | null>();

  // 根据注释节点获取目标内容节点
  const resolveContent = (ele: Comment | null) => {
    if (ele === null) {
      return null;
    }
    const current = ele.nextSibling!;
    if (current !== commentEndRef.current) {
      return current as Text | Element | null;
    }
    return null;
  };

  // 重新分配内容节点的 ref
  const assignRef = () => {
    contentsRef.current = resolveContent(commentRef.current!);
    updateRef(contentsRef.current, ref); // 当 DOM 变化时更新 ref
  };

  React.useLayoutEffect(() => {
    const parent = commentRef.current!.parentNode;
    if (!parent) return () => 0;

    // 创建 `MutationObserver`，监听 DOM 子节点变化
    const ob = new MutationObserver((mutations) => {
      if (parent) {
        mutations.forEach((m) => {
          m.removedNodes.forEach((node) => {
            if (node === contentsRef.current) {
              updateRef(null, ref); // 当 DOM 变化时更新 ref
              contentsRef.current = null;
            }
          });
          m.addedNodes.forEach(() => {
            assignRef();
          });
        });
      }
    });
    // 监听子节点的变动（但不监听属性变化）
    ob.observe(parent!, {
      childList: true,
      subtree: false,
      attributes: false,
    });

    return () => {
      ob.disconnect(); // 组件卸载时断开观察器
    };
  }, [ref]);
  return (
    <>
      <HTMLComment ref={commentRef} data="Ref" />
      {props.children}
      <HTMLComment
        ref={(ref) => {
          commentEndRef.current = ref;
          // 初次分配 ref 这时候commentRef 肯定已经有值了
          assignRef();
        }}
        data="Ref"
      />
    </>
  );
};

// 使用 `forwardRef` 将 RefRender 包装成带 ref 的组件
const Ref = React.forwardRef(RefRender);

Ref.displayName = "Ref"; // 设置组件的 displayName，方便调试
export default Ref; // 导出组件
