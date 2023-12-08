import {ReactNode} from "react";

interface CategoryButtonProps {
  children: ReactNode;
  rest?: unknown[];
}

function CategoryButton({children, rest}: CategoryButtonProps) {
  return (
    <>
      <button
        type="button"
        className="border p-4 bg-slate-300 rounded-lg"
        {...rest}>
        {children}
      </button>
    </>
  );
}

export default CategoryButton;
