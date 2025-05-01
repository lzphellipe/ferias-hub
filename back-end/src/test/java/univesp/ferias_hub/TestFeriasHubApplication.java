package univesp.ferias_hub;

import org.springframework.boot.SpringApplication;

public class TestFeriasHubApplication {

	public static void main(String[] args) {
		SpringApplication.from(FeriasHubApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
