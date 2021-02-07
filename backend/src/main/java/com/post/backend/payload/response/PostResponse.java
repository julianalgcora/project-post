package com.post.backend.payload.response;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class PostResponse {

    private Long id;
    private String text;
    private int upvote;
}