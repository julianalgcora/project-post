package com.post.backend.service;

import com.post.backend.entrypoint.parameters.Post;
import com.post.backend.payload.response.PostResponse;
import com.post.backend.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.function.Consumer;

@Service
public class PostService {

    private final PostRepository repository;

    public PostService(PostRepository repository) {
        this.repository = repository;
    }

    public List<PostResponse> listarPostagem() {
        List<Post> post = repository.findAll();
        return copyPropertiesDtoToResponse(post);
    }

    private List<PostResponse> copyPropertiesDtoToResponse(List<Post> postList) {
        List<PostResponse> postResponseList = new ArrayList<>();

        postList.forEach(addPost(postResponseList));
        postResponseList.sort(Comparator.comparing(PostResponse::getUpvote).reversed());
        return postResponseList;
    }

    private Consumer<? super Post> addPost(List<PostResponse> postResponseList) {
        return postResponse -> postResponseList.add(PostResponse.builder()
                .id(postResponse.getId())
                .text(postResponse.getText())
                .upvote(postResponse.getUpvote())
                .build());
    }

    public void postagem(Post post) {
        repository.save(post);
    }

    public Optional<Post> alterarPostagem(Long id) {
        return repository.findById(id)
                .map(posts -> {
                    posts.setUpvote(posts.getUpvote() + 1);
                    return repository.save(posts);
                });

    }
}
