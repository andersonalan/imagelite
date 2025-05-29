package io.github.andersonalan.imageliteapi.domain.service;

import io.github.andersonalan.imageliteapi.domain.AccessToken;
import io.github.andersonalan.imageliteapi.domain.entity.User;

public interface UserService {
    User getByEmail(String email);
    User save(User user);
    AccessToken authenticate(String email, String password);


}
