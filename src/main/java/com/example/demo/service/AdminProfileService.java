package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.AdminProfile;
import com.example.demo.repository.AdminProfileRepository;

@Service
public class AdminProfileService {

    @Autowired
    private AdminProfileRepository adminProfileRepository;

    public List<AdminProfile> getAllAdminProfiles() {
        return adminProfileRepository.findAll();
    }

    public Optional<AdminProfile> getAdminProfileById(String id) {
        return adminProfileRepository.findById(id);
    }

    public AdminProfile createAdminProfile(AdminProfile adminProfile) {
        return adminProfileRepository.save(adminProfile);
    }

    public AdminProfile updateAdminProfile(String id, AdminProfile adminProfileDetails) {
        AdminProfile adminProfile = adminProfileRepository.findById(id).orElseThrow(() -> new RuntimeException("AdminProfile not found"));

        adminProfile.setName(adminProfileDetails.getName());
        adminProfile.setEmail(adminProfileDetails.getEmail());
        adminProfile.setPassword(adminProfileDetails.getPassword());
        adminProfile.setRole(adminProfileDetails.getRole());

        return adminProfileRepository.save(adminProfile);
    }

    public void deleteAdminProfile(String id) {
        adminProfileRepository.deleteById(id);
    }
}