package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.UserProfile;
import com.example.demo.repository.UserProfileRepository;

@Service
public class UserProfileService {

    @Autowired
    private UserProfileRepository userProfileRepository;

    public List<UserProfile> getAllUserProfiles() {
        return userProfileRepository.findAll();
    }

    public Optional<UserProfile> getUserProfileById(String id) {
        return userProfileRepository.findById(id);
    }

    public UserProfile createUserProfile(UserProfile userProfile) {
        return userProfileRepository.save(userProfile);
    }

    public UserProfile updateUserProfile(String id, UserProfile userProfileDetails) {
        UserProfile userProfile = userProfileRepository.findById(id).orElseThrow(() -> new RuntimeException("UserProfile not found"));

        userProfile.setName(userProfileDetails.getName());
        userProfile.setEmail(userProfileDetails.getEmail());
        userProfile.setPassword(userProfileDetails.getPassword());
        userProfile.setRole(userProfileDetails.getRole());

        return userProfileRepository.save(userProfile);
    }

    public void deleteUserProfile(String id) {
        userProfileRepository.deleteById(id);
    }
}