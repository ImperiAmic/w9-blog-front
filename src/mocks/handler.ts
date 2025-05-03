import { http, HttpResponse } from "msw";
import {
  costillitasLekuePostDto,
  lekueRecipiesPostsDto,
  microwaveRecipiesPostsDto,
  veggieLekuePostDto,
} from "../post/dto/fixturesDto";
import { PostDto } from "../post/dto/types";

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error("URL not found for the test");
}

export const handlers = [
  http.get(`${apiUrl}/posts`, ({ request }) => {
    const url = new URL(request.url);
    const currentPage = url.searchParams.get("pageNumber");

    if (currentPage === "2") {
      return HttpResponse.json<{ posts: PostDto[]; postsTotal: number }>({
        posts: lekueRecipiesPostsDto,
        postsTotal: lekueRecipiesPostsDto.length,
      });
    }

    return HttpResponse.json<{ posts: PostDto[]; postsTotal: number }>({
      posts: microwaveRecipiesPostsDto,
      postsTotal: microwaveRecipiesPostsDto.length,
    });
  }),

  http.post(`${apiUrl}/posts`, () => {
    return HttpResponse.json<{ post: PostDto }>({
      post: costillitasLekuePostDto,
    });
  }),

  http.get(`${apiUrl}/posts/12345678901234567890abcd`, () => {
    return HttpResponse.json<{ post: PostDto }>({
      post: veggieLekuePostDto,
    });
  }),
];
