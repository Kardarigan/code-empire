// Blog_Overview.js
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { categories, sortby } from "../../data/Constants";
import { blogs } from "../../data/Blogs";
import { Blog_Card } from "../Portal";
import { handleHashChange } from "../Utility/Hash_Change";

const Blog_Overview = () => {
  const [category, setCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState(0);
  const [page, setPage] = useState(1);
  const blogsPerPage = 9;

  useEffect(() => {
    const onHashChange = () =>
      handleHashChange(window.location.hash, setCategory, categories);
    onHashChange();
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  useEffect(() => {
    if (category === "همه") {
      window.location.hash = "";
    } else if (category) {
      window.location.hash = encodeURIComponent(category);
    }
  }, [category]);

  const handleCategoryChange = useCallback((e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setPage(1);
  }, []);

  const filteredBlogs = useMemo(() => {
    let sortedBlogs = [...blogs];

    sortedBlogs.reverse();
    if (sort === 1) {
      sortedBlogs.reverse();
    } else if (sort === 2) {
      sortedBlogs.sort((a, b) => a.suggested - b.suggested);
    }

    if (category && category !== "همه") {
      sortedBlogs = sortedBlogs.filter((blog) => blog.category === category);
    }

    if (searchValue) {
      sortedBlogs = sortedBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    return sortedBlogs;
  }, [sort, category, searchValue]);

  const pageCount = Math.ceil(filteredBlogs.length / blogsPerPage);
  const isFirstPage = page === 1;
  const isLastPage = page === pageCount;

  const currentBlogs = useMemo(() => {
    const startIndex = (page - 1) * blogsPerPage;
    return filteredBlogs.slice(startIndex, startIndex + blogsPerPage);
  }, [filteredBlogs, page]);

  const handlePageChanging = useCallback((e) => {
    const pageNumber = parseInt(e.target.value);
    setPage(pageNumber);
  }, []);

  const handleNextPage = useCallback(() => {
    if (!isLastPage) {
      setPage(page + 1);
    }
  }, [isLastPage, page]);

  const handlePrevPage = useCallback(() => {
    if (!isFirstPage) {
      setPage(page - 1);
    }
  }, [isFirstPage, page]);

  useEffect(() => {
    const selectBox = document.getElementById("pageSelect");
    if (selectBox) {
      selectBox.value = page;
    }
  }, [page]);

  return (
    <section className="case">
      <div className="grid grid-cols-12 gap-5 border-b pb-3 mb-5">
        <div className="lg:col-span-2 col-span-12">
          <select
            id="category"
            className="select min-w-5 px-2"
            onChange={handleCategoryChange}
            value={category || ""}
          >
            <option value="" disabled>
              انتخاب دسته
            </option>
            {categories.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="lg:col-span-7 col-span-12 flex items-center px-5 py-2 h-full rounded-full bg-blue-500 text-blue-50">
          <button
            className="pt-1"
            onClick={() =>
              setSearchValue(document.getElementById("search").value)
            }
          >
            <i className="fas fa-magnifying-glass"></i>
          </button>
          <input
            type="text"
            id="search"
            placeholder="عنوان مقاله را وارد کنید..."
            className="py-0 field focus:ring-0 bg-transparent w-full text-slate-50 placeholder-slate-100"
          />
        </div>
        <div className="lg:col-span-3 col-span-12 flex items-center py-3 justify-around overflow-hidden gap-1 text-slate-400 text-xs select-none mac-border border-4">
          {sortby.map((item, index) => (
            <React.Fragment key={index}>
              <span
                className={`cursor-pointer whitespace-nowrap text-ellipsis font-bold ${
                  index === sort && "text-blue-600"
                }`}
                onClick={() => setSort(index)}
              >
                {item}
              </span>
              {index + 1 < sortby.length && (
                <span className="opacity-50">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
        {currentBlogs.map((blog, index) => (
          <Blog_Card blog={blog} key={index} />
        ))}
      </div>
      <div className="max-w-[250px] mx-auto text-center mt-12">
        {filteredBlogs.length === 0 ? (
          "خب به نظر اینجا مطلبی نداریم!"
        ) : (
          <>
            <button
              onClick={handlePrevPage}
              className={isFirstPage ? "opacity-70" : ""}
              disabled={isFirstPage}
            >
              پیش
            </button>
            <select
              id="pageSelect"
              className="mx-1 bg-transparent py-0 px-[30px!important] border border-transparent shadow-none focus:border focus:border-slate-100"
              onChange={handlePageChanging}
            >
              {Array.from({ length: pageCount }, (_, i) => i + 1).map(
                (item, index) => (
                  <option key={index} value={item} className="text-slate-950">
                    {item}
                  </option>
                )
              )}
            </select>
            <button
              onClick={handleNextPage}
              className={isLastPage ? "opacity-70" : ""}
              disabled={isLastPage}
            >
              پس
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Blog_Overview;
