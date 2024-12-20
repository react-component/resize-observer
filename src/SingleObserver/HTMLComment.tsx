import React from "react";

export interface CommentProps {
  data?: string;
}

type ElementLike = {
  setAttribute: () => boolean;
  style: object;
};

const TagSymbol = `comment__`;

const canUseDom = () => {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
};

function intercept() {
  const createElement = document.createElement;

  const reset = () => {
    document.createElement = createElement;
  };

  //react 内部是用这个创建文本节点的 由于react本身不支持创建注释节点 这里hack一下
  document.createElement = function (
    tagName: string,
    options?: ElementCreationOptions
  ) {
    if (
      tagName === "noscript" &&
      options?.is &&
      options.is.startsWith(TagSymbol)
    ) {
      const regex = new RegExp(`^${TagSymbol}(.*)$`);
      const match = options?.is.match(regex);
      if (match) {
        const data = match[1].trim?.();
        const comment = document.createComment(data) as unknown as ElementLike;
        comment.setAttribute = () => true;
        comment.style = {};
        reset();
        return comment as unknown as HTMLElement;
      }
    }
    return createElement.call(this, tagName, options);
  };
}

function CommentRender(
  { data = "" }: CommentProps,
  ref: React.ForwardedRef<null | Comment>
) {
  const mounted = React.useRef(false);
  if (!mounted.current) {
    if (canUseDom()) {
      intercept();
    }
    mounted.current = true;
  }
  return (
    <noscript
      ref={ref as React.ForwardedRef<null | HTMLMetaElement>}
      is={`${TagSymbol}${data}`}
    />
  );
}

/**支持在react中生成注释节点*/
const HTMLComment = React.memo(
  React.forwardRef(CommentRender),
  (prevProps, next) => prevProps.data === next.data
);

HTMLComment.displayName = "Comment"; // 设置组件的 displayName，方便调试

export default HTMLComment;
