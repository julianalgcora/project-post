package com.post.backend.entrypoint;

import com.post.backend.entrypoint.parameters.Post;
import com.post.backend.payload.response.PostRequest;
import com.post.backend.payload.response.PostResponse;
import com.post.backend.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/post")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping
    public ResponseEntity listarPostagem() {
        List<PostResponse> postagem = postService.listarPostagem();
        return ResponseEntity.ok().body(postagem);
    }

    @PostMapping
    public ResponseEntity postagem(@RequestBody PostRequest body) {
        Post post = new Post();
        BeanUtils.copyProperties(body, post);
        postService.postagem(post);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity alterarPostagem(@PathVariable Long id) {
        postService.alterarPostagem(id);
        return ResponseEntity.noContent().build();7
    }
}
