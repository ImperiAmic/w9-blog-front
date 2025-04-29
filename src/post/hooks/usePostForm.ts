import { useState } from "react";
import { UsePostForm } from "./types";
import { PostFormData } from "../types";
import { useNavigate } from "react-router";
import usePostsProvider from "./usePostsProvider";

const usePostForm = (): UsePostForm => {
  const navigate = useNavigate();
  const { createPost } = usePostsProvider();

  const initialPostFormData = {
    author: "",
    content: "",
    imageAlt: "",
    imageUrl: "",
    tags: [],
    title: "",
    publishDate: new Date(),
  };

  const [postFormData, setPostFormData] =
    useState<PostFormData>(initialPostFormData);
  const [tag, setTag] = useState<string>("");
  const [warning, setWarning] = useState<boolean>(false);

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const property = event.target.id;
    const value = event.target.value;

    setPostFormData((prevData) => ({
      ...prevData,
      [property]: value,
    }));
  };

  const handleNewTag = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;

    setTag(value);
  };

  const addTag = (): void => {
    const trimmedTag = tag.replace(" ", "");

    if (postFormData.tags.length === 3) {
      setWarning(true);
      return;
    }

    if (trimmedTag !== "") {
      setPostFormData(({ tags, ...postFormData }) => ({
        ...postFormData,
        tags: [...tags, trimmedTag],
      }));

      setTag("");
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTag();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    createPost(postFormData);
    navigate("/posts");
  };

  const deleteTag = (thisTag: string): void => {
    const updatedTags = postFormData.tags.filter((tag) => tag !== thisTag);

    setPostFormData((postFormData) => ({
      ...postFormData,
      tags: updatedTags,
    }));

    setWarning(false);
  };

  const isValidData =
    postFormData.author !== "" &&
    postFormData.content !== "" &&
    postFormData.imageAlt !== "" &&
    postFormData.imageUrl !== "" &&
    postFormData.title !== "";

  return {
    tag,
    postFormData,
    handleNewTag,
    handleOnChange,
    handleKeyDown,
    deleteTag,
    handleSubmit,
    warning,
    isValidData,
  };
};

export default usePostForm;
