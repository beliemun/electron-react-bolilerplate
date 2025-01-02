import { TagProps } from "./tag";

export const tagStyles = ({ tagStyle, tagSize, tagColor }: TagProps) => {
  let styles = [];

  if (tagStyle === "solid") {
    if (tagColor === "primary") {
      styles.push("text-white bg-primary-500 dark:bg-primary-800");
    } else if (tagColor === "gray") {
      styles.push("text-white bg-gray-500 dark:bg-gray-800");
    } else if (tagColor === "slate") {
      styles.push("text-white bg-slate-500 dark:bg-slate-800");
    } else if (tagColor === "red") {
      styles.push("text-white bg-red-500 dark:bg-red-800");
    } else if (tagColor === "orange") {
      styles.push("text-white bg-orange-500 dark:bg-orange-800");
    } else if (tagColor === "yellow") {
      styles.push("text-white bg-yellow-500 dark:bg-yellow-800");
    } else if (tagColor === "lime") {
      styles.push("text-white bg-lime-500 dark:bg-lime-800");
    } else if (tagColor === "green") {
      styles.push("text-white bg-green-500 dark:bg-green-800");
    } else if (tagColor === "emerald") {
      styles.push("text-white bg-emerald-500 dark:bg-emerald-800");
    } else if (tagColor === "teal") {
      styles.push("text-white bg-teal-500 dark:bg-teal-800");
    } else if (tagColor === "cyan") {
      styles.push("text-white bg-cyan-500 dark:bg-cyan-800");
    } else if (tagColor === "blue") {
      styles.push("text-white bg-blue-500 dark:bg-blue-800");
    } else if (tagColor === "violet") {
      styles.push("text-white bg-violet-500 dark:bg-violet-800");
    } else if (tagColor === "purple") {
      styles.push("text-white bg-purple-500 dark:bg-purple-800");
    } else if (tagColor === "pink") {
      styles.push("text-white bg-pink-500 dark:bg-pink-800");
    } else if (tagColor === "rose") {
      styles.push("text-white bg-rose-500 dark:bg-rose-800");
    }
  } else if (tagStyle === "outline") {
    if (tagColor === "primary") {
      styles.push(
        "text-primary-800 bg-primary-50 border border-primary-300 dark:bg-black dark:text-primary-400 dark:border-primary-400"
      );
    } else if (tagColor === "gray") {
      styles.push(
        "text-gray-800 bg-gray-50 border border-gray-300 dark:bg-black dark:text-gray-400 dark:border-gray-400"
      );
    } else if (tagColor === "red") {
      styles.push(
        "text-red-800 bg-red-50 border border-red-300 dark:bg-black dark:text-red-400 dark:border-red-400"
      );
    } else if (tagColor === "slate") {
      styles.push(
        "text-slate-800 bg-slate-50 border border-slate-300 dark:bg-black dark:text-slate-400 dark:border-slate-400"
      );
    } else if (tagColor === "orange") {
      styles.push(
        "text-orange-800 bg-orange-50 border border-orange-300 dark:bg-black dark:text-orange-400 dark:border-orange-400"
      );
    } else if (tagColor === "yellow") {
      styles.push(
        "text-yellow-800 bg-yellow-50 border border-yellow-300 dark:bg-black dark:text-yellow-400 dark:border-yellow-400"
      );
    } else if (tagColor === "lime") {
      styles.push(
        "text-lime-800 bg-lime-50 border border-lime-300 dark:bg-black dark:text-lime-400 dark:border-lime-400"
      );
    } else if (tagColor === "green") {
      styles.push(
        "text-green-800 bg-green-50 border border-green-300 dark:bg-black dark:text-green-400 dark:border-green-400"
      );
    } else if (tagColor === "emerald") {
      styles.push(
        "text-emerald-800 bg-emerald-50 border border-emerald-300 dark:bg-black dark:text-emerald-400 dark:border-emerald-400"
      );
    } else if (tagColor === "teal") {
      styles.push(
        "text-teal-800 bg-teal-50 border border-teal-300 dark:bg-black dark:text-teal-400 dark:border-teal-400"
      );
    } else if (tagColor === "cyan") {
      styles.push(
        "text-cyan-800 bg-cyan-50 border border-cyan-300 dark:bg-black dark:text-cyan-400 dark:border-cyan-400"
      );
    } else if (tagColor === "blue") {
      styles.push(
        "text-blue-800 bg-blue-50 border border-blue-300 dark:bg-black dark:text-blue-400 dark:border-blue-400"
      );
    } else if (tagColor === "violet") {
      styles.push(
        "text-violet-800 bg-violet-50 border border-violet-300 dark:bg-black dark:text-violet-400 dark:border-violet-400"
      );
    } else if (tagColor === "purple") {
      styles.push(
        "text-purple-800 bg-purple-50 border border-purple-300 dark:bg-black dark:text-purple-400 dark:border-purple-400"
      );
    } else if (tagColor === "pink") {
      styles.push(
        "text-pink-800 bg-pink-50 border border-pink-300 dark:bg-black dark:text-pink-400 dark:border-pink-400"
      );
    } else if (tagColor === "rose") {
      styles.push(
        "text-rose-800 bg-rose-50 border border-rose-300 dark:bg-black dark:text-rose-400 dark:border-rose-400"
      );
    }
  } else if (tagStyle === "soft") {
    if (tagColor === "primary") {
      styles.push("text-primary-800 bg-primary-100 dark:text-white dark:bg-primary-800/50");
    } else if (tagColor === "gray") {
      styles.push("text-gray-800 bg-gray-100 dark:text-white dark:bg-gray-800/50");
    } else if (tagColor === "slate") {
      styles.push("text-slate-800 bg-slate-100 dark:text-white dark:bg-slate-800/50");
    } else if (tagColor === "red") {
      styles.push("text-red-800 bg-red-100 dark:text-white dark:bg-red-800/50");
    } else if (tagColor === "orange") {
      styles.push("text-orange-800 bg-orange-100 dark:text-white dark:bg-orange-800/50");
    } else if (tagColor === "yellow") {
      styles.push("text-yellow-800 bg-yellow-100 dark:text-white dark:bg-yellow-800/50");
    } else if (tagColor === "lime") {
      styles.push("text-lime-800 bg-lime-100 dark:text-white dark:bg-lime-800/50");
    } else if (tagColor === "green") {
      styles.push("text-green-800 bg-green-100 dark:text-white dark:bg-green-800/50");
    } else if (tagColor === "emerald") {
      styles.push("text-emerald-800 bg-emerald-100 dark:text-white dark:bg-emerald-800/50");
    } else if (tagColor === "teal") {
      styles.push("text-teal-800 bg-teal-100 dark:text-white dark:bg-teal-800/50");
    } else if (tagColor === "cyan") {
      styles.push("text-cyan-800 bg-cyan-100 dark:text-white dark:bg-cyan-800/50");
    } else if (tagColor === "blue") {
      styles.push("text-blue-800 bg-blue-100 dark:text-white dark:bg-blue-800/50");
    } else if (tagColor === "violet") {
      styles.push("text-violet-800 bg-violet-100 dark:text-white dark:bg-violet-800/50");
    } else if (tagColor === "purple") {
      styles.push("text-purple-800 bg-purple-100 dark:text-white dark:bg-purple-800/50");
    } else if (tagColor === "pink") {
      styles.push("text-pink-800 bg-pink-100 dark:text-white dark:bg-pink-800/50");
    } else if (tagColor === "rose") {
      styles.push("text-rose-800 bg-rose-100 dark:text-white dark:bg-rose-800/50");
    }
  }
  if (tagSize === "sm") {
    styles.push("inline-block text-xs px-2 py-0.5 rounded-md");
  } else if (tagSize === "default") {
    styles.push("inline-block text-sm px-2 py-1 mx-1 my-0.5 first:ml-0 rounded-md");
  }
  return styles.join(" ");
};
