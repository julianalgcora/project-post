package com.segware.backend;

import com.post.backend.entrypoint.parameters.Post;
import com.post.backend.payload.response.PostResponse;
import com.post.backend.service.PostService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PostServiceTest {

    @Autowired
    private PostService postService;

    @Before
    public void setUp() {
        Post post = new Post("Texto publicado através do teste unitário", 1);
        Post post2 = new Post("Texto publicado 2 através do teste unitário", 2);
        assertNull(post.getId());
        assertNull(post2.getId());
        this.postService.postagem(post);
        this.postService.postagem(post2);
        assertNotNull(post.getId());
        assertNotNull(post2.getId());
    }

    @Test
    public void testFetchData() {
        List<PostResponse> retornoPost = postService.listarPostagem();
        assertNotNull(retornoPost);
        assertEquals("Texto publicado através do teste unitário", retornoPost.get(0).getText());
        assertEquals(1, retornoPost.get(0).getUpvote());
        assertEquals("Texto publicado 2 através do teste unitário", retornoPost.get(1).getText());
        assertEquals(2, retornoPost.get(1).getUpvote());
    }

    @Test
    public void testUpdateData() {
        List<PostResponse> retornoPost = postService.listarPostagem();
        int upvote = retornoPost.get(0).getUpvote();
        postService.alterarPostagem(retornoPost.get(0).getId());
        List<PostResponse> retornoPostUpdate = postService.listarPostagem();
        assertEquals(upvote + 1, retornoPostUpdate.get(0).getUpvote());
    }
}
