package com.learntogether;

import de.codecentric.boot.admin.server.config.EnableAdminServer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@EnableAdminServer
@SpringBootApplication
public class LearnTogetherApplication {

	public static void main(String[] args) {
		SpringApplication.run(LearnTogetherApplication.class, args);
	}

}
