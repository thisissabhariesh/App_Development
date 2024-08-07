package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.AdminProfile;
import com.example.demo.service.AdminProfileService;

@RestController
@RequestMapping("/api/admins")
public class AdminProfileController {

    @Autowired
    private AdminProfileService adminProfileService;

    @GetMapping("/admins")
    public List<AdminProfile> getAllAdminProfiles() {
        return adminProfileService.getAllAdminProfiles();
    }

    @GetMapping("/admin/{id}")
    public ResponseEntity<AdminProfile> getAdminProfileById(@PathVariable String id) {
        Optional<AdminProfile> adminProfile = adminProfileService.getAdminProfileById(id);
        if (adminProfile.isPresent()) {
            return ResponseEntity.ok(adminProfile.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/admin")
    public AdminProfile createAdminProfile(@RequestBody AdminProfile adminProfile) {
        return adminProfileService.createAdminProfile(adminProfile);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AdminProfile> updateAdminProfile(@PathVariable String id, @RequestBody AdminProfile adminProfileDetails) {
        AdminProfile updatedAdminProfile = adminProfileService.updateAdminProfile(id, adminProfileDetails);
        return ResponseEntity.ok(updatedAdminProfile);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdminProfile(@PathVariable String id) {
        adminProfileService.deleteAdminProfile(id);
        return ResponseEntity.noContent().build();
    }
}